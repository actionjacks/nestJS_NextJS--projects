### first need build image from dockerfile

`docker build . -t my-node-app`

### run image from docker file and sync whit cwd project

`docker run -p 3000:8000 --name my-node-app-container --volume ${PWD}:/usr/src/app my-node-app`
