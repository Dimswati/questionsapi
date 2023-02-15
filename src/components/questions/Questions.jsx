import Question from "../question/Question";
import "./questions.scss";

export default function Questions({questions}) {
  return (
        <div className="questions">
            {questions.map(question => <Question question={question}/>)}
            <button className="check">Check answers</button>
        </div>
    
  )
}
