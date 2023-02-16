import Question from "../question/Question";
import "./questions.scss";

export default function Questions({questions, showAnswers, updateAnswer}) {
  return (
        <div className="questions">
            {questions.map(question => <Question key={question.id} question={question} updateAnswer={updateAnswer}/>)}
            <button className="check" onClick={showAnswers}>Check answers</button>
        </div>
    
  )
}
