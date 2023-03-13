import Question from "../question/Question";
import "./questions.scss";

export default function Questions({questions, checkAnswer, showAnswer}) {
  return (
        <div className="questions">
            {questions.map(question => <Question key={question.id} question={question} showAnswer={showAnswer}/>)}
            <button className="check" onClick={checkAnswer}>Check answers</button>
        </div>
    
  )
}
