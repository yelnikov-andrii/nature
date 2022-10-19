import React from 'react';
import picture from '../../images/Pic.png';
import { SliderItem } from '../../types/types';
import { Title } from '../../UI/Title';

type Props = {
  item: SliderItem;
}

export const SLiderBlock: React.FC <Props> = ({item}) => {
  return (
    <div 
      className='slider-block__item'
      key={item.id}
      style={{
        backgroundColor: item.color,
      }}
    >
      <div className="slider-block__item_txt">
        <Title nameOfClass='slider-block__item-title'>
          {item.title}
        </Title>

        <p className='slider-block__item-description' data-aos="flip-up">
          {item.description}
        </p>
      </div>

      <div className="slider-block__item_element">
        <img 
          src={picture}
          className='slider-block__item_element-img'
          alt=''
          />
      </div>
    </div>
  )
}