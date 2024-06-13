"use strict";
var superConstructor;
(function (superConstructor) {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, departement) {
            super(name);
            this.departement = departement;
        }
    }
    const employee = new Employee("Dhevano", "Telkom");
    console.log(employee.name);
    console.log(employee.departement);
})(superConstructor || (superConstructor = {}));
