import React, { Component } from 'react';
import CreateAccount from './components/CreateAccount';
import NavBar from './components/NavBar';
import TheGrid from './components/TheGrid';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavBar>
      </NavBar>
      <Route
        path="/login"
        exact strict component={TheGrid}/>
      <Route
        path="/Register"
        exact strict component={CreateAccount}
      />

      </div>
      </Router>
    );
  }
}

export default App;
