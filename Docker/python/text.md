## %cd% current working directory copy all and paste in container run file
  docker run -it -v %cd%:/app python:alpine python /app/main.py