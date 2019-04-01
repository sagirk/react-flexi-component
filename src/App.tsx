import React, { Component } from 'react';

import Flexi from './components/Flexi';

import flexiConfig from './flexiConfig';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flexi Component Demo</h1>
        </header>
        <Flexi onSubmit={() => {}} config={flexiConfig} />
      </div>
    );
  }
}

export default App;
