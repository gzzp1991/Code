/**
 * 服务器静态资源处理
 */

const express = require("express");

const hostname = "localhost";
const port = 5555;

const app = express();
app.set("view engine", "hbs");
app.set("views", "views");

// 静态资源配置
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index1");
});
app.get("/contact", (req, res) => {
  res.render("contact1");
});

app.listen(port, () => {
  console.log(`Server Running: http://${hostname}:${port}`);
});
