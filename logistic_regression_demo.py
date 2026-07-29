"""
📊 逻辑回归 · 手把手代码实战

我们从零到一：造数据 → 训练 → 预测 → 画图
"""

# ============================================
# Step 1: 导入需要的库
# ============================================
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix
import numpy as np
import matplotlib.pyplot as plt

print("="*50)
print("📊 逻辑回归实战演示")
print("="*50)

# ============================================
# Step 2: 造一份简单数据
# ============================================
# 场景：根据"学习时长"判断"是否通过考试"
# X = 学习时长（小时），y = 是否通过（0=挂，1=过）

print("\n📌 第一步：造数据")
print("   场景：根据学习时长预测是否通过考试")

np.random.seed(42)  # 固定随机种子，结果可复现

# 学习时长：从1小时到6小时，共20个样本
X = np.array([
    [1.2], [1.8], [2.1], [2.5], [2.8],
    [3.0], [3.2], [3.5], [3.7], [3.9],
    [4.1], [4.3], [4.5], [4.8], [5.0],
    [5.2], [5.5], [5.7], [5.9], [6.0]
])

# 是否通过：0=挂，1=过
y = np.array([0, 0, 0, 0, 1,    # 学<2.5小时的挂了
              0, 0, 1, 1, 1,    # 2.5~3.5小时是模糊区
              1, 1, 1, 1, 1,    # 3.5小时以上基本都过了
              1, 1, 1, 1, 1])

print(f"   数据量：{len(X)} 条")
print(f"   学习时长范围：{float(X.min()):.1f}h ~ {float(X.max()):.1f}h")
print(f"   通过人数：{y.sum()} / {len(y)}")
print(f"   未通过人数：{len(y) - y.sum()} / {len(y)}")

# 看一眼数据长什么样
print("\n   原始数据一览：")
print(f"   {'时长(h)':>8} {'结果':>6}")
print(f"   {'------':>8} {'----':>6}")
for xi, yi in zip(X, y):
    status = "✅ 过" if yi == 1 else "❌ 挂"
    print(f"   {xi[0]:>8.1f} {status}")

# ============================================
# Step 3: 切分训练集和测试集
# ============================================
print("\n\n📌 第二步：切分数据")
print("   70% 用于训练，30% 用于测试")

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

print(f"   训练集：{len(X_train)} 条")
print(f"   测试集：{len(X_test)} 条")

# ============================================
# Step 4: 创建并训练逻辑回归模型
# ============================================
print("\n\n📌 第三步：训练逻辑回归模型")

# 创建模型
model = LogisticRegression()

# 训练
model.fit(X_train, y_train)

# 看看学到的参数
w = model.coef_[0][0]  # 权重（斜率）
b = model.intercept_[0]  # 偏置（截距）

print(f"\n   训练完成！")
print(f"   学到的参数：")
print(f"     权重 w = {w:.4f}  （每多学1小时，对通过的影响）")
print(f"     偏置 b = {b:.4f}  （截距）")
print(f"\n   模型公式：z = {w:.4f} × 时长 + ({b:.4f})")
print(f"   概率公式：p = 1 / (1 + e⁻ᶻ)")

# 决策边界：p = 0.5 时，z = 0
decision_hour = -b / w
print(f"\n🔑 决策边界：学习约 {decision_hour:.2f} 小时")
print(f"   学 < {decision_hour:.2f}h → 大概率挂科")
print(f"   学 > {decision_hour:.2f}h → 大概率通过")

# ============================================
# Step 5: 在测试集上做预测
# ============================================
print("\n\n📌 第四步：测试集预测")

# 硬预测：直接出类别（0或1）
y_pred = model.predict(X_test)

# 概率预测：输出概率值
y_prob = model.predict_proba(X_test)

# 对比真实值和预测值
print(f"\n   {'时长':>6} {'真实':>6} {'预测':>6} {'概率(过)':>10}")
print(f"   {'------':>6} {'----':>6} {'----':>6} {'--------':>10}")
for xi, true, pred, prob in zip(X_test, y_test, y_pred, y_prob):
    check = "✅" if true == pred else "❌"
    print(f"   {xi[0]:>6.1f} {true:>6} {pred:>6} {prob[1]:>10.1%}  {check}")

# ============================================
# Step 6: 评估模型性能
# ============================================
print("\n\n📌 第五步：模型评估")

accuracy = accuracy_score(y_test, y_pred)
cm = confusion_matrix(y_test, y_pred)

print(f"\n   准确率：{accuracy:.0%}")
print(f"\n   混淆矩阵：")
print(f"             预测挂   预测过")
print(f"   真实挂   {cm[0][0]:>6}  {cm[0][1]:>6}")
print(f"   真实过   {cm[1][0]:>6}  {cm[1][1]:>6}")

# ============================================
# Step 7: 画图可视化
# ============================================
print("\n\n📌 第六步：画图看Sigmoid曲线和决策边界")

# 生成密集的x值，画出平滑的Sigmoid曲线
x_range = np.linspace(0, 7, 100).reshape(-1, 1)
y_prob_full = model.predict_proba(x_range)[:, 1]

# 画图
plt.figure(figsize=(10, 6))

# 画Sigmoid概率曲线
plt.plot(x_range, y_prob_full, 'b-', linewidth=2, label='Sigmoid概率曲线')

# 画训练集数据点
plt.scatter(X_train[y_train==0], y_train[y_train==0], 
            color='red', s=100, marker='x', label='训练: 挂科')
plt.scatter(X_train[y_train==1], y_train[y_train==1], 
            color='green', s=100, marker='o', label='训练: 通过')

# 画测试集数据点
plt.scatter(X_test[y_test==0], y_test[y_test==0], 
            color='red', s=150, marker='x', edgecolors='black', label='测试: 挂科')
plt.scatter(X_test[y_test==1], y_test[y_test==1], 
            color='green', s=150, marker='o', edgecolors='black', label='测试: 通过')

# 画决策边界 (p=0.5)
plt.axhline(y=0.5, color='gray', linestyle='--', alpha=0.5, label='阈值 p=0.5')
plt.axvline(x=decision_hour, color='orange', linestyle='--', linewidth=2, 
            label=f'决策边界 ≈ {decision_hour:.2f}h')

# 标注
plt.xlabel('学习时长 (小时)', fontsize=12)
plt.ylabel('通过概率', fontsize=12)
plt.title('逻辑回归：学习时长 → 是否通过考试', fontsize=14)
plt.ylim(-0.05, 1.05)
plt.xlim(0, 7)
plt.grid(True, alpha=0.3)
plt.legend(loc='lower right')

# 保存图片
plt.savefig('/root/.openclaw/workspace/logistic_regression_demo.png', dpi=150, bbox_inches='tight')
print(f"\n   图片已保存：logistic_regression_demo.png")
print("\n" + "="*50)
print("✅ 演示完成！")
print("="*50)
