import React, { Component } from 'react';

// <div className='award-card__info'>
//   <h1>{title}</h1>
//   <h3>{subtitle}</h3>
//   <h3>{date}</h3>
//   <p>{description}</p>
// </div>

class Projects extends Component {
  render() {
    return (
      <section className="projects" id='projects'>
        <h1 className='section-title'>Projects & Contributions</h1>
        <div className='content'>
          <div className='project-card'>
            <h1>JedWatson/react-select</h1>
            <p>3 Pull Requests accepted and merged</p>
            <a href='https://github.com/JedWatson/react-select' target="_blank">View on GitHub</a>
          </div>
          <div className='project-card'>
            <h1>ReactBetterPassword</h1>
            <p>A React component simulating mobile-like password masking for the web</p>
            <a href='https://github.com/karaggeorge/react-better-password' target="_blank">View on GitHub</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
