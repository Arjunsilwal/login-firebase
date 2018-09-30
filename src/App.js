import React, { Component } from 'react';
import './App.css';
import Validate from './Validate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Arjun's validation App</h1>
        </header>
        <Validate />
      </div>
    );
  }
}

export default App;
