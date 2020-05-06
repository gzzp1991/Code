import React from 'react';

class ChildOne extends React.PureComponent {
  componentDidMount() {
    console.log('one did', this.props.name);
  }

  componentDidUpdate() {
    console.log('one update', this.props.name);
  }

  componentWillUnmount() {
    console.log('one unmount', this.props.name);
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}
class ChildTwo extends React.PureComponent {
  componentDidMount() {
    console.log('two did', this.props.name);
  }

  componentDidUpdate() {
    console.log('two update', this.props.name);
  }

  componentWillUnmount() {
    console.log('two unmount', this.props.name);
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}

export default class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 2000);
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        {show && <ChildOne name="1" />}
        <ChildOne name="2" />
        <ChildTwo name="1" />
        <ChildOne name="3" />
      </div>
    );
  }
}
