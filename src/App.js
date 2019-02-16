import React, { Component } from 'react';
import CreateAccount from './components/CreateAccount';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar>
      </NavBar>
      <CreateAccount/>
      </div>
    );
  }
}

export default App;
