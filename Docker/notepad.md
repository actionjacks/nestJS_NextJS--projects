## https://hub.docker.com/_/nginx

## check containers running
  docker container ls

docker run -d <container-name> 

## check container's up and running
  docker ps 

## check all containers
  docker ps -a 

  docker stop <container id>

## run docker container on localhost8080
  docker run -d -p 8080:80 nginx

## run docker container on localhost8080 and give name
  docker run --name <ur name> -d -p 8080:80 nginx

  docker run --name myapp -d -p 8080:80 nginx

##  -v $(pwd) or dir -present working directory    :ro - read only flag
  docker run --name myapp -v %cd%:/usr/share/nginx/html:ro -d -p 8080:80 nginx  //read only
  docker run --name myapp -v %cd%:/usr/share/nginx/html -d -p 8080:80 nginx

## copy from one to
  docker run --name myapp-copy -volumes-from myapp -d -p 8081:80 nginx

## =============================== !!!!!!!
## go to container
  docker exec -it container-name sh
  
## go to container 
  docker exec -it <conntainer name> bash 
    ls -al                    //list all folders
      cd usr/share/nginx/html/         //go to root folder
exit
touch   //create file

## go to container inspect 
  docker inspect <id or name>
## show files
  ls -al 
  docker exec -it <id container> /bin/sh
## =================================

## for more than one ports
  docker run -d -p 8080:80 -p 3000:80 nginx

## can start container 
  docker start <container_id or container name>  !!start container

## remove container
  docker rm <container_id or container name>

## remove all container
  docker ps -aq //get only id of containers
  docker rm $(docker ps -aq) //remove all
## flag force can remove running containers
    docker rm -f $(docker ps -aq) //remove all

## docker format
docker ps --format="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"

## create from Dockerfile
  FROM <some img> FROM nginx:latest
  ADD . /usr/share/nginx/html // add all files from working-directory and copy to root in nginx

## to build tak --tag or -t
  docker build --tag <name of app> .
  docker build --tag myapp:latest .

## docker file express
  FROM node:latest
  WORKDIR /app
  ADD package*.json ./
  RUN npm install
  ADD . .
  CMD node index.js

## run new container
    docker run --name newimage -d -p 3000:3000 expresso:latest
    
## .dockerignore
node_modules
Dockerfile
.git

## alipne images reduce size of images
  docker pull node:lts-alpine

## debug 
  docker inspect <name or id>
  docker logs <name or id>
