DROP TABLE templates;
CREATE TABLE templates
(
  id SERIAL PRIMARY KEY,
  owner_id int,
  body text,
  public boolean,
  FOREIGN KEY (owner_id) REFERENCES users(id)
);
