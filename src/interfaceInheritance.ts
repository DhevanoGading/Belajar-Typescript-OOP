namespace interfaceInheritance {
  interface hasName {
    name: string;
  }
  
  interface canSayHello {
    sayHello(name: string): void;
  }
  
  class Person implements hasName, canSayHello {
    name: string;
  
    constructor(name: string){
      this.name = name;
    }
  
    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
      
    }
  }
  
  const employee = new Person("Dhevano");
  employee.sayHello("Gading")

}