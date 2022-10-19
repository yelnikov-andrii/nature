import { useEffect, useState } from 'react';
import { sliderBlockArr } from '../../data/data';
import { Arrow } from '../../UI/Arrow';
import { SLiderBlock } from './SliderBlock';
import { SLiderPoints } from './SliderPoints';

export const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const[pageWidth, setPageWidth] = useState(992);
  const[gap, setGap] = useState(30);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 1168 && window.innerWidth > 768) {
      setPageWidth(680);
      setGap(20);
    };
  
    if (window.innerWidth <= 768 ) {
      setPageWidth(320);
      setGap(20);
    }
  }, [activeSlide])

  const prevSlide = () => {
    setActiveSlide(prev => prev !== 0 ? prev - 1 : prev);
    setOffset(prev => prev + (pageWidth + gap));
  }

  const nextSlide = () => {
    setActiveSlide(prev => prev !== sliderBlockArr.length - 1 ? prev + 1 : prev);
    setOffset(prev => prev - (pageWidth + gap));
  }

  return (
    <div className="slider-block">
      <Arrow 
        activeSlide={activeSlide} 
        slide={prevSlide} 
        direction="left"
      />

      <div className='slider-block__window'>
        <div
          className="slider-block__items-container"
          style={{transform: `translateX(${offset}px)`}}
        >
          {sliderBlockArr.map(item => (
            <SLiderBlock item={item} key={item.id} />
          ))}
        </div>
        <SLiderPoints activeSlide={activeSlide} />
      </div>
      <Arrow 
        activeSlide={activeSlide}
        slide={nextSlide}
        direction="right"
      />
    </div>
  )
}