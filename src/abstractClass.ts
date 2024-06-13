namespace abstractClass {
  abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
      this.id = id
    }

    abstract sayHello(name: string): void;
  }

  class regularCustomer extends Customer {
    name: string;

    constructor(id: number, name: string){
      super(id)
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
      
    }
  }

  const customer = new regularCustomer(1, "Dhevano")
  customer.sayHello("Gading")
  
}