import React, { Component } from 'react';
import Timeline, { TimelineCard } from './timeline';

const EducationCard = ({ title, subtitle, logo, date, description, inverted }) => {
  return (
    <TimelineCard inverted={inverted}>
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
    </TimelineCard>
  );
};

class Education extends Component {
  render() {
    return (
      <section className="education">
        <h1 className='section-title'>Education</h1>
        <div className='content'>
          <Timeline>
            <EducationCard
              logo='/img/hc.png'
              title='Hellenic College of Thessaloniki'
              subtitle='High School'
              date='2010 - 2013'
              description='Graduated with a GPA of 4.0'
            />
            <EducationCard
              logo='/img/qu.png'
              title='Quinnipiac University'
              subtitle='Software Engineering & Biology'
              date='2013 - Present'
              description='Current GPA: 3.9'
            />
            <EducationCard
              logo='/img/a100.png'
              title='A100'
              subtitle='Software Development'
              date='Spring 2015'
              description='Trained in Web Development and worked as part of a development team in a front- and back-end project for a partner company'
            />
          </Timeline>
        </div>
      </section>
    );
  }
}

export default Education;
