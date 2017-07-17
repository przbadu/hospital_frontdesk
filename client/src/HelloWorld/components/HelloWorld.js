import React, { Component } from 'react';
import logo from './logo.svg';
import './HelloWorld.css';

class HelloWorld extends Component {
  render() {
    return (
      <div className="HelloWorld">
        <div className="HelloWorld-header">
          <img src={logo} className="HelloWorld-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="HelloWorld-intro">
          To get started, edit <code>src/HelloWorld.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default HelloWorld;
