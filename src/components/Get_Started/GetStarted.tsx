import { useState } from "react";
import { Title } from "../../UI/Title";
import { GetStartedForm } from "./GeStartedForm";
import { GetStartedQuestionsBlock } from "./GetStartedQuestionsBlock";

export const GetStarted = () => {
  const [userData, setUserData] = useState({});

  const handleSubmit = (name: string, email: string) => {
    setUserData({
      name,
      email,
    });
  }

  console.log(userData);

  return (
    <section className="get-started" id="apply">
      <div className="container">
        <div className="get-started__form-and-text">
        <div className="get-started__txt-block">
          <Title nameOfClass="get-started__txt-block_title">
            Get started today!
          </Title>
          <p className="get-started__txt-block_description" data-aos="fade-up" data-aos-duration="2000">
            Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. 
          </p>
        </div>
        <div className="get-started__form-block">
        <h4 className="get-started__form-block_title">
          Log in
        </h4>
        <GetStartedForm handleSubmit={handleSubmit} />
        </div>
        </div>
        <GetStartedQuestionsBlock />
      </div>
    </section>
  )
}