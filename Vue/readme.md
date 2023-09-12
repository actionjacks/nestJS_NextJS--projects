# Utwórz projekt Vue: Rozpocznij od utworzenia projektu Vue lokalnie. Możesz to zrobić za pomocą narzędzia Vue CLI (Command Line Interface) lub dowolnego szablonu Vue.

Dodaj konfigurację do pliku vue.config.js: W katalogu projektu Vue utwórz plik vue.config.js, jeśli jeszcze go nie masz, i dodaj do niego następującą konfigurację:

javascript
```
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
};
```

# Ta konfiguracja ustawia serwer deweloperski Vue na adresie 0.0.0.0 (aby był dostępny z kontenera Docker) i na porcie 8080.
Uruchom kontener Dockera: Stwórz plik Dockerfile, który zawiera obraz Node.js, a następnie skopiuj pliki projektu Vue do kontenera i zainstaluj zależności. Oto przykładowy plik Dockerfile:
```
# Użyj oficjalnego obrazu Node.js
FROM node:14

# Ustaw katalog roboczy na /app
WORKDIR /app

# Skopiuj pliki projektu Vue do kontenera
COPY . .

# Zainstaluj zależności
RUN npm install

# Uruchom serwer deweloperski
CMD ["npm", "run", "serve"]
```

# Zbuduj i uruchom obraz Dockera: W katalogu z plikiem Dockerfile uruchom polecenia, aby zbudować i uruchomić obraz Dockera:

```
docker build -t nazwa_obrazu .
docker run -it -p 8080:8080 nazwa_obrazu

```
