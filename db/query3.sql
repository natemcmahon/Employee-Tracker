SELECT employee.id AS Employee_ID, 
       first_name,
       last_name,
       role.title AS Job_Title,
       department.name AS Department,
       role.salary AS Salary,
       manager_id AS Manager
FROM employee
JOIN role 
ON role.id = employee.role_id
JOIN department
ON department.id = role.department_id;

-- struggling to display manager of employee