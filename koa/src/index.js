const koa = require("koa");
const app = new koa();

// 响应
app.use(ctx => {
  console.log("**************************************");
  console.log(ctx);
  ctx.body = "Hello Koa";
});

app.listen(3000);
