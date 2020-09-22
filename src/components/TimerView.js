import React from 'react';

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  let secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

class TimerView extends React.Component {
  state = {
    seconds: 0,
    isTiming: false,
  };

  handleTick = () => {
    console.log(this.timerId);
    if (this.state.isTiming) {
      this.setState((state) => ({ seconds: state.seconds + 1 }));
    }
  };

  handleReset = () => {
    this.setState({ seconds: 0 });
  };

  toggleTiming = () => {
    this.setState((state) => ({ isTiming: !state.isTiming }));
  };

  componentDidMount() {
    this.timerId = setInterval(this.handleTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="TimerView">
        <h1>{formatTime(this.state.seconds)}</h1>
        <div className="buttons is-centered my-2">
          <button className="button" onClick={this.toggleTiming}>
            {this.state.isTiming ? 'PAUSE' : 'START'}
          </button>
          <button className="button" onClick={this.handleReset}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default TimerView;
