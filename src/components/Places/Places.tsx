import { Slider } from './Slider';
import placesTopPictureOne from '../../images/places_top_block_img_1.png';
import placesTopPictureThree from '../../images/places_top_block_img_3.png';

export const Places: React.FC = () => {
  return (
    <section
      className="places"
      id='places'
    >
        <div className="container">
          <div className="places__top-block" data-aos="fade-down"
                data-aos-duration="2000">

          <div 
            className="places__top-block_item block-icons"
          >
              <div className="block__icons__picture-block">
              <img 
                src={placesTopPictureOne}
                alt='woman'
              />
              </div>

              <div className="block-icons__txt-block">
                <p className="block-icons__txt-block_title">
                  # Stories
                </p>

                <b className="block-icons__txt-block_description">
                  Travel In Japan: The True Experience
                </b>

                <a
                  className="block-icons__txt-block_link"
                  href="https://www.japan.travel"
                  target='_blank'
                  rel="noreferrer"
                >
                  see more
                </a>
              </div>
          </div>

          <div 
            className="places__top-block_item block-icons"
          >
          <div className="block__icons__picture-block">
            <iframe 
              src="https://www.youtube.com/embed/0Hz45zW_US8" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
          </div>
            <div className="block-icons__txt-block">
              <p className="block-icons__txt-block_title">
                # VideoTutor
              </p>
              <b className="block-icons__txt-block_description">
                Helping Wild Turtles
              </b>
              <a
                className="block-icons__txt-block_link"
                href="https://saveturtles.org"
                target='_blank'
                rel="noreferrer"
              >
                see more
              </a>
            </div>
          </div>

          <div
            className="places__top-block_item block-icons"
          >
            <div className="block__icons__picture-block">
            <img
              src={placesTopPictureThree}
              alt='bridge'
            />
            </div>

            <div className="block-icons__txt-block">
              <p className="block-icons__txt-block_title">
                # Photostory
              </p>

              <b className="block-icons__txt-block_description">
                Threats of Indusrial World 
              </b>
              <a
                className="block-icons__txt-block_link"
                href="https://subscription.packtpub.com"
                target='_blank'
                rel="noreferrer"
              >
                see more
              </a>
            </div>
          </div>
          </div>

          <Slider />
        </div>

    </section>
  )
}