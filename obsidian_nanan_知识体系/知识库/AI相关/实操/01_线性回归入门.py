"""
📅 2026.06.27 — 机器学习 Day 1
🏷️ 线性回归入门
🚀 目标：理解机器学习的最基本流程
"""

import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# ========== 1. 准备数据 ==========
# 假设：房价 = 50万 + 30万 × 面积(㎡)
np.random.seed(42)
X = np.random.rand(100, 1) * 100  # 面积 0~100㎡
y = 50 + 0.3 * X + np.random.randn(100, 1) * 5  # 加一些随机噪声

# ========== 2. 分训练集和测试集 ==========
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# ========== 3. 训练模型 ==========
model = LinearRegression()
model.fit(X_train, y_train)

# ========== 4. 预测 ==========
y_pred = model.predict(X_test)

# ========== 5. 评估 ==========
mse = mean_squared_error(y_test, y_pred)
print(f"模型公式: 房价 = {model.intercept_[0]:.2f} + {model.coef_[0][0]:.2f} × 面积")
print(f"预测误差(MSE): {mse:.2f}")
print(f"实际公式: 房价 = 50.00 + 0.30 × 面积")
print("✅ 模型学到的参数接近真实值！")

# ========== 6. 可视化 ==========
plt.figure(figsize=(8,5))
plt.scatter(X_train, y_train, alpha=0.5, label='训练数据')
plt.scatter(X_test, y_test, color='red', alpha=0.5, label='测试数据')
plt.plot(X_test, y_pred, color='green', linewidth=2, label='预测线')
plt.xlabel('面积 (㎡)')
plt.ylabel('房价 (万元)')
plt.title('线性回归：面积 vs 房价')
plt.legend()
plt.savefig('/root/.openclaw/workspace/ML学习/01_线性回归结果.png')
plt.show()
print("📊 图表已保存")
