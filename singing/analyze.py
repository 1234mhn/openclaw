#!/usr/bin/env python3
"""
唱歌评测音频分析脚本
使用 librosa 进行精准音高分析

用法: python3 analyze.py <音频文件路径>

输出: JSON 格式的分析结果
"""

import librosa
import numpy as np
import json
import sys
import os
import warnings
warnings.filterwarnings('ignore')

NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']


def freq_to_note(freq):
    """将频率转换为音符名称"""
    if freq <= 0 or np.isnan(freq):
        return '—'
    semitone = 12 * np.log2(freq / 440.0) + 69
    midi = int(round(semitone))
    return NOTE_NAMES[midi % 12] + str(midi // 12 - 1)


def freq_to_cents(freq):
    """将频率转换为音分（相对 A4=440Hz 的偏移）"""
    if freq <= 0 or np.isnan(freq):
        return 0
    return 1200 * np.log2(freq / 440.0) + 6900


def cents_between(f1, f2):
    """计算两个频率之间的音分差"""
    if f1 <= 0 or f2 <= 0 or np.isnan(f1) or np.isnan(f2):
        return float('inf')
    return abs(1200 * np.log2(f1 / f2))


def analyze(audio_path):
    """
    对音频文件进行全面分析
    
    返回包含以下字段的字典:
    - avgFreq, minFreq, maxFreq: 频率统计
    - avgNote: 平均音高对应的音符名
    - pitchStabilityCents: 音高稳定度（标准差，单位音分）
    - breathCount: 换气次数
    - silenceRatio: 静音比例
    - segments: 逐段评分
    - avgPitchScore, avgStabScore, breathScore, overallScore: 总体评分
    - voicedRatio: 发声比例
    - transitionCount: 音高转换次数
    - avgConfidence: 平均置信度
    - dynamicRange: 动态范围 (dB)
    """
    # ── 加载音频 ──
    y, sr = librosa.load(audio_path, sr=None, mono=True)
    duration = len(y) / sr

    if duration < 0.5:
        return {"error": "录音太短",
                "error_detail": f"录音时长仅 {duration:.1f} 秒，建议至少录制 1 秒以上"}

    # ── 音高跟踪 (PYIN 算法) ──
    hop_length = 512
    fmin, fmax = 65.0, 800.0

    f0, voiced_flag, voiced_probs = librosa.pyin(
        y, fmin=fmin, fmax=fmax, sr=sr,
        fill_na=np.nan, hop_length=hop_length
    )

    # 时间轴
    times = librosa.times_like(f0, sr=sr, hop_length=hop_length)

    # ── RMS 能量（用于呼吸/静音检测） ──
    rms = librosa.feature.rms(y=y, frame_length=2048, hop_length=hop_length)[0]

    # 对齐长度（防止因浮点误差导致的不一致）
    min_len = min(len(f0), len(rms), len(times))
    f0 = f0[:min_len]
    rms = rms[:min_len]
    times = times[:min_len]

    # 发声帧检测
    voiced_threshold = 0.005
    voiced_mask = (~np.isnan(f0)) & (rms > voiced_threshold)
    voiced_freqs = f0[voiced_mask]
    voiced_times = times[voiced_mask]
    unvoiced_mask = np.isnan(f0) | (rms <= voiced_threshold)
    silence_mask = rms <= voiced_threshold

    if len(voiced_freqs) == 0:
        return {"error": "未检测到有效声音",
                "error_detail": "录音中未检测到明显的歌声或说话声，请确保麦克风正常工作并靠近说话"}

    # ── 基本统计 ──
    avg_freq = float(np.mean(voiced_freqs))
    min_freq = float(np.min(voiced_freqs))
    max_freq = float(np.max(voiced_freqs))
    avg_note = freq_to_note(avg_freq)
    avg_confidence = float(np.mean(voiced_probs[voiced_mask])) if np.any(voiced_mask) else 0

    # 音高稳定度：频率的音分标准差
    cents = np.array([freq_to_cents(f) for f in voiced_freqs])
    pitch_stability_cents = float(np.std(cents))

    # 发声/静音比例
    voiced_ratio = len(voiced_freqs) / len(f0)
    silence_ratio = float(np.sum(silence_mask)) / len(rms)

    # ── 换气检测（静音 > 150ms 记为一次换气） ──
    breath_count = 0
    in_silence = False
    silence_start = 0.0
    for i in range(len(rms)):
        is_silent = rms[i] <= voiced_threshold
        if is_silent and not in_silence:
            in_silence = True
            silence_start = times[i]
        elif not is_silent and in_silence:
            silence_dur = times[i] - silence_start
            if silence_dur > 0.15:
                breath_count += 1
            in_silence = False

    # ── 音符转换计数 ──
    prev_note = ''
    note_hold = []
    transitions = 0
    for i in range(len(voiced_freqs)):
        note = freq_to_note(voiced_freqs[i])
        if note != prev_note and prev_note != '':
            if len(note_hold) >= 3:
                transitions += 1
            note_hold = []
        note_hold.append(voiced_freqs[i])
        prev_note = note

    # ── 动态范围 (dB) ──
    voiced_rms = rms[voiced_mask]
    if len(voiced_rms) > 1:
        max_rms_val = float(np.max(voiced_rms))
        min_rms_val = float(np.min(voiced_rms))
        dynamic_range = 20 * np.log10(max_rms_val / min_rms_val) if min_rms_val > 0 else 0
    else:
        dynamic_range = 0

    # ── 5 秒分段评分 ──
    seg_duration = 5
    num_segs = max(1, int(np.ceil(duration / seg_duration)))
    segments = []

    for s in range(num_segs):
        seg_start = s * seg_duration
        seg_end = min((s + 1) * seg_duration, duration)

        seg_mask = (times >= seg_start) & (times < seg_end)
        seg_rms = rms[seg_mask]
        seg_voiced_mask = voiced_mask[seg_mask]
        seg_voiced_freqs = f0[seg_mask][seg_voiced_mask]
        seg_total = len(seg_rms)

        # ---- 音准分 ----
        pitch_score = 0
        if len(seg_voiced_freqs) >= 3:
            seg_cents = np.array([freq_to_cents(f) for f in seg_voiced_freqs])
            seg_variance = float(np.nanstd(seg_cents))
            pitch_score = max(0, min(100, 100 - seg_variance * 0.5))
        elif len(seg_voiced_freqs) > 0:
            pitch_score = min(100, 20 + int(len(seg_voiced_freqs)) * 5)

        # ---- 稳定分（抖动检测） ----
        stab_score = 0
        if len(seg_voiced_freqs) >= 5:
            seg_cents = np.array([freq_to_cents(f) for f in seg_voiced_freqs])
            jitter_sum = 0.0
            jitter_count = 0
            for j in range(2, len(seg_cents)):
                d1 = abs(seg_cents[j] - seg_cents[j - 1])
                d2 = abs(seg_cents[j - 1] - seg_cents[j - 2])
                jitter_sum += (d1 + d2) / 2
                jitter_count += 1
            avg_jitter = jitter_sum / jitter_count if jitter_count > 0 else 0
            stab_score = max(0, min(100, 100 - avg_jitter * 1.5))
        elif len(seg_voiced_freqs) > 0:
            stab_score = 30

        # ---- 气息分 ----
        seg_silence = float(np.sum(seg_rms <= voiced_threshold)) / max(seg_total, 1)
        sing_ratio = len(seg_voiced_freqs) / max(seg_total, 1)
        breath_score = round(
            max(0, min(100,
                sing_ratio * 100 * 0.7 + (1 - seg_silence) * 30
            ))
        )

        # ---- 综合分 ----
        overall = round(pitch_score * 0.35 + stab_score * 0.35 + breath_score * 0.30)

        tag = 'good'
        if overall < 40:
            tag = 'problem'
        elif overall < 65:
            tag = 'ok'

        segments.append({
            "index": s + 1,
            "start": round(seg_start, 1),
            "end": round(seg_end, 1),
            "pitchScore": round(pitch_score),
            "stabScore": round(stab_score),
            "breathScore": round(breath_score),
            "overall": overall,
            "tag": tag,
            "voicedCount": int(len(seg_voiced_freqs))
        })

    # ── 总体评分 ──
    avg_pitch_score = float(np.mean([s["pitchScore"] for s in segments]))
    avg_stab_score = float(np.mean([s["stabScore"] for s in segments]))
    breath_score_overall = round(
        max(0, min(100,
            (1 - silence_ratio) * 60 + max(0, 40 - breath_count * 2)
        ))
    )

    overall_score = round(
        avg_pitch_score * 0.30 + avg_stab_score * 0.30 + breath_score_overall * 0.40
    )

    return {
        "avgFreq": round(avg_freq, 1),
        "minFreq": round(min_freq, 1),
        "maxFreq": round(max_freq, 1),
        "avgNote": avg_note,
        "pitchStabilityCents": round(pitch_stability_cents, 1),
        "breathCount": breath_count,
        "silenceRatio": round(silence_ratio, 3),
        "segments": segments,
        "avgPitchScore": round(avg_pitch_score),
        "avgStabScore": round(avg_stab_score),
        "breathScore": breath_score_overall,
        "overallScore": overall_score,
        "voicedRatio": round(voiced_ratio, 3),
        "transitionCount": transitions,
        "avgConfidence": round(avg_confidence, 3),
        "dynamicRange": round(dynamic_range, 1)
    }


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(json.dumps({"error": "缺少音频文件路径参数"}, ensure_ascii=False))
        sys.exit(1)

    audio_path = sys.argv[1]

    if not os.path.isfile(audio_path):
        print(json.dumps({"error": "音频文件不存在", "path": audio_path}, ensure_ascii=False))
        sys.exit(1)

    try:
        result = analyze(audio_path)
        print(json.dumps(result, ensure_ascii=False))
    except Exception as e:
        print(json.dumps({
            "error": "分析过程异常",
            "error_detail": str(e)
        }, ensure_ascii=False))
        sys.exit(1)
