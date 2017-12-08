import React, { Component } from 'react';
import Timeline, { TimelineCard } from './timeline';
import Tag, { TagArea } from './tag';
import education from '../data/education.json';
import courses from '../data/courses.json';
import { isInactive, getName } from '../data/tags';

const EducationCard = ({ title, subtitle, logo, date, description, inverted, tags = [], inactive }) => {
  return (
    <TimelineCard inactive={inactive} inverted={inverted}>
      <div className='education-card'>
        <div className='education-card__logo'>
          <img src={logo} alt=' ' />
        </div>
        <div className='education-card__info'>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <h3>{date}</h3>
          <p>{description}</p>
        </div>
      </div>
      <TagArea tags={tags} />
    </TimelineCard>
  );
};

const Course = ({ title, inactive }) => {
  const className = inactive ? 'inactive' : undefined;

  return (
    <span className={className}>{title}</span>
  );
};

class Education extends Component {
  render() {
    const { filterTag, clear } = this.props;
    const className = filterTag ? 'education filtered' : 'education';


    return (
      <section className={className} id='education'>
        <h1 className='section-title'>Education</h1>
        { filterTag && <h4 className='filter'>Currently showing:<Tag value={getName(filterTag)} /><a className='clear' onClick={clear}>Clear</a></h4> }
        <div className='content'>
          <Timeline>
            { education.map((edu, i) => <EducationCard inactive={isInactive(edu, filterTag)} key={i} {...edu} />) }
          </Timeline>
          <div className='relevant-courses'>
            <h3>Relevant Courses</h3>
            <div className='courses'>
              { courses.map((course, i) => <Course inactive={isInactive(course, filterTag)} key={i} {...course} />) }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
