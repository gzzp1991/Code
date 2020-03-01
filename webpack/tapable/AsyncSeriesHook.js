class AsyncSeriesHook {
  constructor() {
    this.tasks = [];
  }

  tapAsync = (name, task) => {
    this.tasks.push(task);
  };

  callAsync = (...args) => {
    const finalCallBack = args.pop();
    let index = 0;
    const next = () => {
      if (index === this.tasks.length) return finalCallBack();
      this.tasks[index++](...args, next);
    };
    next();
  };

  tapPromise = (name, task) => {
    this.tasks.push(task);
  };

  promise = (...args) => {
    const [first, ...other] = this.tasks;
    return other.reduce(
      (prev, now) => prev.then(() => now(...args)),
      first(...args)
    );
  };
}

module.exports = AsyncSeriesHook;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// "use strict";

// const Hook = require("./Hook");
// const HookCodeFactory = require("./HookCodeFactory");

// class AsyncSeriesHookCodeFactory extends HookCodeFactory {
//   content({ onError, onDone }) {
//     return this.callTapsSeries({
//       onError: (i, err, next, doneBreak) => onError(err) + doneBreak(true),
//       onDone
//     });
//   }
// }

// const factory = new AsyncSeriesHookCodeFactory();

// class AsyncSeriesHook extends Hook {
//   compile(options) {
//     factory.setup(this, options);
//     return factory.create(options);
//   }
// }

// Object.defineProperties(AsyncSeriesHook.prototype, {
//   _call: { value: undefined, configurable: true, writable: true }
// });

// module.exports = AsyncSeriesHook;
