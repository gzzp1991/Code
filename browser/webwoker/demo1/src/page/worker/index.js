import React from 'react';
import Worker from 'Src/test.worker';
import './index.scss';

class PageWorker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.webworker = new Worker();
  }

  componentDidMount() {
    this.webworker.postMessage('did mount');
  }

  componentWillUnmount() {
    this.webworker.terminate();
  }

  render() {
    return <div className="worker">worker</div>;
  }
}

export default PageWorker;
