import React from 'react';
import { ourTeamArr } from '../../data/data';

export const OurTeamTopBlock = () => {
  return (
    <div className="our-team__block-top">
      {ourTeamArr.map(item => (
        <div className="our-team__block-top_item" key={item}>
        <img 
          src={item}
          className="our-team__block-top_item-img"
          alt='person'
          />
      </div>
      ))}
        </div>
  )
}