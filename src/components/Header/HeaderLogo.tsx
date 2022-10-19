import React from 'react';
import logo from '../../images/Logo.svg';

export const HeaderLogo = () => {
  return (
    <a
      className='header__logo'
      href='#home'
    >
        <img
          src={logo}
          alt='logo'
          className='header__logo-img'
        />
        <span className='header__logo-txt'>
          Rootz
        </span>
    </a>
  )
}