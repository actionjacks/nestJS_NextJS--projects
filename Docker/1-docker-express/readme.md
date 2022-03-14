### make image from Dockerfile

`docker build -t node-app-image .`

### $(pwd) - unix current working direcory

`docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=3000 -p 3000:3000 -d --name node-app node-app-image`

`docker logs nod-app`
