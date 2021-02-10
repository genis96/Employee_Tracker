// require('dotenv').config(); //try now
const inquirer = require('inquirer');
const mysql = require('mysql');
require("console.table");

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Nightfloat77$',
    database: 'employees_db'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    startApp();
});

console.log(`╔═════════════════════════════════════════════════════╗
║                                                     ║
║     _____                 _                         ║
║    | ____|_ __ ___  _ __ | | ___  _   _  ___  ___   ║
║    |  _| | '_ \` _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\  ║
║    | |___| | | | | | |_) | | (_) | |_| |  __/  __/  ║
║    |_____|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|  ║
║                    |_|            |___/             ║
║                                                     ║
║     __  __                                          ║
║    |  \\/  | __ _ _ __   __ _  __ _  ___ _ __        ║
║    | |\\/| |/ _\` | '_ \\ / _\` |/ _\` |\/ _ \\ '__|       ║
║    | |  | | (_| | | | | (_| | (_| |  __/ |          ║
║    |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|          ║
║                              |___/                  ║
║                                                     ║
\╚═════════════════════════════════════════════════════╝
`);

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

function removeEmployee() {
    let answer = inquirer.prompt([
        {
            message: 'Which employee will you remove? By ID: ',
            type: 'number',
            name: 'first'
        },
    ]).then(function (res) {
        connection.query("DELETE FROM employee WHERE ?", {id: answer.first}, function (err) {
            // console.table(res);
            if(err) throw err;
        })
    })
    console.log('Employee has been removeed from system!');
    startApp();
}

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

function addRole() {
    inquirer
    .prompt([
        {
            message: "Enter Title:",
            type: "input",
            name: "title"
        }, {
            message: "Enter Salary:",
            type: "number",
            name: "salary"
        }, {
            message: "Enter Department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (res) {
        connection.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [res.title, res.salary, res.department_id], function (err, res) {
            console.table(res);
        })
        startApp();
    })
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            message: "Which employee will you update?",
            type: "input",
            name: "name"
        }, {
            message: "Enter The New Role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (res) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [res.role_id, res.name], function (err, res) {
            console.table(res);
        })
        startApp();
    })
}


// startApp();
