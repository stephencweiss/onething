DROP TABLE schedules;
CREATE TABLE schedules
(
  id SERIAL PRIMARY KEY,
  owner_id int,
  template_id int,
  frequency text,
  start_date timestamptz,
  FOREIGN KEY (owner_id) REFERENCES users(id),
  FOREIGN KEY (template_id) REFERENCES templates(id)
);
