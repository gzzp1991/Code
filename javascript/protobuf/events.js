const EventEmitter = require('events');

class Test extends EventEmitter {
  constructor() {
    super();
  };
}

Test.prototype.kk = EventEmitter.prototype.on || EventEmitter.prototype.addListener;

console.log(Test, Test.prototype)