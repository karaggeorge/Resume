import React, { Component } from 'react';
import Tag from './tag';
// import skillCategories from '../data/skills.json';
import { countTag } from '../data/tags';

const addCounters = (skill) => ({ name: skill, side: countTag(skill) });

const countSort = (a, b) => b.side - a.side;

// <div className='tag-area'>
//   { skills.map(addCounters).sort(countSort).map((skill, i) => <Tag key={`tag-${i}`} value={skill} />) }
// </div>

const SkillCategory = ({ title, skills }) => {
  return (
    <div className='skill-category'>
      <h2>{title}</h2>
      <p>{skills.join(', ')}</p>
    </div>
  );
};

class Skills extends Component {
  render() {
    const skillCategories = [
      {
        title: 'Strong',
        skills: ['Java', 'Node.js', 'React', 'Redux', 'ES6', 'Sass', 'Git', 'Enzyme/Chai/Sinon'],
      }, {
        title: 'Knowledgeable',
        skills: ['C/C++', 'Ruby/Rails', 'SQL', 'Webpack', 'Cucumber'],
      }, {
        title: 'General',
        skills: ['Teamwork', 'Agile', 'Leadership', 'Creative Thinking', 'Problem Solving', 'Teaching'],
      }
    ];

    return (
      <section className="skills">
        <div className='anchor' id='skills' />
        <h1 className='section-title'>Skills</h1>
        <div className='content card'>
            { skillCategories.map((category, i) => <SkillCategory key={i} {...category} />) }
        </div>
      </section>
    );
  }
}

export default Skills;
