import {useEffect, useState} from 'react';
import classNames from 'classnames';
import { listItems } from '../../data/data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HeaderList } from './HeaderList';
import { LinkToSection } from '../../UI/LinkToSection';
import { HeaderLogo } from './HeaderLogo';
import { MenuOpener } from './MenuOpener';
import { MobileMenuList } from './MobileMenuList';
import { HeaderMain } from './HeaderMain';

export const Header: React.FC = () => {
  const [menuOpenerActive, setMenuOpenerActive] = useState(false);
  const [members, setMembers] = useState(29128);

  const generateMembers = () => {
    const amount = Math.random() * 3;
    if (amount < 3) {
      return Math.round(amount);
    }
    return 0;
  }

  useEffect(() => {
    AOS.init()
    AOS.refresh()
    const timer = setInterval(() => {
      setMembers(prev => prev + generateMembers());
    }, 50000);

    return () => clearInterval(timer);
  }, []);
  
  return (
      <header className='header' id='home'>
        <div className="container">
          <div className="header__top">
            <HeaderLogo />
            <HeaderList 
              listItems={listItems} 
            />
            <LinkToSection 
              name="apply" 
              nameOfClass='header__button'
              link="#apply"
            />
            <MenuOpener 
              menuOpenerActive={menuOpenerActive}
              setMenuOpenerActive={setMenuOpenerActive}
            />
          </div>
          <nav className={classNames('header__mobile-menu', 'menu', {
              'header__mobile-menu--opened': menuOpenerActive,
          })}
          >
            <MobileMenuList 
              listItems={listItems} 
              setMenuOpenerActive={setMenuOpenerActive}
            />
          </nav>
          <HeaderMain members={members} />
        </div>
      </header>
  );
};