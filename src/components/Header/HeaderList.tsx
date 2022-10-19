import React from 'react';
import {Item} from '../../types/types';
import { HeaderLink } from '../../UI/HeaderLink';

type Props = {
  listItems: Item[];
}

export const HeaderList: React.FC <Props> = ({ listItems }) => {
  return (
    <ul className='header__list list'>
    {listItems.map(item => (
      <HeaderLink item={item} key={item.id} />
    ))}
  </ul>
  )
}