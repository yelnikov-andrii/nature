import { Slider } from './Slider';
import { placesArr } from '../../data/data';
import { Place } from './Place';

export const Places: React.FC = () => {
  
  return (
    <section
      className="places"
      id='places'
    >
      <div className="container">
        <div 
          className="places__top-block" 
          data-aos="fade-down"
          data-aos-duration="2000"
        >
        {placesArr.map(place => (
          <Place place={place} key={place.title} />
        ))}
        </div>

        <Slider />
      </div>
    </section>
  )
}