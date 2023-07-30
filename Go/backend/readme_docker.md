## http://localhost:8080/

## add Server

host name/address `db`
port `5432`
DB_NAME
USER_NAME
USER_PASS

## for make migration, run comand in folder sql\schema and run

goose postgres postgres://your_postgres_user:your_postgres_password@localhost:5432/your_postgres_db up

# !! w pliku docker-compose

`POSTGRES_HOST_AUTH_METHOD = true` inaczej server migracje przez goose odrzuci

# !! dla windows aby wykonac polecenie sqlc generate trzeba wykonać to używając kontenera z dokerem

`docker run --rm -v ${PWD}:/src -w /src kjconroy/sqlc generate` - będać w katalogu z plikiem `sqlc.yaml`
