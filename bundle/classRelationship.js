"use strict";
var classRelationship;
(function (classRelationship) {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    const person = new Customer("Dhevano");
    console.log(person.name);
})(classRelationship || (classRelationship = {}));
