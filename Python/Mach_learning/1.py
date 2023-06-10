import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Dane treningowe
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)  # Dane wejściowe (cechy)
y = np.array([2, 4, 6, 8, 10])  # Oczekiwane wartości (etykiety)

# Podział danych na zbiór treningowy i testowy
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Inicjalizacja modelu i jego trenowanie
model = LinearRegression()
model.fit(X_train, y_train)

# Przewidywanie wartości dla danych testowych
y_pred = model.predict(X_test)

# Wykres przedstawiający dane treningowe, dopasowany model i przewidywane wartości
plt.scatter(X_train, y_train, color='blue', label='Dane treningowe')
plt.plot(X_train, model.predict(X_train),
         color='red', linewidth=2, label='Model')
plt.scatter(X_test, y_test, color='green', label='Dane testowe')
plt.xlabel('X')
plt.ylabel('y')
plt.legend()
plt.show()
