import React from 'react';
import { Item } from '../../types/types';
import { LinkToSection } from '../../UI/LinkToSection';

type Props = {
  listItems: Item[];
  setMenuOpenerActive: (value: boolean) => void;
}

export const MobileMenuList: React.FC <Props> = ({listItems, setMenuOpenerActive}) => {
  return (
    <ul className="menu__list">
      {listItems.map(item => (
        <li className="menu__item" key={item.id}>
          <a 
            className="menu__link"
            href={`#${item.link}`}
            onClick={() => {
              setMenuOpenerActive(false);
            }}
          >
            {item.title}
          </a>
        </li>
      ))}
      <li className="menu__item">
        <LinkToSection 
          name="apply"
          nameOfClass='menu__item--button'
          link="#apply"
          setMenuOpenerActive={setMenuOpenerActive}
        />
      </li>
    </ul>
  )
}