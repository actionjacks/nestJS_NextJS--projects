FROM golang:alpine

RUN mkdir -p /var/www

WORKDIR /var/www

COPY . /var/www
# change GOARCH for your os, yours will probably be amd64
# there's a bug with qemu on the M1 chip, so I need arm
RUN CGO_ENABLED=0 GOOS=linux GOARCH=arm go build -o app

EXPOSE 3200
ENTRYPOINT ["/var/www/app"]

# FROM golang:alpine: Rozpoczynamy od użycia obrazu bazowego golang:alpine. Jest to lekki obraz oparty na systemie Alpine Linux, który zawiera środowisko Go.

# RUN mkdir -p /var/www: Tworzymy katalog /var/www wewnątrz kontenera, w którym umieścimy naszą aplikację.

# WORKDIR /var/www: Ustawiamy katalog roboczy na /var/www, co oznacza, że wszystkie kolejne operacje będą wykonywane w tym katalogu.

# COPY . /var/www: Kopiujemy zawartość bieżącego katalogu (czyli katalogu, w którym znajduje się Dockerfile) do katalogu /var/www wewnątrz kontenera.

# RUN CGO_ENABLED=0 GOOS=linux GOARCH=arm go build -o app: Wykonujemy kompilację naszej aplikacji Go wewnątrz kontenera. Ustawiamy zmienne środowiskowe CGO_ENABLED=0, aby wyłączyć wsparcie dla CGO (C-Go), co pozwoli na statyczne linkowanie i utworzenie bardziej przenośnego binarnego pliku wynikowego. Ustawiamy również GOOS=linux i GOARCH=arm, aby skompilować naszą aplikację dla systemu Linux na architekturę ARM (przydatne na przykład na Raspberry Pi).

# EXPOSE 3200: Określamy, że nasza aplikacja nasłuchuje na porcie 3200. To jest tylko deklaracja, a nie faktyczne mapowanie portów, które zostanie wykonane przy uruchamianiu kontenera.

# ENTRYPOINT ["/var/www/app"]: Ustawiamy punkt wejścia (entrypoint) dla naszego kontenera, co oznacza, że po uruchomieniu kontenera zostanie automatycznie uruchomiona nasza aplikacja app, która została skompilowana wcześniej w kroku 5.