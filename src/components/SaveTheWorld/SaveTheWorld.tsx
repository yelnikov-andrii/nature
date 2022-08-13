import classNames from 'classnames';
import { useState } from 'react';
import saveWorldOne from '../../images/saveWorld_1.png';
import saveWorldTwo from '../../images/saveWorld_2.png';
import saveWorldThree from '../../images/saveWorld_3.png';
import saveWorldFour from '../../images/saveWorld_4.png';
import saveWorldFive from '../../images/saveWorld_5.png';
import transparent from '../../images/slide-transparent-bg.png';

export const SaveTheWorld = () => {
  const saveWorldArr = [
    {
      img: saveWorldOne,
      id: 0,
      title: 'Avoid plastic',
      descripton: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
      img: saveWorldTwo,
      id: 1,
      title: 'Choose organic',
      descripton: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
      img: saveWorldThree,
      id: 2,
      title: 'Plant trees',
      descripton: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
      img: saveWorldFour,
      id: 3,
      title: 'Save water',
      descripton: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
    {
      img: saveWorldFive,
      id: 4,
      title: 'Save energy',
      descripton: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    },
  ];

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
                        {item.descripton}
                      </p>
                    )}
                    {activeSlide === item.id && (
                      <img
                      src={activeSlide === item.id ? item.img : ''}
                      alt=''
                      className='save-world-slider__item_img--top' />
                    )}

              </div>
            ))}
          </div>
          <div className='save-world-slider__buttons'>
            <button
              className='save-world-slider__buttons_button'
              onClick={() => {
              if (activeSlide === 0) {
                return;
              }
              slideLeft();
            }}>
              &#10094;
            </button>
            <span className='save-world-slider__buttons_txt'>
              {`${activeSlide + 1}`} 
            </span>
            <span className='save-world-slider__buttons_txt--blur'>
              {`/ ${saveWorldArr.length}`}
            </span>
            <button
              className='save-world-slider__buttons_button'
              onClick={() => {
              if (activeSlide === saveWorldArr.length - 1) {
                return;
              }
              slideRigth();
            }}>
              &#10095;
            </button>
          </div>
        </div>
    </section>
  )
}