import koa from "koa";

const app = new koa();

app.use(async (ctx, next) => {
  console.log("1 start");
  await next();
  console.log("1 end");
});

app.use(async (ctx, next) => {
  console.log("2 start");
  await next();
  console.log("2 end");
});

app.use(async ctx => {
  console.log("hello world");
  ctx.body = "Hello World";
  await Promise.reject("Error").finally(err => err);
});

app.listen(4000);
