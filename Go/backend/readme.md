## go mod init <name/name>

## go build

<-- file name is from go mod

## go build && ./jck.exe

## export FO=000

exportuje zmienna środowiskową aby mozna bylo skompilowac
go build, zmienna środowiskowa zaimportowania w sesji powłoki

## go get github.com/joho/godotenv

pobiera paczke ktora automatycznie importuje zmienne srodowiskowe z .env

## go mod tidy

## go mod vendor

Polecenie go mod vendor w języku Go służy do skopiowania zależności modułów do lokalnego katalogu "vendor". Katalog "vendor" zawiera kopie kodu źródłowego zależnych modułów, co umożliwia ich budowanie i uruchamianie bez potrzeby pobierania zależności z Internetu.

Kiedy używasz modułów w projekcie Go (zadeklarowanych w pliku go.mod), normalnie Go pobiera te zależności z Internetu. Jednak czasami możesz chcieć mieć kontrolę nad wersjami zależności i zachować je lokalnie, niezależnie od ich dostępności w repozytorium zależności. W takich przypadkach polecenie go mod vendor jest używane.

# paczki

`go install github.com/pressly/goose/v3/cmd/goose@latest`
`go install github.com/kyleconroy/sqlc/cmd/sqlc@latest`
