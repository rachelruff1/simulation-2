import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import routes from './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        < SignIn />
        {routes}
      </div>
    );
  }
}

export default App;
