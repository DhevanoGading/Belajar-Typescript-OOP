"use strict";
var visibility;
(function (visibility) {
    class Counter {
        constructor() {
            this.counter = 20;
        }
        increment() {
            this.counter++;
        }
        getCounter() {
            return this.counter;
        }
    }
    class DecreaseCounter extends Counter {
        constructor() {
            super(...arguments);
            this.decreaseCounter = 5;
        }
        decrease() {
            this.counter -= this.decreaseCounter;
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
})(visibility || (visibility = {}));
