const SyncHook = require("./SyncHook");
const SyncBailHook = require("./SyncBailHook");
const SyncWaterfallHook = require("./SyncWaterfallHook");
const SyncLoopHook = require("./SyncLoopHook");
const AsyncParallelHook = require("./AsyncParallelHook");
const AsyncSeriesHook = require("./AsyncSeriesHook");
const AsyncSeriesWaterfallHook = require("./AsyncSeriesWaterfallHook");

console.log("/* SyncHook */");
const syncHook = new SyncHook(["SyncHook"]);
syncHook.tap("es2015", name => {
  console.log("es2015 ", name);
});
syncHook.tap("es2016", name => {
  console.log("es2016 ", name);
});
syncHook.call("zp");

// 保险：返回undefined才执行下一步
console.log("/* SyncBailHook */");
const syncBailHook = new SyncBailHook(["SyncBailHook"]);
syncBailHook.tap("es2015", name => {
  console.log("es2015 ", name);
});
syncBailHook.tap("es2016", name => {
  console.log("es2016 ", name);
  return "stop";
});
syncBailHook.tap("es2017", name => {
  console.log("es2017 ", name);
});
syncBailHook.call("zp");

// 瀑布：上一步的值传递给下一步
console.log("/* SyncWaterfallHook */");
const syncWaterfallHook = new SyncWaterfallHook(["SyncWaterfallHook"]);
syncWaterfallHook.tap("es2015", name => {
  console.log(name);
  return `${name}-es2015`;
});
syncWaterfallHook.tap("es2016", name => {
  console.log(name);
  return `${name}-es2016`;
});
syncWaterfallHook.tap("es2017", name => {
  console.log(name);
  return `${name}-es2017`;
});
syncWaterfallHook.call("js: ");

// 循环：某一步不返回undefined时，从第一部重新开始执行
console.log("/* SyncLoopHook */");
let index = 0;
const syncLoopHook = new SyncLoopHook(["SyncLoopHook"]);
syncLoopHook.tap("es2015", () => {
  console.log("es2015");
});
syncLoopHook.tap("es2016", () => {
  // console.log("es2016");
  console.log(index);
  return ++index === 5 ? undefined : index;
});
syncLoopHook.tap("es2017", () => {
  console.log("es2017");
  // console.log(index);
  // return ++index === 5 ? undefined : index;
});
syncLoopHook.call("zp");

// 异步并行：
console.log("/* AsyncParallelHook */");
const asyncParallelHook = new AsyncParallelHook(["AsyncParallelHook"]);
asyncParallelHook.tapAsync("es2015", (name, cb) => {
  setTimeout(() => {
    cb(`${name}2015`);
  }, 2000);
});
asyncParallelHook.tapAsync("es2016", (name, cb) => {
  setTimeout(() => {
    cb(`${name}2016`);
  }, 1000);
});
asyncParallelHook.tapAsync("es2017", (name, cb) => {
  setTimeout(() => {
    cb(`${name}2017`);
  }, 3000);
});
asyncParallelHook.callAsync("zp", r => {
  // console.log("结束: ", r);
});

console.log("/* AsyncSeriesHook */");
const asyncSeriesHook = new AsyncSeriesHook(["AsyncSeriesHook"]);
// asyncSeriesHook.tapAsync("es2015", (name, cb) => {
//   setTimeout(() => {
//     console.log("es2015", name);
//     cb();
//   }, 2000);
// });
// asyncSeriesHook.tapAsync("es2016", (name, cb) => {
//   setTimeout(() => {
//     console.log("es2016", name);
//     cb();
//   }, 1000);
// });
// asyncSeriesHook.callAsync("zp", r => {
//   console.log("结束: ", r);
// });
asyncSeriesHook.tapPromise("es2015", name => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("es2015", name);
      resolve();
    }, 2000);
  });
});
asyncSeriesHook.tapPromise("es2016", name => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("es2016", name);
      resolve();
    }, 1000);
  });
});
asyncSeriesHook.promise("zp").then(r => {
  console.log("结束: ", r);
});

console.log("/* AsyncSeriesWaterfallHook */");
const asyncSeriesWaterfallHook = new AsyncSeriesWaterfallHook([
  "AsyncSeriesWaterfallHook"
]);
asyncSeriesWaterfallHook.tapAsync("es2015", (name, cb) => {
  setTimeout(() => {
    console.log("Water es2015", name);
    cb(null, "1");
  }, 2000);
});
asyncSeriesWaterfallHook.tapAsync("es2016", (name, cb) => {
  setTimeout(() => {
    console.log("Water es2016", name);
    cb(null, "2");
  }, 1000);
});
asyncSeriesWaterfallHook.callAsync("zp", (err, data) => {
  console.log("Water 结束: ", data);
});
