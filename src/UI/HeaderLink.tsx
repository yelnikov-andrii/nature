import React from 'react';
import { Item } from '../types/types';

type Props = {
  item: Item;
}

export const HeaderLink: React.FC <Props> = ({item}) => {
  return (
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
  )
}