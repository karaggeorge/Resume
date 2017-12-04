import React, { Component } from 'react';
import './main.css';
import Navbar from './components/navbar';
import Profile from './components/profile';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Profile />
      </div>
    );
  }
}

export default App;
