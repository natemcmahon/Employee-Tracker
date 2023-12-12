const db = require('./server');
const inquirer = require('inquirer');

function init() {
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'What would you like to do?',
          name: 'Choice',
          choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role' ],
        },
      ])
      .then((data) => {
      // console.log(data);
        sqlQuery(data.Choice);
      });
};

const sqlQuery = (response) => {
    // console.log("nice job calling the sqlQuery function");
    // console.log("your choice was: " + response);
    switch (response) {
        case "View all departments": 
          // console.log("you chose: View all departments");
          db.query('SELECT * FROM department', function (err, results) {
              // console.log(err)
              console.table(results);
              console.log('\n');
              init();
          });
            break;
        case "View all roles": 
            db.query('SELECT * FROM role', function (err, results) {
                // console.log(err)
                console.table(results);
                console.log('\n');
                init();
            });
            break;
        case "View all employees": 
            db.query('SELECT * FROM employee', function (err, results) {
                // console.log(err)
                console.table(results);
                console.log('\n');
                init();
            });
            break;
        case "Add a department":
            inquirer
                .prompt([
                {
                    type: 'input',
                    message: 'Enter the name of the new department: ',
                    name: 'newDepartment',
                },                    
                ])
                .then((data) => {
                    db.query(`INSERT INTO department (name) VALUES ('${data.newDepartment}')`);
                })
                .then((data) => {
                    console.log('New department added!')
                    init();
                });
            break;
        case "Add a role":
            getAllDeptNames().then((deptsArr) => {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Enter the name of the new role: ',
                        name: 'newRoleName',
                    },
                    {
                        type: 'input',
                        message: 'Enter the salary of the new role: ',
                        name: 'newRoleSalary',
                    },
                    {
                        type: 'list',
                        message: 'Enter the department of the new role: ',
                        name: 'newRoleDepartment',
                        choices: deptsArr,
                    },                    
                    ])
                    .then((data) => {
                        db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${data.newRoleName}, ${data.newRoleSalary}, ${data.newRoleDepartment}')`);
                    })
                    .then((data) => {
                        console.log('New role added!')
                        init();
                    }
                );
            })
            break;
        case "Add an employee":
            getAllRoleNames().then((rolesArr) => {
                getAllEmployeeNames().then((employeesArr) => {
                    employeesArr.push("N/A");
                    inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'Enter the first name of the new employee: ',
                            name: 'newEmployeeFirstName',
                        },
                        {
                            type: 'input',
                            message: 'Enter the last name of the new employee: ',
                            name: 'newEmployeeLastName',
                        },
                        {
                            type: 'list',
                            message: 'Enter the role of the new employee: ',
                            name: 'newEmployeeRole',
                            choices: rolesArr,
                        },
                        {
                            type: 'list',
                            message: "Enter the new employee's manager: ",
                            name: 'newEmployeeManager',
                            choices: employeesArr,
                        },                    
                        ])
                        .then((data) => {
                            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${data.newEmployeeFirstName}, ${data.newEmployeeLastName}', ${data.newEmployeeRole}, ${data.newEmployeeManager})`);
                        })
                        .then((data) => {
                            console.log('New employee added!')
                            init();
                        });
                })
                
            })
            break;     
    }
}

getAllDeptNames();

init();

function getAllDeptNames() {
    const query = 'SELECT name FROM department;';
    return Promise.resolve(
        db.promise().query(query)
        .then(([rows,fields]) => {
            return rows.map(dept => dept.name);
          })
      );
}

  function getAllRoleNames() {
    const query = 'SELECT title FROM role;';
    return Promise.resolve(
        db.promise().query(query)
        .then(([rows,fields]) => {
            return rows.map(role => role.title)
        })
    );
}

function getAllEmployeeNames() {
    const query = 'SELECT first_name,last_name FROM employee;';
    return Promise.resolve(
        db.promise().query(query)
        .then(([rows,fields]) => {
            return rows.map(employee => employee.first_name + ' ' + employee.last_name);
        })
    );
}