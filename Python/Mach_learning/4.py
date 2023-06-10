from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# Wczytanie zbioru danych
iris = load_iris()

# Podział danych na zbiór treningowy i testowy
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42)

# Inicjalizacja modelu
model = KNeighborsClassifier(n_neighbors=3)

# Trenowanie modelu
model.fit(X_train, y_train)

# Przewidywanie klas dla danych testowych
y_pred = model.predict(X_test)

# Obliczanie dokładności modelu
accuracy = accuracy_score(y_test, y_pred)
print("Dokładność modelu: {:.2f}".format(accuracy))
