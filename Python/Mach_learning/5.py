import numpy as np
from sklearn.datasets import fetch_openml
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Pobranie zestawu danych MNIST
mnist = fetch_openml('mnist_784', version=1)
X, y = mnist["data"], mnist["target"]

# Podział na zbiór treningowy i testowy
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Standaryzacja danych
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Definicja neuronu


class Neuron:
    def __init__(self, n_inputs):
        self.weights = np.random.randn(n_inputs)
        self.bias = np.random.randn()

    def activate(self, x):
        # Funkcja aktywacji (np. sigmoidalna)
        return 1 / (1 + np.exp(-np.dot(x, self.weights) - self.bias))

    def update_weights(self, x, error, learning_rate):
        # Aktualizacja wag
        self.weights += learning_rate * error * x
        self.bias += learning_rate * error


# Inicjalizacja neuronu
n_inputs = X_train.shape[1]
neuron = Neuron(n_inputs)

# Trening neuronu
learning_rate = 0.01
epochs = 100

for epoch in range(epochs):
    for x, y in zip(X_train, y_train):
        # Przygotowanie danych
        x = np.reshape(x, (1, -1))
        y = int(y)

        # Propagacja sygnału przez neuron
        output = neuron.activate(x)

        # Obliczenie błędu
        error = y - output

        # Aktualizacja wag neuronu
        neuron.update_weights(x, error, learning_rate)

# Testowanie neuronu
correct = 0
for x, y in zip(X_test, y_test):
    x = np.reshape(x, (1, -1))
    y = int(y)
    output = neuron.activate(x)
    predicted = round(output)

    if predicted == y:
        correct += 1

accuracy = correct / len(y_test) * 100
print("Dokładność: {:.2f}%".format(accuracy))
