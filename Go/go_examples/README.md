# db start
```bash
docker run --name go-mysql \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=root \
  -p 3306:3306 \
  -d mysql:8
```

# static file.
```bash
curl -s http://localhost:8080/assets/styles.css
```