# example container for databse

docker run --name auth-psql -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=test -d postgres:14

# after run container type

docker ps -a

# get running docker id and type

docker inspect <running_docker_id>

# get "Networks" IPAddress: #"172.17.0.2",

# create table users

docker exec -it <running_docker_id> /bin/sh
psql -U admin <-wchodzi do bazydanych admin
\dt
CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
name VARCHAR(64) NOT NULL,
email VARCHAR(64) NOT NULL UNIQUE,
password TEXT NOT NULL
);
\dt <- wyswietla tabele
