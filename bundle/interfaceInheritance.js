"use strict";
var interfaceInheritance;
(function (interfaceInheritance) {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }
    const employee = new Person("Dhevano");
    employee.sayHello("Gading");
})(interfaceInheritance || (interfaceInheritance = {}));
