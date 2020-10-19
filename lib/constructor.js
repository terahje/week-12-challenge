// Department Class. First/Base.
class Department {
    constructor(name) {
      this.name = name;
    }
    getName = () => this.name;
  }
  // Role Class. Second/middle-man.
  class Role {
    constructor(title, salary, department_id) {
      this.title = title;
      this.salary = salary;
      this.department_id = department_id;
    }
    getTitle = () => this.title;
    getSalary = () => this.salary;
    getDepartmentID = () => this.department_id;
  }
  // Employee Class. Third/Final.
  class Employee {
    constructor(first_name, last_name, role_id, manager_id) {
      this.first_name = first_name;
      this.last_name = last_name;
      this.role_id = role_id;
      this.manager_id = manager_id;
    }
    getFirstName = () => this.first_name;
    getLastName = () => this.last_name;
    getRoleID = () => this.role_id;
    getManagerID = () => this.manager_id;
  }
  
  // Export everything.
  module.exports = {
    Department,
    Role,
    Employee
  }