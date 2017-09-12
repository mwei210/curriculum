import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {
  const mainDiv = document.getElementById('main');
  ReactDOM.render(<Root />, mainDiv);
  console.log('mainDiv ', mainDiv);
  }
);

class Root extends React.Component {


  render() {
    // const clock = new Clock();
    return (<div>
       <Clock />
       <Weather />
       </div>);
  }
}
