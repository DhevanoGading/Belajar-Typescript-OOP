namespace parameterProperties {
  class Person {
    constructor(public name: string){
    }
  }

  const person = new Person("Dhevano")
  console.log(person.name);
  
  person.name = "Gading";
  console.log(person.name);
  
}