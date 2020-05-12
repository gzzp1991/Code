// 初识express

const express = require("express");

const hostname = "localhost";
const port = 5555;

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server Running: http://${hostname}:${port}`);
});
