import classNames from "classnames";
import React, { useState } from "react"

export const GetStarted = () => {
  const questionsArr = [
    {
      question: 'What can I do to protect our planet?',
      answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
      id: 0,
    },

    {
      question: 'How to save nature ecology?',
      answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
      id: 1,
    },

    {
      question: 'What is nature conservation?',
      answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
      id: 2,
    },

  ];

  const [openedAnswers, setOpenedAnswers] = useState<number[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState({});

  const handleSubmit = (name: string, email: string) => {
    setUserData({
      name,
      email,
    });
    setName('');
    setEmail('');
  }

  console.log(userData);

  const toggleAnswerToListOfOpened = (id: number) => {
    setOpenedAnswers(prev => {
      if (prev.includes(id)) {
        return prev.filter(el => el !== id)
      }

      return [...prev, id];
    })
  }

  return (
    <section className="get-started" id="apply">
      <div className="container">
        <div className="get-started__form-and-text">
        <div className="get-started__txt-block">
          <h3 className="get-started__txt-block_title">
            Get started today!
          </h3>
          <p className="get-started__txt-block_description">
            Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. 
          </p>
        </div>
        <div className="get-started__form-block">
        <h4 className="get-started__form-block_title">
          Log in
        </h4>
        <form 
          className="form get-started__form-block_form"
          onSubmit={(event) => {
            event.preventDefault()
            handleSubmit(name, email);
          }}
          >
          <input 
            className="form__input" 
            placeholder="Name"
            type='text'
            required
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input 
            className="form__input" 
            placeholder="Email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type='email'
          />
          <button className="form__button">
            Book a demo
          </button>
        </form>
        </div>
        </div>
        <div className="get-started__questions">
          <div className="get-started__contact-block">
            <h4 className="get-started__contact-block_title">
              Ready to Get started?
            </h4>
            <p className="get-started__contact-block_description">
              When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.
            </p>
            <a
              href="#contact"
              className="get-started__contact-block_button">
              Contact us
            </a>
          </div>
          <div className="get-started__questions-block">
            {questionsArr.map(question => (
                <div
                  className={classNames('get-started__questions-block_item', {
                    'get-started__questions-block_item--opened':
                    openedAnswers.includes(question.id)
                  })}
                  key={question.id}
                >
                <h4
                  className={classNames("get-started__questions-block_question", {
                    "get-started__questions-block_question--opened": openedAnswers.includes(question.id)
                  })}
                  onClick={() => {
                    toggleAnswerToListOfOpened(question.id);
                  }}
                >
                {question.question}
              </h4>
              <p
                className={classNames('get-started__questions-block_answer',{'get-started__questions-block_answer--opened': openedAnswers.includes(question.id)})}
              >
                {question.answer}
              </p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}