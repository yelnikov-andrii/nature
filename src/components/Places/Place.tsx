import React from 'react';
import {PlaceObj} from '../../types/types';

type Props = {
  place: PlaceObj;
}

export const Place: React.FC <Props> = ({place}) => {
  return (
    <div 
      className="places__top-block_item block-icons"
      key={place.title}
    >
    <div className="block__icons__picture-block">
    {place.img && (
      <img 
        src={place.img}
        alt={place.alt}
      />
    )}
    {place.iframe && (
      <>
      {<place.iframe />}
      </>
    )}
    </div>
      <div className="block-icons__txt-block">
        <p className="block-icons__txt-block_title">
          {place.title}
        </p>

        <b className="block-icons__txt-block_description">
          {place.description}
        </b>

        <a
          className="block-icons__txt-block_link"
          href={place.link}
          target='_blank'
          rel="noreferrer"
        >
          see more
        </a>
      </div>
    </div>
  )
}