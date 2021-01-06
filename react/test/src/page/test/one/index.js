import React, { PureComponent } from 'react';
import Son from './son';

class Test1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      json: {
        a: 'a',
        b: [1, 2, 3],
      },
    };
  }

  render() {
    const { json } = this.state;
    return (
      <div className="test1">
        test1
        <Son json={json} />
      </div>
    );
  }
}
export default Test1;
