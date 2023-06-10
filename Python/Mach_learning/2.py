import numpy as np
from sklearn.linear_model import LinearRegression

# Dane treningowe
X_train = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)  # Ilość godzin nauki
y_train = np.array([60, 80, 90, 70, 85])  # Wyniki testów

# Inicjalizacja modelu
model = LinearRegression()

# Trenowanie modelu
model.fit(X_train, y_train)

# Dane testowe
X_test = np.array([6, 7, 8, 1, 0]).reshape(-1, 1)  # Ilość godzin nauki

# Przewidywanie wyników testów dla danych testowych
y_pred = model.predict(X_test)

# Wyświetlanie przewidywanych wyników
for i, x in enumerate(X_test):
    print("Przewidywany wynik dla {} godzin nauki: {:.2f}".format(
        x[0], y_pred[i]))
