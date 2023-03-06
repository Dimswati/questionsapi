import { useState } from "react";
import Choice from "../choice/Choice";

export default function Question({question, answerCheck}) {

  const {correct_answer, incorrect_answers} = question

  //set choices for questions
  const choiceArr = [...incorrect_answers, correct_answer].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value).map((element, index) => {
      return {
        id: index + 1,
        choice: element,
        choosed: false,
        correctAns: element !== correct_answer ? false : true
      }
  })

  const [choices, setChoices] = useState(choiceArr)

  function choosedAnswer(event ,id){

    if (answerCheck) return

    setChoices(prevChoices => {
      return prevChoices.map(choice => {
        if(choice.id !== id){
          return {...choice, choosed: false}
        }else{
          return {...choice, choosed: true}
        }
      })
    })

  }

  // function showAnswer(){

  // }

  console.log(choiceArr)
  return (
    <div className="question">
        <h2>{question.question}</h2>
        <div className="choices">
            {/* <button className="choosed">Adiós</button> */}
            {
              choices.map((choice) => {
                return (
                  <Choice key={choice.id} choosedAnswer={(event)=>{choosedAnswer(event, choice.id)}} choice={choice} answerCheck={answerCheck}/>
                )
              })
            }
        </div>
    </div>
  )
}
