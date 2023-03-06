import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
// import Landing from './components/Landing/Landing';
import Questions from './components/questions/Questions';

function App() {

  const [questions, setQuestions] = useState(()=> JSON.parse(localStorage.getItem("questions")) || [])

  const [showAnswer, setShowAnswer] = useState(false)

  function checkAnswer(){
    setShowAnswer(prevState => !prevState)
  }

  // function updateAnswer(questionId, choice){
    
  //   setQuestions(prevQuestions => {
  //     return prevQuestions.map(question => {
  //      return question.id === questionId ?
  //             {
  //               ...question,
  //               choosed: choice,
  //             } : {...question}
  //     })
  //   })

  //   console.log(questionId)
  // }

  // function getMoreQuestions(){
  //   setQuestions()
  // }

  function setQuestionsId(arr){
    return arr.map(question => ({...question, id: nanoid()}))  
  }

  //get data from api
  useEffect(()=>{
    async function getQuestions(){
     try{
      const response = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium")

      if(!response.ok){
        throw new Error(response.status)
      }

      const data = await response.json()
      const idsetData = setQuestionsId(data.results)

      localStorage.setItem("questions", JSON.stringify(idsetData))
      console.log(idsetData)

     }catch(error){
      console.error(error)
     }
    }

    getQuestions()
  }, [questions])

  return (
    <div className="App">
      <Questions questions={questions} checkAnswer={checkAnswer} answerCheck={showAnswer}/>
    </div>
  );
}

export default App;
