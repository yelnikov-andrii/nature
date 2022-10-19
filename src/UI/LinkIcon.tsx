import React from 'react';

type Props = {
  link: string;
  children: any;
}

export const LinkIcon: React.FC <Props> = ({link, children}) => {
  return (
    <li
      className="contacts__block_social-media-item"
    >
    <a
        href={link}
        target='_blank'
        rel="noreferrer"
        className="contacts__block_social-media-link"
      >
        {children}
    </a>
    </li>
  )
}