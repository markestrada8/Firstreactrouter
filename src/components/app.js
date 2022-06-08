import React, { Component } from 'react';
import '../style/app.scss'




export default class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <h1>DevCamp React Starter</h1>
        <h2>React + React Router</h2> */}
        <div className="logo">
          TWT
        </div>
        <div className="title">Welcome to The Wasteland Traders!</div>
        <button className="btn-app"><a href="/store">Continue</a></button>
      </div>

    );
  }
}
