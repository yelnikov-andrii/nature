import {useEffect, useState} from 'react';
import classNames from 'classnames';
import logo from '../../images/Logo.svg';
import natureNeedsYou from '../../images/natureNeedsYou.png';
import parrot from '../../images/Parrot.png';

export const Header: React.FC = () => {
  const [menuOpenerActive, setMenuOpenerActive] = useState(false);
  const [members, setMembers] = useState(29128);
  const [findPlace, setFindPlace] = useState('');
  const listItems = [
    {
      id: 0,
      title: 'Home',
      link: 'home'
    },
    {
      id: 1,
      title: 'Our mission',
      link: 'mission'
    },
    {
      id: 2,
      title: 'Places',
      link: 'places'
    },
    {
      id: 3,
      title: 'Team',
      link: 'team'
    },
  ]

  const toFind = (input: string) => {
    setFindPlace(input);
  }

  const generateMembers = () => {
    const amount = Math.random() * 3;
    if (amount < 3) {
      return Math.round(amount);
    }
    return 0;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setMembers(prev => prev + generateMembers());
    }, 50000);

    return () => clearInterval(timer);
  });
  
  return (
      <header className='header' id='home'>
        <div className="container">
          <div className="header__top">
            <a
              className='header__logo'
              href='#home'>
                <img
                  src={logo}
                  alt='logo'
                  className='header__logo-img'
                />
                <span className='header__logo-txt'>
                  Rootz
                </span>
            </a>

          <ul className='header__list list'>
            {listItems.map(item => (
              <li 
                className='list__item'
                key={item.id}>
                <a 
                href={`#${item.link}`}
                data-name={item.title}
                className='list__link'
              >
                {item.title}
              </a>
              </li>
            ))}
            {/* <li className='list__item'>
              <a 
                href='#home'
                data-name='Home'
                className='list__link'
              >
                Home
              </a>
            </li>

            <li className='list__item'>
              <a 
                href='#mission'
                className='list__link'
              >
                Our mission
              </a>
            </li>

            <li className='list__item'>
              <a 
                href='#places'
                className='list__link'
              >
                Places
              </a>
            </li>

            <li className='list__item'>
              <a 
                href='#team'
                className='list__link'
              >
                Team
              </a>
            </li> */}
          </ul>

          <a className='header__button' href='#apply'>
            Apply
          </a>

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
          </div>

          <nav className={classNames('header__mobile-menu', 'menu', {
              'header__mobile-menu--opened': menuOpenerActive,
          })}
          >
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#actual" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="#gallery" className="menu__link">
                  Our mission
                </a>
              </li>
              <li className="menu__item">
                <a href="#contact" className="menu__link">
                  Places
                </a>
              </li>

              <li className="menu__item">
                <a href="#contact" className="menu__link">
                  Team
                </a>
              </li>
              <li className="menu__item">
              <button className='menu__item--button'>
                Apply
              </button>
              </li>
            </ul>
          </nav>

          <div className="header__main">
            <div className="header__main-info-block">
              <img 
                src={natureNeedsYou}
                alt='title: nature needs you'
                className='header__main-info-block_image'
              />

              <p className='header__main-info-block_txt'>
                The scale of the challenges facing our planet can seem daunting, but we can all do something.
              </p>

              <form 
                className='header-form header__main-info-block_form'
                action={`https://www.google.com/maps/place/${findPlace}`}
                target="_blank"
                >
                <input 
                  placeholder='Find the place to help'
                  className='header-form__input'
                  value={findPlace}
                  onChange={(event) => {
                    toFind(event.target.value);
                  }}
                />
                <button
                  className='header-form__btn'>
                  search
                </button>
              </form>
            </div>

            <div className="header__main-image-block">
              <img
                src={parrot}
                alt='parrot'
                className='header__main-image-block_img'
              />
              <p className='header__main-image-block_title'>
                Members
              </p>

              <p className='header__main-image-block_quantity'>
                {members}
              </p>
            </div>

          </div>

        </div>
      </header>
  );
};