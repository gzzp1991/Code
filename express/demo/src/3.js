/**
 * 全局中间件: loggerMiddleware
 * 路由中间件: middleware1
 * @see 如果忘记在中间件中调用next函数，并且又不直接返回响应时，服务器会直接卡在这个中间件不会继续执行下去
 */

const express = require("express");

const hostname = "localhost";
const port = 5555;

const app = express();
// 全局中间件
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// 路由中间件
app.get("/1", middleware1, (req, res) => {
  res.send("1");
});

app.listen(port, () => {
  console.log(`Server Running: http://${hostname}:${port}`);
});

function loggerMiddleware(req, res, next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] ${req.method}${req.url}`);
  next();
}

function middleware1(req, res, next) {
  next();
}
