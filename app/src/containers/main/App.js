import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from '../table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Periodic table of the modern software development</h1>
        </header>
        <Table />
        <ul className="pa-explanation">
          <li><div className="pa-practice"></div>Practice</li>
          <li><div className="pa-essential"></div>Essential</li>
          <li><div className="pa-agile"></div>Agile</li>
          <li><div className="pa-team"></div>Team</li>
          <li><div className="pa-principle"></div>Principle</li>
        </ul>
        <footer>Built on React by <a href="http://www.codegarage.net" target="_blank">joshy</a></footer>
      </div>
    );
  }
}

export default App;
