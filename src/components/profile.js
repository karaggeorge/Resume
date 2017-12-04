import React, { Component } from 'react';

const Icon = ({ code }) => {
  return (
    <i className={`fa fa-lg fa-${code}`} aria-hidden="true"></i>
  )
}

const SocialIcon = ({ code, target }) => {
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
        <div className='heading' />
        <div className='profile-card'>
          <div className='profile-card__photo' />
          <div className='profile-card-info'>
            <div className='profile-card-info__demographic'>
              <div className='resume'>
                <a className='resume-view' href='GeorgeKaragkiaouris_Resume.pdf' target='_blank'> Resume </a>
                <a className='resume-download' href='GeorgeKaragkiaouris_Resume.pdf' download><Icon code='download' /></a>
              </div>
              <h1> George Karagkiaouris </h1>
              <h4> Software Engineer & Biologist </h4>
              <div className='demographic'> <span className='title'> Age </span> {this.getAge()} </div>
              <div className='demographic'> <span className='title'> Email </span> gkaragkiaouris2@gmail.com </div>
              <div className='demographic'> <span className='title'> Phone </span> (203) 909-7497 </div>
              <div className='demographic'> <span className='title'> Address </span> 275 Mt. Carmel Ave, Hamden, CT </div>
              <div className='demographic'> <span className='title'> Nationality </span> Greek </div>
            </div>
            <div className='profile-card-info__social'>
              <SocialIcon target='https://www.linkedin.com/in/gkaragkiaouris/' code='linkedin' />
              <SocialIcon target='https://github.com/karaggeorge' code='github' />
              <SocialIcon target='https://www.facebook.com/karagkiaouris.george' code='facebook' />
              <SocialIcon target='https://www.instagram.com/karaggeorge37/' code='instagram' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
