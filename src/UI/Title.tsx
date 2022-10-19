import classNames from 'classnames';
import React from 'react';

type Props = {
  children: string;
  nameOfClass: string;
}

export const Title: React.FC <Props> = ({children, nameOfClass}) => {
  return (
    <h2 className={classNames('title', nameOfClass)} data-aos="flip-up">
          {children}
        </h2>
  )
}