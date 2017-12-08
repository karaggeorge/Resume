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

    const hash = window.location.hash;
    const filterTag = tagExists(hash) ? hash.substr(1) : undefined;

    this.state = {
      activeSection: 'profile',
      filterTag,
    };
  }

  componentDidMount() {
    const app = this;
    $(window).on('hashchange', function() {
      const hash = window.location.hash;
      if (tagExists(hash)) app.setState({ filterTag: hash.substr(1) });
      else alert('fix me');
    });
  }

  clear = () => {
    this.setState({ filterTag: '' });
    window.history.replaceState('', document.title, window.location.pathname);
  }

  setActive = (name) => this.setState({ activeSection: name });

  render() {
    const { filterTag } = this.state;

    return (
      <MuiThemeProvider>
        <div className="app">
          <Alert stack={true} effect='slide' position='top-right' />
          <Navbar setActive={this.setActive} active={this.state.activeSection} />
          <Profile />
          <Experience filterTag={filterTag} clear={this.clear} />
          <Projects filterTag={filterTag} clear={this.clear} />
          <Awards filterTag={filterTag} clear={this.clear} />
          <Skills />
          <Education filterTag={filterTag} clear={this.clear} />
          <Contact />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
