CREATE TABLE employees
(
  id SERIAL,
  name text,
  title text,
  CONSTRAINT employees_pkey PRIMARY KEY (id)
)
INSERT INTO employees
  (name,title)
VALUES
  ('jacek placek', 'to jest jackowy title'),
  ('jacek placek2', 'to jest jackowy title2'),
  ('jacek placek3', 'to jest jackowy title3');