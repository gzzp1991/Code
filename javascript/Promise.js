const PEDDING = "PEDDING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";

class Promise {
  constructor(executor) {
    this.state = PEDDING;
    this.value;
    this.reason;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      this.value = value;
      this.state = RESOLVED;
      this.onResolvedCallbacks.forEach(cb => cb());
    };
    const reject = reason => {
      this.reason = reason;
      this.state = REJECTED;
      this.onRejectedCallbacks.forEach(cb => cb());
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then = (onResolved, onRejected) => {
    const _this = this;

    onResolved = typeof onResolved === "function" ? onResolved : value => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : err => {
            throw err;
          };

    const promise2 = new Promise((resolve, reject) => {
      const resolvedCb = () => {
        try {
          const x = onResolved(_this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      };
      const rejectedCb = () => {
        try {
          const x = onRejected(_this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      };

      if (_this.state === RESOLVED) {
        setTimeout(resolvedCb, 0);
      }
      if (_this.state === REJECTED) {
        setTimeout(rejectedCb, 0);
      }
      if (_this.state === PEDDING) {
        _this.onResolvedCallbacks.push(() => {
          setTimeout(resolvedCb, 0);
        });
        _this.onRejectedCallbacks.push(() => {
          setTimeout(rejectedCb, 0);
        });
      }
    });

    return promise2;
  };

  catch = cb => this.then(undefined, cb);

  finally = cb =>
    this.then(
      result => Promise.resolve(cb()).then(() => result),
      reason =>
        Promise.resolve(cb()).then(() => {
          throw reason;
        })
    );
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError("循环引用错误，自己等待自己完成"));
  }
  let called;
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          err => {
            if (called) return;
            called = true;
            reject(err);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

Promise.resolve = v => new Promise(resolve => resolve(v));

Promise.reject = v => new Promise((resolve, reject) => reject(v));

Promise.all = promises =>
  new Promise((resolve, reject) => {
    let over = promises.length;
    const result = [];
    promises.forEach((p, i) => {
      p.then(res => {
        result[i] = res;
        if (--over === 0) {
          resolve(result);
        }
      }).catch(reject);
    });
  });

Promise.race = promises =>
  new Promise((resolve, reject) => {
    promises.forEach(p => p.then(resolve).catch(reject));
  });
