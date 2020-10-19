INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Doe', 1, 1),
    ('Mike', 'Chan', 2, 2),
    ('Jack E', 'Chan', 2, 2),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupik', 4, 1),
    ('Keith', 'Turner', 4, 1),
    ('Mario', 'Miller', 4,1),
    ('Malia', 'Brown', 5, NULL),
    ('Sarah', 'Lourd', 6, NULL),
    ('Ted', 'Gallon', 7, 3);
    
INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', '100000', 1),
('Salesperson', '80000', 1),
('Lead Engineer', '150000', 2),
('Software Engineer', '120000', 2),
('Accountant', '125000', 3),
('Legal Team Lead', '250000', 4),
('Lawyer', '190000', 4);

   
INSERT INTO manager (first_name, last_name)
VALUES 
    ("Ashley", "Rodriquez"),
    ("John", "Doe"),
    ("Sarah", "Lourd");