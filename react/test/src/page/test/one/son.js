import React, { PureComponent } from 'react';
import Sonson from './sonson';

class Son extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      const {
        json: { b },
      } = this.props;
      b.push(4);
    }, 2000);
  }

  render() {
    const {
      json: { a, b },
    } = this.props;
    return (
      <div className="son">
        {a}
        <Sonson b={b} />
      </div>
    );
  }
}
export default Son;
