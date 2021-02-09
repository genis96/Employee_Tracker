const inquirer = require('inquirer');
const mysql = require('mysql');
// const table = require('console.table');
// require("console.table");

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Nightfloat77$',
    database: 'employees_db'
});

connection.connect(function(err) {
    if(err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");
    startApp();
});

function startApp() {
    inquirer
    .prompt({
        message: 'What would you like to do?',
        type: 'list',
        choices: [
            'View Employees',
            'View Departments',
            'Add Employee',
            'Remove Employee',
            'Add Department',
            'Add Role',
            'Update Employee Role',
            'Quit'
        ],
        name: 'choice'
    }).then(function(answer) {
        // console.log(answer.choice);
        switch(answer.choice) {
            case 'View Employees':
                viewEmployees()
                break;
            case 'View Departments':
                viewDepartments()
                break;
            case 'Add Employee':
                addEmployee()
                break;
            case 'Remove Employee':
                removeEmployee()
                break;
            case 'Add Department':
                addDepartment()
                break;
            case 'Add Role':
                addRole()
                break;
            case 'Update Employee Role':
                updateEmployeeRole()
                break;
            default:
                connection.end()
                break;
        }
    })
}

function viewEmployees() {
    connection.query('SELECT * FROM employee', (err, res) => {
        // connection.query('SELECT e.id, e.first_name, e.last_name, d.name AS department, r.title, r.salary, CONCAT_WS(" ", m.first_name, m.last_name) AS manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id INNER JOIN role r ON e.role_id = r.id INNER JOIN department d ON r.department_id = d.id ORDER BY e.id ASC', (err, res) => {
        // if(err) throw err;
        console.table(res);
        console.log('Employees viewed!\n');
        startApp();
    })
}

function viewDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        console.table(res);
        console.log('Departments viewed!\n');
        startApp();
    })
}

function addEmployee() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the employees first name?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the employees last name?'
        },
        {
            type: 'number',
            name: 'roleId',
            message: 'What is the employees ID?'
        },
        {
            type: 'number',
            name: 'managerId',
            message: 'What is the employees manager ID?'
        },
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, res) {
            if (err) throw err;
            console.table("Successfully Inserted New Employee");
            startApp();
        })
    })
}

function removeEmployee() {}

function addDepartment() {
    inquirer
    .prompt([{
        type: "input",
        name: "department",
        message: "What is the department that you want to add?"
    }, ]).then(function(res) {
        connection.query('INSERT INTO department (names) VALUES (?)', [res.department], function(err, res) {
            if (err) throw err;
            console.table("Successfully Inserted");
            startApp();
        })
    })
}

function addRole() {}

function updateEmployeeRole() {}



