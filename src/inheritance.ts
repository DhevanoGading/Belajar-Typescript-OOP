namespace inheritance {
  class Employee {
    name: string;
  
    constructor(name: string){
      this.name = name;
    }
  }
  
  class Manager extends Employee  {
    
  }
  
  class Director extends Employee  {
  
  }
  
  const employee = new Employee("Telkom");
  console.log(employee.name);
  
  const manager = new Manager("Dhevano");
  console.log(manager.name);
  
  const director = new Director("Gading");
  console.log(director.name);

}
