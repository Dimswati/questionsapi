import "./choice.scss";

export default function Choice({choosedAnswer, choice: {choice, choosed, correctAns}, answerCheck}) {

  const checkAnswerFalse = {
    backgroundColor: choosed ? '#D6DBF5' : 'none',
    border: 'none'
  }

  const checkAnswerTrue = {
    backgroundColor:  choosed && correctAns ? '#94D7A2' : correctAns ? '#94D7A2' : 'none',
    border: 'none'
  }

  return (
    <button style={answerCheck ? checkAnswerTrue : checkAnswerFalse} onClick={choosedAnswer}>{choice}</button>
  )
}
