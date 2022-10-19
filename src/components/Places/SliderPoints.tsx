import React from 'react';
import classNames from 'classnames';

type Props = {
  activeSlide: number;
}

export const SLiderPoints: React.FC <Props> = ({activeSlide}) => {
  return (
    <div className='slider-block__points'>
        <span 
          className={classNames('slider-block__points_item',
            {'slider-block__points_item--active': activeSlide === 0})}>
        </span>

        <span 
          className={classNames('slider-block__points_item',
            {'slider-block__points_item--active': activeSlide === 1})}>
        </span>

        <span 
          className={classNames('slider-block__points_item',
            {'slider-block__points_item--active': activeSlide === 2})}>
        </span>
      </div>
  )
}