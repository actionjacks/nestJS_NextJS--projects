import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Dane treningowe
X = np.array([[2.5, 1.0], [1.5, 1.2], [3.5, 1.5],
             [3.0, 1.8], [2.0, 2.0], [1.0, 1.5]])
y = np.array([0, 0, 1, 1, 0, 1])  # Klasy: 0 - niezdany, 1 - zdał

# Podział danych na zbiór treningowy i testowy
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Inicjalizacja modelu
model = LogisticRegression()

# Trenowanie modelu
model.fit(X_train, y_train)

# Przewidywanie klas dla danych testowych
y_pred = model.predict(X_test)

# Obliczanie dokładności modelu
accuracy = accuracy_score(y_test, y_pred)
print("Dokładność modelu: {:.2f}".format(accuracy))
