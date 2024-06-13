"use strict";
var constructor;
(function (constructor) {
    class Customer {
        constructor(id, name) {
            this.name = "Guest";
            this.id = id;
            this.name = name;
        }
        sayHello(name) {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }
    const customerSatu = new Customer(1, "Dhevano");
    customerSatu.age = 19;
    console.log(customerSatu.id);
    console.log(customerSatu.name);
    console.log(customerSatu.age);
    const customerDua = new Customer(2, "Gading");
    customerDua.sayHello("Dhevano");
})(constructor || (constructor = {}));
