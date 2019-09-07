import React from 'react';
import '../App.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    const { clicks } = this.state;
    this.setState({ clicks: clicks + 1 });
  };

  DecreaseItem = () => {
    const { clicks } = this.state;
    this.setState({ clicks: clicks - 1 });
  };

  ResetItem = () => {
    this.setState({ clicks: 0 });
  };

  ToggleClick = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { clicks, show } = this.state;
    return (
      <div>
        <button type="button" onClick={this.IncrementItem}>
          Click to increment by 1
        </button>
        <button type="button" onClick={this.DecreaseItem}>
          Click to decrease by 1
        </button>
        <button type="button" onClick={this.ResetItem}>
          Reset
        </button>
        <button type="button" onClick={this.ToggleClick}>
          {show ? 'Hide number' : 'Show number'}
        </button>
        {show ? <h2>Click Count: {clicks}</h2> : ''}
      </div>
    );
  }
}
