import React, { Component } from 'react';
import CreateAccount from './components/CreateAccount';
import NavBar from './components/NavBar';
import TheGrid from './components/TheGrid';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={TheGrid}/>
        <Route path='/register' component={CreateAccount}/>
      </div>
      </Router>
    );
  }
}

export default App;
