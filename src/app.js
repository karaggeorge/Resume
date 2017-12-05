import React, { Component } from 'react';
import './main.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import Awards from './components/awards';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <Awards />
        <Projects />
      </div>
    );
  }
}

export default App;
