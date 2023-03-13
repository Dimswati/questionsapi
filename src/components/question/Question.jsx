import { Children, useEffect, useState } from "react";
import Choice from "../choice/Choice";

export default function Question({question, showAnswer}) {

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

  function choosedAnswer(id){

    if (showAnswer) return

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

  // console.log(choiceArr)
  return (
    <div className="question">
        <h2>{question.question}</h2>
        <div className="choices">
            {
              showAnswer ? choices.map(choice => {
                return (
                  <Choice 
                    key={choice.id}
                    choosedAnswer={()=>{choosedAnswer(choice.id)}}
                    choice={choice}
                    styles={
                      {
                        backgroundColor: (choice.correctAns) ? '#94D7A2' : (choice.choosed) ? '#F8BCBC' : 'transparent' ,
                        border: (choice.correctAns) ? '2px solid #94D7A2' : (choice.choosed) ? '2px solid #F8BCBC' : '2px solid #4D5B9E'
                      } 
                    }
                  />
                )
              }) :
                choices.map(choice => {
                  return (
                    <Choice 
                      key={choice.id}
                      choosedAnswer={()=>{choosedAnswer(choice.id)}}
                      choice={choice}
                      styles={
                        {
                          backgroundColor: (choice.choosed) ? '#D6DBF5' : 'transparent' ,
                          border: (choice.choosed) ? '2px solid #D6DBF5' : '2px solid #4D5B9E'
                        }
                      }
                    />
                  )
                })
            }
        </div>
    </div>
  )
}
