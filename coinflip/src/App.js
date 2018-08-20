import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fliplogic from './Fliplogic';

class App extends Component {
  render() {
      return (
        <div>

          <h1 className="head">FLIP. THAT. COIN.</h1>

          <Fliplogic />

        </div>
      );
  }
}

export default App;
