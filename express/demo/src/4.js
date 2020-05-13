/**
 * SSR: 模板引擎渲染页面
 */

const express = require("express");

const hostname = "localhost";
const port = 5555;

const app = express();
// 模板设置
app.set("view engine", "hbs");
// 目录位置
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => {
  console.log(`Server Running: http://${hostname}:${port}`);
});
