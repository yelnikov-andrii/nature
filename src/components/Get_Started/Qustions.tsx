import { questionsArr } from '../../data/data';
import { Question } from './Question';

export const Questions = () => {
  return (
    <div className="get-started__questions-block">
      {questionsArr.map(question => (
      <Question 
        question={question}
        key={question.id}
      />
      ))}
    </div>
  )
}