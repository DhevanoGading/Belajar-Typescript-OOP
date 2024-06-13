"use strict";
var inheritance;
(function (inheritance) {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Director extends Employee {
    }
    const employee = new Employee("Telkom");
    console.log(employee.name);
    const manager = new Manager("Dhevano");
    console.log(manager.name);
    const director = new Director("Gading");
    console.log(director.name);
})(inheritance || (inheritance = {}));
