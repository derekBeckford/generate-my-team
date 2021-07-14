class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

Employee.prototype.getname = function () {
  
  return this.name;
};

Employee.prototype.getId = function () {
  return this.getId;
};

Employee.prototype.getEmail = function () {
  return this.email;
};

module.exports = Employee;
