namespace superMethod {
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
      super.sayHello(name)
      console.log(`And I am your manager`);
    }
  }

  const manager = new Manager("Dhevano");
  manager.sayHello("Gading");
}