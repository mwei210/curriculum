import React from 'react';

class Weather extends React.Component{
  constructor() {
    super();
    this.state = {
      location: {}
    };
  }

  componentDidMount () {
    this.location = navigator.geolocation.getCurrentPosition( (position) => {
      this.setState({position});
      debugger;
    });
  }

  render() {
    let currentLocation = (this.state.location.coords ? this.state.location : null);
    return (
      <div>
        {currentLocation ? currentLocation.coords.latitude : null }
      </div>
    );
  }
}


export default Weather;
