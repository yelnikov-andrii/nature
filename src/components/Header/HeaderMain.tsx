import React from 'react';
import natureNeedsYou from '../../images/natureNeedsYou.png';
import parrot from '../../images/Parrot.png';
import { HeaderForm } from './HeaderForm';

type Props = {
  members: number;
}

export const HeaderMain: React.FC <Props> = ({members}) => {
  return (
    <div className="header__main">
            <div className="header__main-info-block">
              <img 
                src={natureNeedsYou}
                alt='title: nature needs you'
                className='header__main-info-block_image'
                data-aos="fade-up"
                data-aos-duration="2000"
              />

              <p className='header__main-info-block_txt' data-aos="fade-right"
                data-aos-duration="2000">
                The scale of the challenges facing our planet can seem daunting, but we can all do something.
              </p>

              <HeaderForm />
            </div>

            <div className="header__main-image-block">
              <img
                src={parrot}
                alt='parrot'
                className='header__main-image-block_img'
                data-aos="fade-down"
                data-aos-duration="2000"
              />
              <p className='header__main-image-block_title'>
                Members
              </p>

              <p className='header__main-image-block_quantity'>
                {members}
              </p>
            </div>

          </div>
  )
}