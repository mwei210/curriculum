import React from 'react';

class Clock extends React.Component{
  constructor() {
    super();
    // this.title = "clock";
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }
  render() {
    return (
      <div className="clock">
        <div className="date">
          <h1>date:</h1>
          <h1>{this.state.date.getDate()}/
              {this.state.date.getMonth() + 1}/
              {this.state.date.getFullYear()}</h1>
        </div>
        <div className="time">
          <h1>time:  </h1>
          <h1>{this.convertTime(this.state.date.getHours())}:
              {this.convertTime(this.state.date.getMinutes())}:
              {this.convertTime(this.state.date.getSeconds())}
          </h1>
        </div>

      </div>
      );
  }

  convertTime(timeUnit) {
    timeUnit = timeUnit.toString();
    if (timeUnit.length === 1) {
      return "0" + timeUnit;
    }
    else {
      return timeUnit;
    }
  }

  tick() {
    this.setState( {
      date: new Date()
    });
  }

  componentDidMount () {
    this.tickInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.tickInterval);
  }
}

export default Clock;
