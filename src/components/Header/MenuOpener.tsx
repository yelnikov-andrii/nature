import React from 'react';
import classNames from 'classnames';

type Props = {
  menuOpenerActive: boolean;
  setMenuOpenerActive: (value: boolean) => void;
}

export const MenuOpener: React.FC <Props> = ({menuOpenerActive, setMenuOpenerActive}) => {
  return (
    <a
      href={menuOpenerActive ? '/' : '/mobile-menu'}
      className={classNames('header__list-opener',{
        'header__list-opener--opened': menuOpenerActive,
      })}
      onClick={(event) => {
        event.preventDefault();
        setMenuOpenerActive(!menuOpenerActive);
      }}
      >
        <span className='header__list-opener_item'></span>
        <span className='header__list-opener_item'></span>
        <span className='header__list-opener_item'></span>
    </a>
  )
}