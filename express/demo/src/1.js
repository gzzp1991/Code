/**
 * 使用node原生API
 * 1. 需要写很多代码
 * 2. 没有专门的路由机制
 */

const http = require("http");

const hostname = "localhost";
const port = 5555;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Hello World\n");
});

server.listen(port, () => {
  console.log(`Server Running: http://${hostname}:${port}`);
});
