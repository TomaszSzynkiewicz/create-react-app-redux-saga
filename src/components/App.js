import React from 'react';
import logo from '../static/images/logo.svg';
import './App.css';

import HelloWorld from './HelloWorld/HelloWorld';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <HelloWorld />
  </div>
);

export default App;
