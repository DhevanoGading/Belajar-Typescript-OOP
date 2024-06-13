namespace classRelationship {
  class Person {
    constructor(public name: string){}
  }

  class Customer {
    constructor(public name: string) {}
  }

  const person: Person = new Customer("Dhevano");
  console.log(person.name);
  
}