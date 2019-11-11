DROP TABLE users;
CREATE TABLE users
(
  ID SERIAL PRIMARY KEY,
  name text,
  email text,
  password text
);
