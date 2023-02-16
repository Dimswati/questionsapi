import { useState } from "react";
import Choice from "../choice/Choice";

export default function Question({question, updateAnswer}) {

  const {correct_answer, incorrect_answers} = question

  const choiceArr = [...incorrect_answers, correct_answer].map((element, index) => {
    return {
      id: index + 1,
      choice: element,
      choosed: false
    }
  })

  const [choices, setChoices] = useState(choiceArr)

  function choosedAnswer(id){

    setChoices(prevChoices => {
      return prevChoices.map(choice => {
        if(choice.id !== id){
          return {...choice, choosed: false}
        }else{
          return {...choice, choosed: true}
        }
      })
    })

    updateAnswer(question.id, ...choices.filter(choice => choice.id === id))
  }


  // map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

  return (
    <div className="question">
        <h2>{question.question}</h2>
        <div className="choices">
            {/* <button className="choosed">Adiós</button> */}
            {
              choices.map((choice) => {
                return (
                  <Choice key={choice.id} choosedAnswer={()=>{choosedAnswer(choice.id)}} choice={choice}/>
                )
              })
            }
        </div>
    </div>
  )
}
