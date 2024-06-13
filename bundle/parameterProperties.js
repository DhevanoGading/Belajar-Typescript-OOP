"use strict";
var parameterProperties;
(function (parameterProperties) {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    const person = new Person("Dhevano");
    console.log(person.name);
    person.name = "Gading";
    console.log(person.name);
})(parameterProperties || (parameterProperties = {}));
