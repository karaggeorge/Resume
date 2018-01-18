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
      <section className="projects">
        <div className='anchor' id='projects' />
        <h1 className='section-title'>Projects</h1>
        <div className='content'>
          <div className='project-card'>
            <h1>MacWindows</h1>
            <div className='card-body'>
              <p>Npm package written in Swift that provides information about application windows running on macOS and can activate an application's main window.</p>
              <p>Originally developed for <a href='https://github.com/wulkano/kap' target='_blank'>wulkano/kap</a></p>
            </div>
            <a className='github-btn' href='https://github.com/karaggeorge/mac-windows' target="_blank">View on GitHub</a>
          </div>
          <div className='project-card'>
            <h1>ReactBetterPassword</h1>
            <div className='card-body'>
              <p>Password input for ReactJS that mimics mobile password masking behavior. Delays the masking of the last character to improve user accuracy.</p>
              <p>This component solves the problems that the most common <a href='https://blog.decaf.de/2009/07/07/iphone-like-password-fields-using-jquery/' target='_blank'>implementation</a> faces: not being able to type in the middle or start of the string.</p>
            </div>
            <div className='btn-group'>
              <a className='github-btn' href='https://karaggeorge.github.io/react-better-password' target="_blank">Demo / Examples</a>
              <a className='github-btn' href='https://github.com/karaggeorge/react-better-password' target="_blank">View on GitHub</a>
            </div>
          </div>
        </div>
        <h3>Contributions</h3>
        <div className='content'>
          <div className='project-card'>
            <h1>JedWatson/react-select</h1>
            <div className='card-body'>
              <p>A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete and ajax support.</p>
              <p>3 accepted and merged Pull Requests</p>
            </div>
            <a className='github-btn' href='https://github.com/JedWatson/react-select' target="_blank">View on GitHub</a>
          </div>
          <div className='project-card'>
            <h1>wulkano/kap</h1>
            <div className='card-body'>
              <p>An open-source screen recorder built with web technology</p>
              <p>3 accepted and merged Pull Requests</p>
            </div>
            <a className='github-btn' href='https://github.com/wulkano/kap' target="_blank">View on GitHub</a>
          </div>
          <div className='project-card'>
            <h1>mui-org/material-ui</h1>
            <div className='card-body'>
              <p>React components that implement Google's Material Design.</p>
              <p>2 accepted and merged Pull Requests</p>
            </div>
            <a className='github-btn' href='https://github.com/mui-org/material-ui' target="_blank">View on GitHub</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
