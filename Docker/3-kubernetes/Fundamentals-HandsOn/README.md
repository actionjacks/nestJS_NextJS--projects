# Kubernetes Cluster => Master Node => worker nodes

## View -> command palette

# create pod
kubectl create -f [pod-definition.yml]
# current context cubernetes
kubectl config current-context
# list all context
kubectl config get-contexts
# use context
kubectl config use-context [context-name]

# in docker file
  build - build service from dockerfile
  image - downland image
# context - is sub folder
  # (
    services:
      backedn:
        build:
          args:
            - lorem
            context: backed <--- cwd/backend/dockerfile

            volumes:
            #volumes is virtual path inside container
             - db-data:/var/lib/mysql <--- location of data/files
  ) 

# (
  varsion: '3.4' - optional

  service:
    webapi1: - hostname
      image: ../../ - image location
      ports:
        - '9392:32'
      restart: always 
  )

# go to container
  docker compose exec [container] bash

# logs 
  docker compose logs -f [name-service]
    #(
      services:
          web-fe: <-------service
            build: .
            command: python app.py
            ports:
              - 5000:5000
    )
# run same docker compose second time
# (-p) project name
  docker compose -p [project-name] up -d 
