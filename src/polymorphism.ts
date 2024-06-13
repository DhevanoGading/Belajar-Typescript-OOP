namespace parameterProperties {
  class Employee {
    constructor(public name: string){
    }
  }

  class Manager extends Employee {
    
  }

  class VicePresident extends Manager {

  }

  let sayHello = (employee: Employee): void => {
    if (employee instanceof VicePresident) {
      console.log(`Hello Vice President ${employee.name}`);
    } else if (employee instanceof Manager){
      console.log(`Hello Manager ${employee.name}`);
    } else if (employee instanceof Employee){
      console.log(`Hello Employee ${employee.name}`);
    }
    
  }
  
  let employee = new Employee("Dhevano");
  sayHello(employee);

  employee = new Manager("Gading");
  sayHello(employee);

  employee = new VicePresident("Zamzami");
  sayHello(employee);
  
}