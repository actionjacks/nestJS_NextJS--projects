docker image build -t node_tabnine:0.0.1 .

//need docker file to run this command last is the name of created docker container

no we can run container
  ```docker run -p 3001:3001 node_tabnine:0.0.1``` 

//when in project docker-composer.yml

  ```docker-compose build```

we can use docker compose build
  ```docker-compose up -d``` -- run image and container from docker-compose.yml