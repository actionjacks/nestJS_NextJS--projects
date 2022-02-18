docker-compose config 
//check if docker file is correct

docker-compose up -d
//run container from yml file and whit -d flag detach from sheel
docker-compose up -d --build
//run container and build node image from .yml file

after container is running 
mysql -h localhost -P 3306 --protocol=tcp -uroot -p123 
  -p(password)
//go to container mysqld DB

  MSQL COMMAND
    SHOW DATABSE;
    USE <databse name>;
    SHOW TABLES;
    DESC patients;
    SELECT * FROM patients;
    SHOW PROCEDURE STATUS WHERE DB = 'patientsdb'; //show all prodecures (from init.sql)


some data for test 
  http POST :5000/patients first_name=Jacek last_name=Dupa email=jacek@o2.pl phone=12345678 address="123 dupa street" diagnosis="cough cought" image_url=https://imagesserver.com/jacek.png

response JSON {
  {
    "data": {
        "patient": {
            "address": "123 dupa street",
            "created_at": "2022-02-18T16:30:41.000Z",
            "diagnosis": "cough cought",
            "email": "jacek@o2.pl",
            "first_name": "Jacek",
            "id": 1,
            "image_url": "https://imagesserver.com/jacek.png",
            "last_name": "Dupa",
            "phone": "12345678"
        }
    },
    "httpStatus": "CREATED",
    "message": "Patient created",
    "statusCode": 201,
    "timeStamp": "2/18/2022, 6:30:41 PM"
}

