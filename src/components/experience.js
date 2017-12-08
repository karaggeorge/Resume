import React, { Component } from 'react';
import Timeline, { TimelineCard } from './timeline';
import Tag, { TagArea } from './tag';
import experiences from '../data/experiences.json';
import { isInactive, getName } from '../data/tags';

const ExperienceCard = ({ title, subtitle, logo, date, description, inverted, tags, inactive }) => {
  return (
    <TimelineCard inverted={inverted} inactive={inactive}>
      <div className='experience-card'>
        <div className='experience-card__logo'>
          <img src={logo} alt=' ' />
        </div>
        <div className='experience-card__info'>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <h3>{date}</h3>
          <p>{description}</p>
        </div>
      </div>
      <TagArea tags={tags} />
    </TimelineCard>
  );
}

class Experience extends Component {

  render() {
    const { filterTag, clear } = this.props;
    const className = filterTag ? 'experience filtered' : 'experience';

    return (
      <section className={className} id='experience'>
        <h1 className='section-title'>Experience</h1>
        { filterTag && <h4 className='filter'>Currently showing:<Tag value={getName(filterTag)} /><a className='clear' onClick={clear}>Clear</a></h4> }
        <div className='content'>
          <Timeline>
            { experiences.map((experience, i) => <ExperienceCard inactive={isInactive(experience, filterTag)} key={i} {...experience} />) }
          </Timeline>
        </div>
      </section>
    );
  }
}

export default Experience;
