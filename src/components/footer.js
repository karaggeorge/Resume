import React, { Component } from 'react';
import { Icon, SocialIcon } from './profile';
import $ from 'jquery';

class Footer extends Component {
  backToTop() {
    $('html, body').animate({ scrollTop: 0 }, 1500);
  }

  render() {
    return (
      <footer>
        <a id='back-to-top' onClick={this.backToTop}><Icon code='caret-up fa-2x'/></a>
        <div className='info'>
          <ul>
            <li><a href='mailto:gkaragkiaouris2'><Icon code='envelope'/>gkaragkiaouris2@gmail.com</a></li>
            <li><a href='gkaragkiaouris.com'><Icon code='globe'/>gkaragkiaouris.com</a></li>
            <li><a href='tel:+12039097497'><Icon code='phone'/>+1 203-909-7497</a></li>
            <li><a><Icon code='map-marker'/>275 Mt Carmel Ave, Hamden, CT</a></li>
          </ul>
        </div>
        <div className='copyright'>
        </div>
        <div className='social'>
          <SocialIcon target='https://www.linkedin.com/in/gkaragkiaouris/' code='linkedin fa-2x' />
          <SocialIcon target='https://github.com/karaggeorge' code='github fa-2x' />
          <SocialIcon target='https://www.facebook.com/karagkiaouris.george' code='facebook fa-2x' />
          <SocialIcon target='https://www.instagram.com/karaggeorge37/' code='instagram fa-2x' />
        </div>
      </footer>
    );
  }
}

export default Footer;
