import React, { Component } from 'react';
import Tag from './tag';
import skillCategories from '../data/skills.json';
import { countTag } from '../data/tags';

const addCounters = (skill) => ({ name: skill, side: countTag(skill) });

const countSort = (a, b) => b.side - a.side;

const SkillCategory = ({ title, skills }) => {
  return (
    <div className='skill-category'>
      <h2>{title}</h2>
      <div className='tag-area'>
        { skills.map(addCounters).sort(countSort).map((skill, i) => <Tag key={`tag-${i}`} value={skill} />) }
      </div>
    </div>
  );
};

class Skills extends Component {
  render() {
    return (
      <section className="skills" id='skills'>
        <h1 className='section-title'>Skills</h1>
        <div className='content card'>
            { skillCategories.map((category, i) => <SkillCategory key={i} {...category} />) }
        </div>
      </section>
    );
  }
}

export default Skills;
