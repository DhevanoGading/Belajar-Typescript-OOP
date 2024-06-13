namespace visibility {
  class Counter {
    protected counter: number = 20;

    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  class DecreaseCounter extends Counter {
    private decreaseCounter: number = 5;

    public decrease(): void{
      this.counter -= this.decreaseCounter
    }
  }

  const counter = new Counter();
  counter.increment();
  counter.increment();
  counter.increment();
  counter.increment();
  counter.increment();
  console.log(counter.getCounter());

  const decreaseCounter = new DecreaseCounter();
  decreaseCounter.decrease();
  console.log(decreaseCounter.getCounter());
}