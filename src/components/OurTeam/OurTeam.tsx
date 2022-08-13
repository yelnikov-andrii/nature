import personFirst from '../../images/person1.png';
import personSecond from '../../images/person2.png';
import personThird from '../../images/person3.png';

export const OurTeam = () => {
  return (
    <section 
      className="our-team"
      id='team'
    >
      <div className="container">
        <h3 className="our-team__title">
          Our top team
        </h3>

        <p className="our-team__description">
          Learn more about how you can save our planet's nature.
        </p>

        <div className="our-team__block-top">
          <div className="our-team__block-top_item">
            <img 
              src={personFirst}
              className="our-team__block-top_item-img"
              alt='person'
              />
          </div>

          <div className="our-team__block-top_item">
            <img 
              src={personSecond}
              className="our-team__block-top_item-img"
              alt='person'
              />
          </div>

          <div className="our-team__block-top_item">
            <img 
              src={personThird}
              className="our-team__block-top_item-img"
              alt='person'
              />
          </div>
        </div>

        <div className="our-team__block-main team-main-block">
          <h2 className='team-main-block__title'>
            The scale of the challenges facing our planet can seem daunting, but we can all do something.
          </h2>

          <ul className='team-main-block__list'>
            <li className='team-main-block__list_item'>
              <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.1396 36.12C15.8896 36.12 11.2486 33.432 8.53965 29.4C8.60265 25.2 16.9396 22.89 21.1396 22.89C25.3396 22.89 33.6766 25.2 33.7396 29.4C32.3513 31.4673 30.4759 33.1614 28.2787 34.3333C26.0815 35.5051 23.6298 36.1187 21.1396 36.12ZM21.1396 6.3C22.8105 6.3 24.4129 6.96375 25.5944 8.14523C26.7759 9.32671 27.4396 10.9291 27.4396 12.6C27.4396 14.2709 26.7759 15.8733 25.5944 17.0548C24.4129 18.2363 22.8105 18.9 21.1396 18.9C19.4688 18.9 17.8664 18.2363 16.6849 17.0548C15.5034 15.8733 14.8396 14.2709 14.8396 12.6C14.8396 10.9291 15.5034 9.32671 16.6849 8.14523C17.8664 6.96375 19.4688 6.3 21.1396 6.3ZM21.1396 0C18.3819 0 15.6511 0.543181 13.1033 1.59853C10.5555 2.65388 8.24044 4.20073 6.29041 6.15076C2.35214 10.089 0.139648 15.4305 0.139648 21C0.139648 26.5695 2.35214 31.911 6.29041 35.8492C8.24044 37.7993 10.5555 39.3461 13.1033 40.4015C15.6511 41.4568 18.3819 42 21.1396 42C26.7092 42 32.0506 39.7875 35.9889 35.8492C39.9272 31.911 42.1396 26.5695 42.1396 21C42.1396 9.387 32.6896 0 21.1396 0Z" fill="black"/>
              </svg>
            <b className='team-main-block__list_item-title'>
              Assets value COMPOSer
            </b>
            </li>

            <li className='team-main-block__list_item'>
              <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.1396 0.000244141H22.1396C32.0656 0.000244141 40.1396 8.07853 40.1396 18.0009V20.001H20.1396V0.000244141ZM16.1396 4.12134V24H36.0156L35.9837 24.2441C34.8616 33.2264 27.1916 39.9986 18.1396 39.9986C8.21365 39.9986 0.139648 31.9243 0.139648 21.998C0.139648 12.9477 6.91165 5.27538 15.8916 4.15334L16.1396 4.12134Z" fill="black"/>
              </svg>

            <b className='team-main-block__list_item-title'>
              GRAPH BUDGET ANALYZER
            </b>
            </li>

            <li className='team-main-block__list_item'>
            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.8006 22.34C31.2989 23.8426 32.1403 25.878 32.1403 28C32.1403 30.122 31.2989 32.1574 29.8006 33.66C28.298 35.1583 26.2626 35.9997 24.1406 35.9997C22.0186 35.9997 19.9832 35.1583 18.4806 33.66L29.8006 22.34V22.34ZM12.1406 4H36.1406C37.2015 4 38.2189 4.42143 38.9691 5.17157C39.7192 5.92172 40.1406 6.93913 40.1406 8V40C40.1406 41.0609 39.7192 42.0783 38.9691 42.8284C38.2189 43.5786 37.2015 44 36.1406 44H12.1406C11.0798 44 10.0623 43.5786 9.3122 42.8284C8.56205 42.0783 8.14063 41.0609 8.14062 40V8C8.14062 6.93913 8.56205 5.92172 9.3122 5.17157C10.0623 4.42143 11.0798 4 12.1406 4V4ZM14.1406 8C13.6102 8 13.1015 8.21071 12.7264 8.58579C12.3513 8.96086 12.1406 9.46957 12.1406 10C12.1406 10.5304 12.3513 11.0391 12.7264 11.4142C13.1015 11.7893 13.6102 12 14.1406 12C14.6711 12 15.1798 11.7893 15.5548 11.4142C15.9299 11.0391 16.1406 10.5304 16.1406 10C16.1406 9.46957 15.9299 8.96086 15.5548 8.58579C15.1798 8.21071 14.6711 8 14.1406 8V8ZM20.1406 8C19.6102 8 19.1015 8.21071 18.7264 8.58579C18.3513 8.96086 18.1406 9.46957 18.1406 10C18.1406 10.5304 18.3513 11.0391 18.7264 11.4142C19.1015 11.7893 19.6102 12 20.1406 12C20.6711 12 21.1798 11.7893 21.5548 11.4142C21.9299 11.0391 22.1406 10.5304 22.1406 10C22.1406 9.46957 21.9299 8.96086 21.5548 8.58579C21.1798 8.21071 20.6711 8 20.1406 8V8ZM24.1406 16C20.958 16 17.9058 17.2643 15.6553 19.5147C13.4049 21.7652 12.1406 24.8174 12.1406 28C12.1406 31.1826 13.4049 34.2348 15.6553 36.4853C17.9058 38.7357 20.958 40 24.1406 40C27.3232 40 30.3755 38.7357 32.6259 36.4853C34.8763 34.2348 36.1406 31.1826 36.1406 28C36.1406 24.8174 34.8763 21.7652 32.6259 19.5147C30.3755 17.2643 27.3232 16 24.1406 16V16Z" fill="black"/>
             </svg>

            <b className='team-main-block__list_item-title'>
              MONTHLY AVG. REVENUE
            </b>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}