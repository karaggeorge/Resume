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
          <div className='project-card'>
            <h1>Smart Checklist</h1>
            <div className='card-body'>
              <p>A smart checklist that provides guidance to process performers, is context-dependent and handles exceptional situations by dynamically updating the process steps. Mainly used for medical processes.</p>
              <p>Capstone project based on <a href='http://laser.cs.umass.edu/techreports/15-021.pdf' target='_blank'>research</a> done at the University of Massachusetts Amherst (UMass).</p>
              <p>This implementation succeeded in allowing multiple agents participating at once, something that hadn't been achieved so far. It is still being used for demos by the UMass team.</p>
            </div>
            <div className='btn-group'>
              <a className='github-btn' href='http://capture.quinnipiac.edu/recordings/GKaragkiaouris/SER_Final_Demo/SER_Final_Demo_-_20170503_134924_15.html' target="_blank">Demo Presentation</a>
              <a className='github-btn' href='https://github.com/karaggeorge/SmartChecklist' target="_blank">View on GitHub</a>
            </div>
          </div>
          <div className='project-card'>
            <h1>Messenger Socket App</h1>
            <div className='card-body'>
              <p>A group messenger app built in Java using Swing and awt for the graphics, while using Sockets and Threads for the connections.</p>
              <p>Supports a group chat, connected user list and encrypted private messaging.</p>
            </div>
            <a className='github-btn' href='https://github.com/karaggeorge/MessengerSocketApp' target="_blank">View on GitHub</a>
          </div>
          <div className='project-card'>
            <h1>Hangman</h1>
            <div className='card-body'>
              <p>A Hangman game built in Java using Swing and awt.</p>
              <p>Features a big dictionary of words, various difficulties and lives settings.</p>
            </div>
            <a className='github-btn' href='https://github.com/karaggeorge/hangman' target="_blank">View on GitHub</a>
          </div>
          <div className='project-card'>
            <h1>Space Ships</h1>
            <div className='card-body'>
              <p>A Space Ship 2D shooter game built in Java using Swing and awt.</p>
              <p>Features sound effects, cursor aim, controls and animated achievement messages.</p>
            </div>
            <a className='github-btn' href='https://github.com/karaggeorge/SpaceShips' target="_blank">View on GitHub</a>
          </div>
          <div className='project-card'>
            <h1>Maze Game</h1>
            <div className='card-body'>
              <p>A simple Maze game built in Java using Swing and awt.</p>
              <p>Features challenging gameplay, textures and customizable coloration.</p>
            </div>
            <a className='github-btn' href='https://github.com/karaggeorge/MazeGame' target="_blank">View on GitHub</a>
          </div>
          <div className='project-card'>
            <h1>DuckLamma</h1>
            <div className='card-body'>
              <p>A simple fast-paced game built in Java using Swing and awt.</p>
              <p>Features fast-paced, engaging gameplay and a big collection of duck and lamma pictures</p>
            </div>
            <a className='github-btn' href='https://github.com/karaggeorge/DuckLamma' target="_blank">View on GitHub</a>
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
