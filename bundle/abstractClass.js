"use strict";
var abstractClass;
(function (abstractClass) {
    class Customer {
        constructor(id) {
            this.id = id;
        }
    }
    class regularCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }
    const customer = new regularCustomer(1, "Dhevano");
    customer.sayHello("Gading");
})(abstractClass || (abstractClass = {}));
