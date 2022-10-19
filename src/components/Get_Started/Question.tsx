import React, {useState} from 'react';
import classNames from 'classnames';
import { QuestionType } from '../../types/types';

type Props = {
  question: QuestionType;
}

export const Question: React.FC <Props> = ({ question }) => {
  const [openedAnswer, setOpenedAnswer] = useState(false);

  return (
    <div
      className={classNames('get-started__questions-block_item', {
        'get-started__questions-block_item--opened':
        openedAnswer === true
      })}
      key={question.id}
    >
    <h4
      className={classNames("get-started__questions-block_question", {
        "get-started__questions-block_question--opened": openedAnswer === true
      })}
      onClick={() => {
        setOpenedAnswer(!openedAnswer)
      }}
    >
    {question.question}
  </h4>
  <p
    className={classNames('get-started__questions-block_answer',{'get-started__questions-block_answer--opened': openedAnswer === true})}
  >
    {question.answer}
  </p>
    </div>
  )
}