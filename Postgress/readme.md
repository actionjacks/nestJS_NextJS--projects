## open docker container
```
docker exec -it <container> -sh 
```
## in container acces db
```
su postgres

psql

\conninfo

\q -exit
```
## commands
### psql -h localhost -p 5432 -U username <db_name>
```
\l -- displat all database

CREATE DATABASE test; - create new databse name test

\c test - connect db test

CREATE TABLE person (
  id INT,
  first_name VARCHAR(50),
  gender VATCHAR(7), 
  date_of_birth DATE 
);

\d - list of all tables
\d person - display schema of person table

CREATE TABLE person2 (
 id BIGSERIAL NOT NULL PRIMARY KEY,
 first_name VARCHAR(50) NOT NULL,
 gender VATCHAR(7) NOT NULL,
 date_of_birth DATE NOT NULL );

INSERT INTO person (
  first_name,
  gender, 
  date_of_birth 
)VALUES ('jacek','Male',DATE '1999-10-11');
```
## https://www.mockaroo.com/ for generate dummy data
to copy dummy data from file
1-check pwd of file go to folder of downloaded data
  type pwd
```
\i /../../../person.sql
```
```
SELECT * FROM person; - display data from person table
SELECT first_name FROM person;
SELECT first_name, gender FROM person;
```
## order by
1 2 3 4 - ASC
4 3 2 1 - DESC

```
SELECT * FROM person ORDER BY date_of_birth DESC;

SELECT DISTINCT first_name FROM person ORDER BY first_name DESC;
// wyswietl bez duplikatow
```
## where
```
SELECT * FROM person WHERE gender = 'Male';

SELECT * FROM person WHERE gender = 'Male' AND first_name = 'jacek';

SELECT * FROM person WHERE gender = 'Male' AND (first_name = 'jacek' OR first_name = 'sracek');
```
## operators
```
<> - not equal
SELECT * FROM person LIMIT 10;

SELECT * FROM person OFFSET 5 LIMIT 10; - show from 5 limit 10 rows

SELECT * FROM person OFFSET 5 FETCH FIRST 1 ROW ONLY
SELECT * FROM person OFFSET 5 FETCH FIRST ROW ONLY; - show from 5  only 1 row

SELECT * FROM person WHERE country_of_birth IN ('poland', 'uk', 'sanescobare');

SELECT * FROM person WHERE date_of_birth BEWEEN DATE '2000-01-01' AND '2015-01-01';
```