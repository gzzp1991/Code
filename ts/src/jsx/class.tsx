import * as React from 'react';
class MyComponent {
  render() {}
}
function MyFactoryFunction() {
  return { render: () => {} };
}
<MyComponent />;
<MyFactoryFunction />;

declare namespace JSX {
  interface IntrinsicElements {
    foo: { bar?: boolean };
  }
}
<foo bar={false} />;

declare namespace JSX {
  interface IntrinsicElements {
    foo1: { requiredProp: string; optionalProp?: number };
  }
}
<foo1 requiredProp="1" />;

// interface PropsType1 {
//   children: JSX.Element;
//   name: string;
// }
// class Component11 extends React.Component<PropsType1> {
//   render() {
//     return <h2>{this.props.children}</h2>;
//   }
// }
