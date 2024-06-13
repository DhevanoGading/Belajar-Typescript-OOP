"use strict";
var methodOverriding;
(function (methodOverriding) {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHello(name) {
            console.log(`Hello ${name}, my name is ${this.name}, I am your manager`);
        }
    }
    const employee = new Employee("Gading");
    employee.sayHello("Dhevano");
    const manager = new Manager("Dhevano");
    manager.sayHello("Gading");
})(methodOverriding || (methodOverriding = {}));
