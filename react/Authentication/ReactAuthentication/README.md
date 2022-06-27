```
docker-compose up
```
Then after the images are pulled and are running open a new terminal tab and run
```
docker exec backend /bin/sh start.sh
```
The API is ready to be consumed on `http://localhost:8000`