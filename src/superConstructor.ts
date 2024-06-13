namespace superConstructor {
  class Person {
    name: string;

    constructor(name: string){
      this.name = name;
    }
  }

  class Employee extends Person {
    departement: string;

    constructor(name: string, departement: string){
      super(name);
      this.departement = departement;
    }
  }

  const employee = new Employee("Dhevano", "Telkom");
  console.log(employee.name);
  console.log(employee.departement);
  
}
