const express = require('express');
const inquirer = require('inquirer');
const mysql = require("mysql");
let consoleTable = require("console.table");
const PORT = process.env.PORT || 3001;
const app = express();
const sqlite3 = require('sqlite3').verbose();
const inputCheck = require('./utils/inputCheck');

const connection = mysql.createConnection({
    "host": "localhost",
    "port": 3001,
    // your username
    "user": "root",
    "password": "",
    "database": "employee.db"
});

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    mainMenu();
});

  const mainMenu = () => {
      inquirer
        .prompt([{
            name: "operation",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employees",
                "Remove Employees",
                "Update Employees Role",
                "Update Employees Manager",
                "View All Roles",
                "Add Role",
                "Remove Role",
                "Quit"
            ],
        }])
        .then((operation) => {
            switch (operation.change) {
                case "View All Employees":
                    displayEmp();
                    break;
                case "View All Employees By Department":
                    displayDep();
                    break;
                case "View All Employees By Manager":
                    displayMan();
                    break;
                case "Add Employees":
                    addEmployee();
                    break;  
                case "Remove Employees":
                    removeEmployee();
                    break;
                case "Update Employees Role":
                    updateEmRole();
                    break;
                case "Update Employees Manager":
                    updateEmManger();
                    break;
                case "View All Roles":
                    displayRole();
                    break;
                case "Add Role":
                    addRoles();
                    break;
                case "Remove Role":
                    removeRoles();
                    break;  
                case "Quit":
                    connection.end();
                    break;
            }
        });

  }

  // display all employees
  const displayEmp = () => {
        const query = "SELECT employee.first_name, employee.last_name, employee.role_title, department.name AS department, roles.salary, concat(manager.mgr_firstName, manager.mgr_lastName) AS manager FROM department INNER JOIN role ON role.department_id = department.id INNER JOIN employee ON employee.role_id = role.id LEFT JOIN manager on manager.id = employee.manager_id ORDER by ID ASC";
  
        connection.query(query, function(err, res) {
            if (err) throw err
            console.log("...\n")
            console.table(res);
            mainMenu();
      }); 

  }

  //display roles//
const displayRole = () => {
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err
        console.log("Role:")
        console.table(res);
        mainMenu();
    });
}

    //display department//
    const displayDep = () => {
        app.get("SELECT * FROM department", function(err, res) {
            if (err) throw err;
            console.table(res);
            console.log("Department:");

            mainMenu();
        });
    }

    //add employees//
const addEmployee = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "department",
                message: "What department is the Employee assigned?",
            },
            {
                type: "input",
                name: "firstname",
                message: "What is the Employee's first name?",
            },
            {
                type: "input",
                name: "lastname",
                message: "What is the Employee's last name?",
            },
            {
                type: "input",
                name: "roletitle",
                message: "What is the Employee's role Title?",
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the Employee's Manager's ID?",
            }
        ])
        .then(function(answer) {
            console.log('Adding Employee...\n');

            const query = connection.query("INSERT INTO employee SET ?", [{
                    "first_name": answer.firstName,
                    "last_name": answer.lastName,
                    "managerID": answer.manager_id
                }],

                ('INSERT INTO erole SET', [{
                    roletitle: answer.title
                }]));

            if (err) throw err;
            console.table(res);
            console.log("Department:");
            mainMenu();
        })
}

// //add roles//
const addRoles = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "title",
                message: "What Title are you adding?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary of this title",
            },
            {
                type: "input",
                name: "departmentID",
                message: "What department is this Title in?",
            },
        ])
        .then(function(answer) {
            console.log('Adding Employee...\n');

            try {
                const query = connection.query('INSERT INTO erole SET ?', {
                        title: answer.title,
                        salary: answer.salary,
                        departmentID: answer.department_id,
                    })
                    ('INSERT INTO erole SET', {
                        roletitle: answer.title
                    });

                console.log(`${query.affectedRows} New Role Added!\n`);


            } catch (error) {
                console.log('addRoles -> error', error);
            }
            mainMenu();
        })
}


// //update employee role//
const updateEmRole = () => {
    inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "Which Employee's role would you like to update (search by last name)?",
            },
            {
                type: "input",
                name: "role",
                message: "What is their new role?"
            },
        ])
        .then(function(answer) {
            console.log('Updating Employee Role...\n');

            try {
                const query = connnection.query('Update employee SET role_id = ? WHERE last_name', {
                    name: answer.name,
                    role: answer.role_id
                });
                console.log(`${query.affectedRows} Employee updated!\n`);
                console.log(query.sql);
            } catch (error) {
                console.log('updateEmRole -> error', error);
            }
            mainMenu();

        });
}

  // Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });  
