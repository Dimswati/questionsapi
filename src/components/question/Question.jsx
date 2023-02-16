export default function Question({question, updateAnswer}) {


    const {correct_answer, incorrect_answers} = question;

    const choices = [...incorrect_answers, correct_answer].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

    function choosedAnswer(event){
      
    } 

  return (
    <div className="question">
        <h2>{question.question}</h2>
        <div className="choices">
            {/* <button className="choosed">Adiós</button> */}
            {
              choices.map(choice => {
                return (
                <button onClick={choosedAnswer}>{choice}</button>
                )
              })
            }
        </div>
    </div>
  )
}
