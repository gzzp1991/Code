import * as React from 'react';

const { useState, useCallback } = React;

interface childProps {
  cb(): void;
}

function Child(props: childProps) {
  const { cb } = props;

  return <div onClick={cb}>click</div>;
}

export default function() {
  const [num, setNum] = useState(0);

  const test = useCallback(() => {
    setNum(num => num + 1);
  }, [num]);

  const callback = () => {
    console.log(num);
    test();
  };

  return <Child cb={callback} />;
}
