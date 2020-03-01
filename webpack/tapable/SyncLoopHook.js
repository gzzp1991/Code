class SyncLoopHook {
  constructor() {
    this.tasks = [];
  }

  tap = (name, task) => {
    this.tasks.push(task);
  };

  call = (...args) => {
    const len = this.tasks.length;
    let i = 0;
    while (i < len) {
      const result = this.tasks[i](...args);
      if (result === undefined) {
        ++i;
      } else {
        i = 0;
      }
    }
  };
}

module.exports = SyncLoopHook;

// /*
// 	MIT License http://www.opensource.org/licenses/mit-license.php
// 	Author Tobias Koppers @sokra
// */
// ("use strict");

// const Hook = require("./Hook");
// const HookCodeFactory = require("./HookCodeFactory");

// class SyncLoopHookCodeFactory extends HookCodeFactory {
//   content({ onError, onDone, rethrowIfPossible }) {
//     return this.callTapsLooping({
//       onError: (i, err) => onError(err),
//       onDone,
//       rethrowIfPossible
//     });
//   }
// }

// const factory = new SyncLoopHookCodeFactory();

// class SyncLoopHook extends Hook {
//   tapAsync() {
//     throw new Error("tapAsync is not supported on a SyncLoopHook");
//   }

//   tapPromise() {
//     throw new Error("tapPromise is not supported on a SyncLoopHook");
//   }

//   compile(options) {
//     factory.setup(this, options);
//     return factory.create(options);
//   }
// }

// module.exports = SyncLoopHook;
