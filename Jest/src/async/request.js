import axios from "axios";

export default function request() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello Koa");
    }, 3000);

    // axios({
    //   url: "http://127.0.0.1:3000"
    // }).then(res => {
    //   console.log(res);
    //   resolve(res);
    // });
  });
}

request();
