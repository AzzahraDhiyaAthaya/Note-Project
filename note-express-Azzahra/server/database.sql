CREATE DATABASE catatan;

CREATE TABLE notes(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    description VARCHAR(255)
);