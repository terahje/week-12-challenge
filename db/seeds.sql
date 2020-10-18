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
    ('John', 'Doe', 'Sales Lead', 'Ashley Rodriguez'),
    ('Mike', 'Chan', 'Salesperson', 'John Doe'),
    ('Jack E', 'Chan', 'Salesperson', 'John Doe'),
    ('Ashley Rodriguez', 'Doe', 'Lead Engineer', NULL),
    ('Kevin', 'Tupik', 'Software Engineer', 'Ashley Rodriquez'),
    ('Keith', 'Turner', 'Software Engineer', 'Ashley Rodriquez'),
    ('Mario', 'Miller', 'Software Engineer','Ashley Rodriquez'),
    ('Malia', 'Brown', 'Accountant', NULL),
    ('Sarah', 'Lourd', 'Legal Team Lead', NULL),
    ('Ted', 'Gallon', 'Lawyer', 'Sarah Lourd');
   
