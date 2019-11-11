CREATE TABLE
IF NOT EXISTS users
(
  ID SERIAL PRIMARY KEY,
  name text,
  email text,
  password text
);
