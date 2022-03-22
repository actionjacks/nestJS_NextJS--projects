### make image from Dockerfile

`docker build -t node-app-image .`

### $(pwd) - unix current working direcory

`docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=3000 -p 3000:3000 -d --name node-app node-app-image`

## if .env file 
`docker run -v $(pwd):/app:ro -v /app/node_modules --env-file ./.env -p 3000:3000 -d --name node-app node-app-image`

`docker logs nod-app`

## remove docker volumes
`docker volume prune` 
## remove volumes not related in this project
`docker rm node-app -f`

## using docker-compouse
`docker-compose up -d` - -d detache mode
`docker-compose up -d --build` - force to rebuild image
`docker-compose build -d`
`docker-compose down`
`docker-compose down -v` - del volumes
`docker logs <container-id>`

## to connect using mongose need inspec mongo contaner 
  `docker inspect <mongo-container-id>`
  ## and copy "IPAddress": "",

## networks
`docker network ls`