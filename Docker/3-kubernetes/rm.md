## remove stopped containers
docker rm $(docker ps -a -q)

## remove all images not in use by ant containers
docker system prune -a