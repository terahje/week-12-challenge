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

INSERT INTO employee (first_name, last_name, role_id, department_id, salary, manager_id)
VALUES 
    ('John', 'Doe', 'Sales Lead', 1, 100000, 'Ashley Rodriguez'),
    ('Mike', 'Chan', 'Salesperson', 1, 80000, 'John Doe'),
    ('Jack E', 'Chan', 'Salesperson', 1,  75000, 'John Doe'),
    ('Ashley Rodriguez', 'Doe', 'Lead Engineer', 2, 150000, NULL),
    ('Kevin', 'Tupik', 'Software Engineer', 2, 120000, 'Ashley Rodriquez'),
    ('Keith', 'Turner', 'Software Engineer', 2, 120000, 'Ashley Rodriquez'),
    ('Mario', 'Miller', 'Software Engineer', 2, 100000, 'Ashley Rodriquez'),
    ('Malia', 'Brown', 'Accountant', 3, 125000, NULL),
    ('Sarah', 'Lourd', 'Legal Team Lead', 4, 250000, NULL),
    ('Ted', 'Gallon', 'Lawyer', 4,  190000, 'Sarah Lourd');
   
