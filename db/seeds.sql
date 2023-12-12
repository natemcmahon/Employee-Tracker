INSERT INTO department (name)
 VALUES ("IT"),
        ("HR"),
        ("Marketing"),
        ("Legal"),
        ("Accounting");

INSERT INTO role (title, salary, department_id)
 VALUES ("Software Engineer", 80000, 1),
        ("Product Manager", 65000, 1),
        ("Recruiter", 50000, 2),
        ("Lawyer", 75000, 4),
        ("Market Analyst", 60000, 3),
        ("Data Scientist", 90000, 1),
        ("Technical Product Manager", 70000, 1),
        ("Accountant", 65000, 5),
        ("Paralegal", 45000, 4),
        ("Tech Manager", 120000, 1),
        ("Marketing Manager", 90000, 3),
        ("HR Manager", 80000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
 VALUES ("Ben", "Smith", 8, null ),
        ("Jack", "Martin", 3, 12),
        ("Hannah", "Jackson", 11, null),
        ("Jennifer", "Thompson", 9, 4),
        ("Stacy", "Lewis", 1, 10),
        ("George", "Jones", 7, 10),
        ("Maggie", "Sharp", 4, null),
        ("Wanda", "Ortiz", 12, null),
        ("Jose", "Gomez", 2, 10),
        ("Maria", "Domingo", 5, 3),
        ("Pablo", "Hernandez", 10, null),
        ("Tony", "Amarillo", 6, 10);