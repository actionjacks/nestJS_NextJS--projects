# FROM php:7.4-cli
# COPY . /usr/src/myapp
# WORKDIR /usr/src/myapp
# CMD [ "php", "./index.php" ]

# this is file used in docker-compose context: .

FROM php:7.4-apache
RUN docker-php-ext-install mysqli
# add permission to write ride files apaha
RUN addgroup --gid 1000 appuser; \
  adduser --uid 1000 --gid 1000 --disabled-password appuser; \
  adduser www-data appuser;