import React, { PureComponent } from 'react';

class Sonson extends PureComponent {
  render() {
    const { b } = this.props;
    return <div className="sonson">{b.join(',')}</div>;
  }
}
export default Sonson;
