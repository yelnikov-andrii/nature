import React from 'react';

  type Props = {
    title: string;
    children: any;
  }

export const OurTeamItem: React.FC <Props> = ({title, children}) => {
  return (
    <li className='team-main-block__list_item'>
      {children}
    <b className='team-main-block__list_item-title' data-aos="fade-up" data-aos-duration="2000">
      {title}
    </b>
    </li>
  )
}