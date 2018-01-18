import React, { Component } from 'react';
import $ from 'jquery'

const scrollTo = (name) => (e) => {
  e.preventDefault();
  const target = $(`#${name}`);

  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1000, function() {
    $(target).focus();
  });
}

const NavbarItem = ({ name, active }) => {
  const className = active === name ? 'active' : undefined;

  return (
    <a
      className={className}
      href={`#${name}`}
      onClick={scrollTo(name)} >
      {name}
    </a>
  );
};

class Navbar extends Component {
  componentDidMount() {
    const { activeSection, setActive } = this.props;

    $(window).on('scroll', function() {
      const currentPosition = $(this).scrollTop() + .25*$(this).outerHeight();
      const sections = $('.anchor');

      sections.each(function() {
        const top = $(this).parent().offset().top;
        const bottom = top + $(this).parent().outerHeight();

        if (currentPosition > top && currentPosition <= bottom) {
          if (activeSection !== this.id) setActive(this.id);
        }
      });
    });
  }

  render() {
    const { active } = this.props;

    return (
      <div className="navbar">
        <img src='/img/logo.png' alt=' ' />
        <div className='navbar-items'>
          <NavbarItem name='profile' active={active} />
          <NavbarItem name='experience' active={active} />
          <NavbarItem name='projects' active={active} />
          <NavbarItem name='awards' active={active} />
          <NavbarItem name='skills' active={active} />
          <NavbarItem name='education' active={active} />
          <NavbarItem name='contact' active={active} />
        </div>
      </div>
    );
  }
}

export default Navbar;
