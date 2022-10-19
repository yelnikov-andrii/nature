import { Title } from '../../UI/Title';
import { LinkToSection } from '../../UI/LinkToSection';
import { Questions } from './Qustions';

export const GetStartedQuestionsBlock = () => {

  return (
    <div className="get-started__questions">
      <div className="get-started__contact-block">
        <Title nameOfClass='get-started__contact-block_title'>
          Ready to Get started?
        </Title>
        <p className="get-started__contact-block_description" data-aos="fade-up" data-aos-duration="2000">
          When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.
        </p>
        <LinkToSection 
          name="contact us" 
          nameOfClass='get-started__contact-block_button'
          link="#contact"
        />
      </div>
      <Questions />
    </div>
  )
}