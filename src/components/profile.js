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
      <section className='profile' id='profile'>
        <div className='heading' />
        <div className='profile-card'>
          <div className='profile-card__photo' />
          <div className='profile-card-info'>
            <div className='profile-card-info__demographic'>
              <div className='resume'>
                <a className='resume-view' href='/files/GeorgeKaragkiaouris_Resume.pdf' target='_blank'> Resume </a>
                <a className='resume-download' href='/files/GeorgeKaragkiaouris_Resume.pdf' download><Icon code='download' /></a>
              </div>
              <h1> George Karagkiaouris </h1>
              <h4> Software Engineering & Biology </h4>
              <div className='demographic'> <span className='title'> Age </span>{this.getAge()}</div>
              <div className='demographic'> <span className='title'> Email </span><a href='mailto:gkaragkiaouris2@gmail.com'>gkaragkiaouris2@gmail.com</a></div>
              <div className='demographic'> <span className='title'> Phone </span><a href='tel:+01-203-909-7497'>(203) 909-7497</a></div>
              <div className='demographic'> <span className='title'> Address </span>275 Mt. Carmel Ave, Hamden, CT</div>
              <div className='demographic'> <span className='title'> Nationality </span>Greek</div>
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
