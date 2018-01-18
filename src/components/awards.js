import React, { Component } from 'react';
import awards from '../data/awards.json';
import { isInactive, getName } from '../data/tags';
import Tag from './tag';

const Award = ({ logo, title, date, description, subtitle, inactive }) => {
  const className = inactive ? 'award-card inactive' : 'award-card';

  return (
    <div className={className}>
      <div className='award-card__logo'>
        <img src={logo} alt=' ' />
      </div>
      <div className='award-card__info'>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h3>{date}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

class Awards extends Component {
  render() {
    const { filterTag, clear } = this.props;
    const className = filterTag ? 'awards filtered' : 'awards';

    return (
      <section className={className}>
        <div className='anchor' id='awards' />
        <h1 className='section-title'>Awards</h1>
        { filterTag && <h4 className='filter'>Currently showing:<Tag value={getName(filterTag)} /><a className='clear' onClick={clear}>Clear</a></h4> }
        <div className='content'>
          { awards.map((award, i) => <Award inactive={isInactive(award, filterTag)} key={i} {...award} />) }
        </div>
      </section>
    );
  }
}

export default Awards;
