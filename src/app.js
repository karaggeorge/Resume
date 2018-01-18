import React, { Component } from 'react';
import './main.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import Awards from './components/awards';
import Footer from './components/footer';
import Contact from './components/contact';
import $ from 'jquery';
import { tagExists } from './data/tags';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Alert from 'react-s-alert';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: 'profile',
    };
  }

  setActive = (name) => this.setState({ activeSection: name });

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Alert stack={true} offset={100} effect='slide' position='top-right' />
          <Navbar setActive={this.setActive} active={this.state.activeSection} />
          <Profile />
          <Experience />
          <Projects />
          <Awards />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
