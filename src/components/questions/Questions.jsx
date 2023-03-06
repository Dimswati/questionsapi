import Question from "../question/Question";
import "./questions.scss";

export default function Questions({questions, checkAnswer, answerCheck}) {
  return (
        <div className="questions">
            {questions.map(question => <Question key={question.id} question={question} answerCheck={answerCheck}/>)}
            <button className="check" onClick={checkAnswer}>Check answers</button>
        </div>
    
  )
}
