import React from 'react'
import { Title } from '../../UI/Title';
import { OurTeamMainBlock } from './OurTeamMainBlock';
import { OurTeamTopBlock } from './OurTeamTopBlock';

export const OurTeam = () => {
  return (
    <section 
      className="our-team"
      id='team'
    >
      <div className="container">
        <Title nameOfClass='our-team__title'>
          Our top team
        </Title>
        <p className="our-team__description" data-aos="fade-up" data-aos-duration="2000">
          Learn more about how you can save our planet's nature.
        </p>
        <OurTeamTopBlock />
        <OurTeamMainBlock />
      </div>
    </section>
  )
}