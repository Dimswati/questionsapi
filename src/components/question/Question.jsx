import React from 'react'

export default function Question({question}) {


    // let choices = [correctAnswer];

    // question.incorrect_answers.array.map(choice => {
    // });

    // console.log(question)

  return (
    <div className="question">
        <h2>How would one say goodbye in Spanish?</h2>
        <div className="choices">
            <button className="choosed">Adiós</button>
            <button>Hola</button>
            <button>Au Revoir</button>
            <button>Salir</button>
        </div>
    </div>
  )
}
