DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

-- Create table for "department"
CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Create table for "role"
CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary VARCHAR(30) NOT NULL,
  department_id VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Create the table "employees"
CREATE TABLE employees (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id VARCHAR(30) NOT NULL,
  manager_id VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO employees (employee)
VALUES ("Genis");

INSERT INTO employees (employee)
VALUES ("Ashleen");


SELECT * FROM employees;
