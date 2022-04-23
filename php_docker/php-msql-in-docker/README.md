### run php sctipt from docker file

`docker build -t my-php-app .`
`docker run -it --rm --name my-running-app my-php-app`

### Apache without a Dockerfile

`docker run -d -p 80:80 --name my-apache-php-app -v "$PWD":/var/www/html php:7.2-apache`

### remove all containers

`docker rm -f $(docker ps -aq)`

### if port is used run 80 - is port number

`sudo lsof -i -P -n | grep 80`
`sudo kill <proces id>`

### stop remove all running containers

`docker container kill $(docker ps -q) `

### build run docker from docker-compose

`docker-compose up -d`
`docker-compose down`

### localhost 80 is php file

### localhost 8080 is myadmin for mySQL
