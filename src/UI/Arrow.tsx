import React from 'react';
import classNames from 'classnames';
import { sliderBlockArr } from '../data/data';

type Props = {
  activeSlide: number;
  slide: () => void;
  direction: string;
}

export const Arrow: React.FC <Props> = ({activeSlide, slide, direction}) => {
  return (
    <button 
      className={classNames('slider-block__arrow', {
        'slider-block__arrow--disabled': (activeSlide === 0 && direction === 'left') || (direction === 'right' && activeSlide === sliderBlockArr.length - 1),
        })}
      onClick={() => {
        switch(direction) {
          case 'left':
            if (activeSlide !== 0) {
              slide();
            }
            return;

          case 'right':
            if (activeSlide !== sliderBlockArr.length - 1) {
              slide();
            }
            return;

          default:
            return;
        }
      }}
    >
    </button>
  )
}