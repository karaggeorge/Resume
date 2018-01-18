import React, { Component } from 'react';

export const Icon = ({ code }) => {
  return (
    <i className={`fa fa-${code}`} aria-hidden="true"></i>
  )
}

export const SocialIcon = ({ code, target }) => {
  return (
    <a href={target} target="_blank"> <Icon code={code} /> </a>
  );
}

class Profile extends Component {
  getAge() {
    var birthday = new Date('5/5/1995');
    return ~~((Date.now() - birthday) / 31557600000);
  }

  render() {
    return (
      <section className='profile'>
        <div className='anchor' id='profile' />
        <div className='heading' />
        <div className='profile-card'>
          <div className='profile-card-info'>
            <div className='profile-card-info__demographic'>
              <h1> George Karagkiaouris </h1>
              <h4> Software Engineering & Biology </h4>
                <div className='resume'>
                  <a className='resume-view' href='/files/GeorgeKaragkiaouris_Resume.pdf' target='_blank'> Resume </a>
                  <a className='resume-download' href='/files/GeorgeKaragkiaouris_Resume.pdf' download><Icon code='download' /></a>
                </div>
                <div className='info'>
                  <ul>
                    <li><Icon code='graduation-cap'/>Graduating May 2018</li>
                    <li><a href='mailto:gkaragkiaouris2'><Icon code='envelope'/>gkaragkiaouris2@gmail.com</a></li>
                    <li><a href='tel:+12039097497'><Icon code='phone'/>+1 203-909-7497</a></li>
                    <li><a><Icon code='map-marker'/>275 Mt Carmel Ave, Hamden, CT</a></li>
                  </ul>
                </div>
            </div>
            <div className='profile-card-info__social'>
              <SocialIcon target='https://www.linkedin.com/in/gkaragkiaouris/' code='linkedin fa-2x' />
              <SocialIcon target='https://github.com/karaggeorge' code='github fa-2x' />
              <SocialIcon target='https://www.facebook.com/karagkiaouris.george' code='facebook fa-2x' />
              <SocialIcon target='https://www.instagram.com/karaggeorge37/' code='instagram fa-2x' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
