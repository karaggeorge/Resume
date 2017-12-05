import React, { Component } from 'react';
import Timeline, { TimelineCard, TimelineMarker } from './timeline';

const ExperienceCard = ({ title, subtitle, logo, date, description, inverted, tags }) => {
  return (
    <TimelineCard inverted={inverted}>
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
      {
        tags && (
          <div className='experience-tags'>
            {
              tags.map((tag, i) => (
                <a href={`#skill-${tag.toLowerCase()}`} key={`tag-${i}`}>{tag}</a>
              ))
            }
          </div>
        )
      }
    </TimelineCard>
  );
}

class Experience extends Component {
  render() {
    return (
      <section className="education">
        <h1 className='section-title'>Experience</h1>
        <div className='content'>
          <Timeline>
            <ExperienceCard
              logo='/img/pw.jpg'
              title='PatientWisdom'
              subtitle='Software Engineer / Web Developer'
              date='June 2017 - December 2017'
              description='Worked with a team of Software Engineers doing front-end work using ReactJS, Javascript, HTML and CSS along with back-end work in Ruby on Rails and Postgress. Practiced Test Driven Development using Enzyme/Chai/Sinon, RSpec and Cucumber for Acceptance Testing'
              tags={['ReactJS', 'HTML/CSS/Javascript', 'Ruby/Rails', 'Postgress', 'TDD']} />
            <ExperienceCard
              logo='/img/pw.jpg'
              title='PatientWisdom'
              subtitle='Software Engineer / Web Developer'
              date='June 2016 - August 2016'
              description='Worked with a team of Software Engineers as a Web Developer using Meteor, MongoDB, Javascript, HTML and CSS do to both front-end and back-end work while following an Agile project cycle. Learned a lot about working in an Engineering Team and the value of Pair Programming'
              tags={['Meteor', 'MongoDB', 'HTML/CSS/Javascript', 'Agile']} />
            <ExperienceCard
              logo='/img/esg.jpg'
              title='ESG Compass'
              subtitle='Software Developer'
              date='June 2015 - December 2015'
              description='Worked with a project manager to create a website and a web application from scratch using Meteor and MongoDB. Practiced Requirement Elicitation and Analysis and also UI Design'
              tags={['Meteor', 'MongoDB', 'Design', 'Requirement Elicitation']} />
            <TimelineMarker text='Other' />
            <ExperienceCard
              logo='/img/qu.png'
              title='Quinnipiac University Learning Commons'
              subtitle='Peer Tutor'
              date='Fall 2015 - Spring 2017'
              description='Tutored students in Computer Science, Engineering, Chemistry, Biology, Physics and Math courses. Went through levels of tutoring training learning various teaching methods and strategies'
              tags={['Teaching']} />
            <ExperienceCard
              logo='/img/qu.png'
              title='Quinnipiac University Residential Life'
              subtitle='Resident Assistant'
              date='Fall 2017 - Present'
              description='Campus Leadership position in which I worked with a team to create a positive living environemnt and comunity designed to promote education, healthy living and responsible citizenship. Assisted in the selection, evaluation and training of incoming RAs. Enforced all University Housing policies'
              tags={['Leadership', 'Teaching', 'Training']} />
          </Timeline>
        </div>
      </section>
    );
  }
}

export default Experience;
