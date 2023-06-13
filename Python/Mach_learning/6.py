import tensorflow as tf
from tensorflow.keras.datasets import boston_housing
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Wczytanie danych dotyczących cen nieruchomości
(x_train, y_train), (x_test, y_test) = boston_housing.load_data()

# Przygotowanie danych
x_train = (x_train - x_train.mean(axis=0)) / x_train.std(axis=0)
x_test = (x_test - x_test.mean(axis=0)) / x_test.std(axis=0)

# Definicja modelu
model = Sequential()
model.add(Dense(64, activation='relu', input_shape=(x_train.shape[1],)))
model.add(Dense(64, activation='relu'))
model.add(Dense(1))

# Kompilacja modelu
model.compile(optimizer='adam', loss='mean_squared_error')

# Trenowanie modelu
model.fit(x_train, y_train, epochs=50, batch_size=32, verbose=0)

# Ocena modelu na zbiorze testowym
loss = model.evaluate(x_test, y_test)
print("Loss:", loss)

# Zapisanie modelu do pliku
model.save("my_model.h5")
