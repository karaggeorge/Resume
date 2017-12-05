import React, { Component } from 'react';
import Tag from './tag';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className='skill-category'>
      <h2>{title}</h2>
      <div className='experience-tags'>
        { skills.map((skill, i) => <Tag key={`tag-${i}`} value={skill} />) }
      </div>
    </div>
  );
};

class Skills extends Component {
  render() {
    const skills = {
      programing: [
        { name: 'ReactJS', count: 2 }
      ]
    };

    return (
      <section className="education">
        <h1 className='section-title'>Skills</h1>
        <div className='content card'>
            <SkillCategory title='Programing' skills={skills.programing} />
        </div>
      </section>
    );
  }
}

export default Skills;
