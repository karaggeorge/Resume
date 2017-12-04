import React, { Component } from 'react';
import Logo, { SimpleLogo } from './logo';

class Education extends Component {
  render() {
    return (
      <section className="education">
        <h1 className='section-title'>Education</h1>
        <div className='content'>
          <Logo />
          <SimpleLogo />
        </div>
      </section>
    );
  }
}

export default Education;
