INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales', '80000', 1),
('Engineering', '120000', 2),
('Finance', '125000', 3),
('Legal', '190000', 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Doe', 'Sales Lead', 1),
    ('Mike', 'Chan', 'Salesperson', 2),
    ('Jack E', 'Chan', 'Salesperson', 2),
    ('Ashley Rodriguez', 'Doe', 'Lead Engineer', NULL),
    ('Kevin', 'Tupik', 'Software Engineer', 1),
    ('Keith', 'Turner', 'Software Engineer', 1),
    ('Mario', 'Miller', 'Software Engineer',1),
    ('Malia', 'Brown', 'Accountant', NULL),
    ('Sarah', 'Lourd', 'Legal Team Lead', NULL),
    ('Ted', 'Gallon', 'Lawyer', 3);
   
INSERT INTO manager (man_first_name, man_last_name)
VALUES 
    ("Ashley", "Rodriquez"),
    ("John", "Doe"),
    ("Sarah", "Lourd");