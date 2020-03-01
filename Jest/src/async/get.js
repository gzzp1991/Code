import request from "./request";

export default function get() {
  // console.log(request);
  return request().then(res => res);
}
