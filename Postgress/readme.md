https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-update/

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
## DISTINCT (bez duplikatow)
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
//REGEX
```
SELECT * FROM person WHERE email LIKE '%.com';
SELECT * FROM person WHERE email LIKE '%@google.%';
<!-- any record fallow three letters -->
SELECT * FROM person WHERE email LIKE '___%';

<!-- find email start P -->
SELECT * FROM person WHERE email LIKE 'P%';
<!-- find email start P or p -->
SELECT * FROM person WHERE email ILIKE 'P%';
```

```
SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth;

country_of_birth | count
-------------------------
Poland           |    30
Sweden           |    10
Syria            |    12
```
```
SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth ORDER BY country_of_birth;

SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) > 5 ORDER BY country_of_birth;
// having count more than 5
```
## min max
```
SELECT MAX(price) FROM car;

SELECT make, model, MIN(price) FROM car GROUP BY make, model

SELECT id, ROUND(price * .10, 2), ROUND(price - (price * .10), 2) FROM car
// wyswietl tabele id oraz tabele round czyli zaokraglone dane dp 2 miejsca po przecinku potem wyswietl tabele round -10% zaokraglone do 2 miejsca

<!-- using alias can change column name -->
SELECT id, price AS orginal_price, ROUND(price * .10, 2) AS ten_procent, ROUND(price - (price * .10), 2) AS discount_after_10_percent FROM car
```
## COALESCE - defaul value
```
<!-- select email row if not value use default '' -->
SELECT COALESCE(email, '') FROM person;
```
## DATE
```
SELECT NOW();
<!-- 2020-10-01 22:32:12.234234+00 -->

SELECT NOW()::DATE;
<!-- 2020-10-01 -->

SELECT NOW()::TIME;
<!-- 22:32:12.234234 -->

SELECT NOW() - INTERVAL '10 YEARS';
```

```
\d person
<!-- display person schema -->
```
## unique
```
ALTER TABLE person ADD PRIMARY KEY (id); 
<!-- add unique id key to schema person -->

id | name |
-----------
1  | jacek
1  | placek

DELETE FROM person WHERE id = 1;
<!-- delete id 1 two recordss to add ALTER KEY -->

ALTER TABLE person ADD CONSTRAINT unique_email_address UNIQUE (email);
<!-- add new unique row email Indexes unique_email_address -->
<!-- row email can have duplicates -->

ALTER TABLE person ADD UNIQUE (email);
<!-- email now is unique no duplicates -->

UPDATE person SET email = "costam" WHERE id = '2111'
// change email in person where row id is 2111

INSERT INTO person (id, first_name) VALUES (12, 'jacek') ON CONFLICT (id) DO NOTHING;

INSERT INTO person (id, first_name) VALUES (12, 'jacek') ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;
<!-- kiedy bedzie to samo id bedzie konflit zaaktualizuj ostatnio podane pole email -->
```
## RELATIONS
```
CREATE TABLE person (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  car_id BIGINT REFERENCES car (id)
  UNIQUE(car_id)
)

CREATE TABLE car (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  model VARCHAR(50) NOT NULL,
)
```