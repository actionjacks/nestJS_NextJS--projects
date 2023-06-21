import tensorflow as tf
import numpy as np
import urllib
from PIL import Image
import tensorflow_hub as hub

# Pobierz wytrenowany model
model_url = "https://tfhub.dev/google/tf2-preview/mobilenet_v2/classification/2"
model = tf.keras.Sequential([tf.keras.layers.InputLayer(input_shape=(224, 224, 3)),
                             hub.KerasLayer(model_url)])

# Pobierz obraz do analizy
# image_url = "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
image_path = "kur.jpg"
# urllib.request.urlretrieve(image_url, image_path)

# Wczytaj obraz i dostosuj go do wymagań modelu
image = Image.open(image_path).resize((224, 224))
# Normalizuj piksele do wartości z przedziału 0-1
image_array = np.array(image) / 255.0
# Dodaj dodatkową oś dla wsadu danych
image_array = np.expand_dims(image_array, axis=0)

# Przewiduj klasę obrazu
predictions = model.predict(image_array)
predicted_class = np.argmax(predictions[0])

# Wczytaj etykiety klas
labels_path = "labels.txt"
urllib.request.urlretrieve(
    "https://storage.googleapis.com/download.tensorflow.org/data/ImageNetLabels.txt", labels_path)
with open(labels_path, "r") as file:
    labels = file.read().splitlines()

# Wyświetl wynik
print("Przewidziana klasa: ", labels[predicted_class])
