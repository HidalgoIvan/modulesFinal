import React, { Component } from 'react';
import CreateAccount from './components/CreateAccount';
import NavBar from './components/NavBar';
import TheGrid from './components/TheGrid';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar>
      </NavBar>
      <TheGrid/>
      </div>
    );
  }
}

export default App;
