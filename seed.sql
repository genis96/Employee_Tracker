USE employees_db;

-- DEPARTMENT - sales, engineering, legal, finance
INSERT INTO department (names)
VALUES ('Sales');

INSERT INTO department (names)
VALUES ('Engineering');

INSERT INTO department (names)
VALUES ('Legal');

INSERT INTO department (names)
VALUES ('Finance');


-- ROLES - title, salary, department_id
INSERT INTO roles (title, salary, department_id)
VALUES ('Sales', 80000, 1);

INSERT INTO roles (itle, salary, department_id)
VALUES ('Engineer', 150000, 2);

INSERT INTO roles (itle, salary, department_id)
VALUES ('Legal', 90000, 3);

INSERT INTO roles (itle, salary, department_id)
VALUES ('Finance', 100000, 4);


-- EMPLOYEES - first_name, last_name, role_id, manager_id
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Harry', 'Potter', 10, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Hermoine', 'Granger', 11, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ron', 'Weasley', 12, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Draco', 'Malfoy', 13, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bad', 'Bunny', 10, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Genis', 'Bardales', 12, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Pop', 'Smoke', 13, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jackie', 'Chan', 10, 5);
