import { useState } from 'react';
import { saveWorldArr } from '../../data/data';
import { LittleArrow } from '../../UI/LittleArrow';
import { SaveTheWorldItem } from './SaveTheWorldItem';

export const SaveTheWorld = () => {
  
  let itemWidth = 276;
  let gap = 70;
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    itemWidth = 246;
    gap = 30;
  }

  const [offset, setOffset] = useState(-((itemWidth + gap) * 2) + (windowWidth / 2) - itemWidth / 2);
  const [activeSlide, setActiveSlide] = useState(2);

  const slideLeft = () => {
    setOffset(prev => prev + (itemWidth + gap));
    setActiveSlide(prev => prev - 1);
  }

  const slideRigth = () => {
    setOffset(prev => prev - (itemWidth + gap));
    setActiveSlide(prev => prev + 1);
  }

  return (
    <section className="save-the-world" id='mission'>
        <div className="save-world-slider">
          <div 
            className="save-world-slider__container"
            style={{transform: `translateX(${offset}px)`}}>
            {saveWorldArr.map(item => (
              <SaveTheWorldItem item={item} activeSlide={activeSlide} key={item.id} />
            ))}
          </div>
          <div className='save-world-slider__buttons'>
            <LittleArrow 
              activeSlide={activeSlide} 
              direction="left" 
              arrLength={saveWorldArr.length}
              slide={slideLeft}
            >
              &#10094;
            </LittleArrow>
            <span className='save-world-slider__buttons_txt'>
              {`${activeSlide + 1}`} 
            </span>
            <span className='save-world-slider__buttons_txt--blur'>
              {`/ ${saveWorldArr.length}`}
            </span>
            <LittleArrow 
              activeSlide={activeSlide} 
              direction="right" 
              arrLength={saveWorldArr.length}
              slide={slideRigth}
            >
              &#10095;
            </LittleArrow>
          </div>
        </div>
    </section>
  )
}