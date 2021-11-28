## run ubuntu image and run bash command go to container
docker run -it ubuntu bash
## run command in container
docker exec <name or id> <command>

## del all
docker rm $(docker ps -a -q) -f
## docker run -p (port nasluchuje 8080) 8080:80 (z portu 80) nginx
## -d detache after command dont block terminal