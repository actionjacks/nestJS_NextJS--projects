https://sysadminxpert.com/how-to-install-postgresql-12-on-ubuntu/

#get image postgress run on port 
```
docker run --name postgres-0 -e POSTGRES_PASSWORD=123 -d -p 5432:5432 postgres
```
  got to container docker exec -it <id> sh
  now run psql -U postgres
  #create databse
    create databse <db_name>;

    #all db \l 


we can make new db using docker-compose yml.file 
or 
create imgae run container go to container
go to posgres ``` psql -U postgres 
  create db 
  create username set privilages and elo

  ```
  $ psql
                                    !#password in '' - string
  $ CREATE DATABASE <db_name>;
  $ CREATE USER <db_username> WITH ENCRYPTED PASSWORD '<password>';
  $ GRANT ALL PRIVILEGES ON DATABASE <db_name> to <db_username>;
  ```