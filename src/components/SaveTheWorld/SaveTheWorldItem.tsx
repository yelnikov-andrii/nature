import React from 'react';
import classNames from 'classnames';
import transparent from '../../images/slide-transparent-bg.png';

type SaveTheWorld = {
  id: number;
  img: string;
  title: string;
  description: string;
}

type Props = {
  item: SaveTheWorld;
  activeSlide: number;
}

export const SaveTheWorldItem: React.FC <Props> = ({item, activeSlide}) => {
  return (
    <div
      key={item.id} 
      className={classNames('save-world-slider__item', {
        'save-world-slider__item--active': activeSlide === item.id
      })}>
        <img 
          src={activeSlide === item.id ? transparent : item.img}
          alt={item.title}
          className={classNames('save-world-slider__item_img', {
            'save-world-slider__item_img--active': activeSlide === item.id
          })}
          />
          <p className={classNames('save-world-slider__item_title',{
            'save-world-slider__item_title--active':
            activeSlide === item.id
          })}>
            {item.title}
          </p>
          {activeSlide === item.id && (
            <p className='save-world-slider__item_description'>
              {item.description}
            </p>
          )}
          {activeSlide === item.id && (
            <img
            src={activeSlide === item.id ? item.img : ''}
            alt=''
            className='save-world-slider__item_img--top' />
          )}

    </div>
  )
}