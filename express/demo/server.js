const express = require("express");

const hostname = "localhost";
const port = 5555;

const app = express();
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  throw new Error("err test");
  // res.render("contact");
});

// 404
app.use("*", (req, res) => {
  res.status("404").render("404", { url: req.originalUrl });
});
// 全局error中间件
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server Running: http://${hostname}:${port}`);
});

function errorMiddleware(err, req, res, next) {
  console.log(err.stack);
  res.status(500).render("500");
}
