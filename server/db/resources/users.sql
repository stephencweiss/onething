DROP TABLE users;
CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  name text,
  email text,
  password text
);
