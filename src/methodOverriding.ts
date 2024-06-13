namespace methodOverriding {
  class Employee {
    name: string;
  
    constructor(name: string){
      this.name = name;
    }
  
    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
      
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}, I am your manager`);
    }
  }

  const employee = new Employee("Gading");
  employee.sayHello("Dhevano");

  const manager = new Manager("Dhevano");
  manager.sayHello("Gading");
}