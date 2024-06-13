namespace constructor {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;
  
    constructor(id: number, name: string){
      this.id = id;
      this.name = name;
    }
  
    sayHello(name: string): void{
      console.log(`Hello ${name}, my name is ${this.name}`);
      
    }
  }
  
  const customerSatu = new Customer(1, "Dhevano");
  customerSatu.age = 19;
  
  console.log(customerSatu.id);
  console.log(customerSatu.name);
  console.log(customerSatu.age);
  
  const customerDua = new Customer(2, "Gading");
  customerDua.sayHello("Dhevano")
  
}