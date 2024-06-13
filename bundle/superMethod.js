"use strict";
var superMethod;
(function (superMethod) {
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
            super.sayHello(name);
            console.log(`And I am your manager`);
        }
    }
    const manager = new Manager("Dhevano");
    manager.sayHello("Gading");
})(superMethod || (superMethod = {}));
