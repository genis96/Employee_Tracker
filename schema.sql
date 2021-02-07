DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Create table for "department"
CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  names VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

-- Create table for "role"
CREATE TABLE roles (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL(10.5) NULL,
  department_id INT NULL,
  PRIMARY KEY(id)
);

-- Create table "employee"
CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY(id)
);

-- SELECT * FROM department;
-- SELECT * FROM role;
-- SELECT * FROM employee;