class Clock {
  constructor() {
    // 1. Create a Date object.
    const currTime = new Date();

    // 2. Store the hours, minutes, and seconds.
    this.hours = currTime.getHours();
    this.minutes = currTime.getMinutes();
    this.seconds = currTime.getSeconds();

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000)
  }

  printTime() {
    // Format the time in HH:MM:SS
    const timeString = [this.hours, this.minutes, this.seconds].join(":");

    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSeconds();

    // 2. Call printTime.
    this.printTime();
  }

  _incrementSeconds() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes++;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }
  _incrementHours() {
    this.hours++;
    if (this.hours === 24) {
      this.hours = 0;
    }
  }
}

const clock = new Clock();
