import React, { Component } from 'react';

import './App.css';
import Flexi from './components/Flexi';
import { normalFlexiConfig, recursiveFlexiConfig } from './flexiConfig';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Flexi Component Demo</h1>
      </header>
      <Flexi onSubmit={() => {}} config={recursiveFlexiConfig} />
    </div>
  );
};

export default App;
