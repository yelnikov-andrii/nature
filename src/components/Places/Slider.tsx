import classNames from 'classnames';
import { useEffect, useState } from 'react';
import picture from '../../images/Pic.png';

export const Slider = () => {
  const sliderBlockArr = [
    {
      title: 'Travel In Japan: The True Experience',
      description: 'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
      id: 0,
      color: '#FFBD9E',
    },
    {
      title: 'Helping Wild Turtles To Travel In Japan',
      description: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.',
      id: 1,
      color: '#FFADAD',
    },
    {
      title: 'Threats of Modern Indusrial World',
      description: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper.',
      id: 2,
      color: '#CBCBFF',
      
    },
  ];

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
      <button 
          className={classNames('slider-block__arrow', {'slider-block__arrow--disabled': activeSlide === 0})}
          onClick={() => {
            if (activeSlide === 0) {
              return;
            }
            prevSlide();
          }}
        >
      </button>

      <div className='slider-block__window'>
        <div
          className="slider-block__items-container"
          style={{transform: `translateX(${offset}px)`}}
        >
          {sliderBlockArr.map(item => (
            <div 
              className='slider-block__item'
              key={item.id}
              style={{
                backgroundColor: item.color,
              }}
            >
              <div className="slider-block__item_txt">
                <h2 className='slider-block__item-title'>
                  {item.title}
                </h2>

                <p className='slider-block__item-description'>
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
          ))}
        </div>
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
      </div>

      <button 
          className={classNames('slider-block__arrow', 
            {'slider-block__arrow--disabled': activeSlide === sliderBlockArr.length - 1})}
          onClick={() => {
            if (activeSlide === sliderBlockArr.length - 1) {
              return;
            }
            nextSlide();
          }}
        >
      </button>
    </div>
  )
}