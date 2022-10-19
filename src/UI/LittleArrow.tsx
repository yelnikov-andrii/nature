import React from 'react';

type Props = {
  activeSlide: number;
  direction: string;
  slide: () => void;
  arrLength: number
  children: string;
}

export const LittleArrow: React.FC <Props> = ({children, activeSlide, direction, slide, arrLength}) => {
  return (
    <button
      className='save-world-slider__buttons_button'
      onClick={() => {
      switch(direction) {
        case 'left':
          if (activeSlide !== 0) {
            slide();
          }
          return;
        case 'right':
          if (activeSlide !== arrLength - 1) {
            slide();
          }
          return;
        default:
          return;
      }
    }}>
      {children}
    </button>
  )
}