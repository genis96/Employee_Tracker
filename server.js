const inquirer = require('inquirer');
const mysql = require('mysql');
// const table = require('console.table');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: '',
    database: 'employees_db'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
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
        console.log(answer.choice);
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
            case 'Add Role':
                addRole()
                break;
            case 'Update Employee Role':
                updateEmployeeRole()
                break;
        }
    })
}

function viewEmployees() {}
function viewDepartments() {}
function addEmployee() {}
function removeEmployee() {}
function updateEmployeeRole() {}



