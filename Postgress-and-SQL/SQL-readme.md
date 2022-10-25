## PRIMARY KEY uniqe key in db
```
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(300) NOT NULL,
  last_name VARCHAR(300) NOT NULL,
  birthdate DATE NOT NULL,
  email VARCHAR(300) NOT NULL
)

CREATE TABLE organizers (
  password VARCHAR(300) NOT NULL,
  user_id INT PRIMARY KEY REFERENCES users ON DELETE CASCADE --delete related date
)

CREATE TABLE events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(300) NOT NULL CHECK (LENGTH(name) > 5),
  date_planned TIMESTAMP NOT NULL
)
```
## many to many relations
```
CREATE TABLE tags (
  name VARCHAR(100) PRIMARY KEY
)

--table to store relations many to many events and users

CREATE TABLE events_users (
  event_id INT REFERENCES events ON DELETE CASCADE,
  user_id INT REFERENCES users ON DELETE CASCADE,
  ---create id from events_id and users_id
  PRIMARY KEY (event_id, user_id)
)
```
## querries

```
-- find relations data
-- find location related to location

SELECT * FROM events AS e
INNER JOIN locations ON AS loc ON e.location_id = loc.id
```