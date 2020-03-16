import React, { useState, useEffect } from "react";

function Counter1() {
  const [number, setNumber] = useState(0);
  // useEffect里面的这个函数会在第一次渲染之后和更新完成后执行
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `你点击了${number}次`;
  });
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </>
  );
}

function Counter2() {
  let [number, setNumber] = useState(0);
  let [text, setText] = useState("");
  // 相当于componentDidMount 和 componentDidUpdate
  useEffect(() => {
    console.log("开启一个新的定时器");
    let $timer = setInterval(() => {
      setNumber(number => number + 1);
    }, 1000);
    // useEffect 如果返回一个函数的话，该函数会在组件卸载和更新时调用
    // useEffect 在执行副作用函数之前，会先调用上一次返回的函数
    // 如果要清除副作用，要么返回一个清除副作用的函数
    return () => {
      console.log("destroy effect");
      clearInterval($timer);
    };
  }, []);
  // },[]);//要么在这里传入一个空的依赖项数组，这样就不会去重复执行
  return (
    <>
      <input value={text} onChange={event => setText(event.target.value)} />
      <p>{number}</p>
      <button>+</button>
    </>
  );
}

export default function() {
  return (
    <>
      <Counter1 />
      <Counter2 />
    </>
  );
}
