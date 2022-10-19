import classNames from 'classnames';
import React from 'react';

type Props = {
  name: string;
  nameOfClass: string;
  setMenuOpenerActive?: (value: boolean) => void;
  link: string;
}

export const LinkToSection: React.FC <Props> = ({name, nameOfClass, setMenuOpenerActive, link}) => {
  return (
    <a 
      className={classNames(nameOfClass, 'linkToSection')}
      href={link}
      onClick={() => {
        if (setMenuOpenerActive) {
          setMenuOpenerActive(false);
        }
      }}
    >
      {name[0].toUpperCase() + name.slice(1)}
    </a>
  )
}