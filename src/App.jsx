import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
// import Landing from './components/Landing/Landing';
import Questions from './components/questions/Questions';

function App() {

  // const [answeredQuestions, setAnsweredQuestions] = useState([])

  const [questions, setQuestions] = useState(()=> JSON.parse(localStorage.getItem("questions")) || [])

  function updateAnswer(questionId, {choice}){
    // const [question] = questions.filter(question => question.id === questionId)

    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
       return question.id === questionId ?
              {
                ...question,
                choosed: choice,
              } : {...question}
      })
    })

    console.log(questions)
  }

  // function hasPassed(){
    
  // }

  function showAnswers(){

  }

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
      <Questions questions={questions} showAnswers={showAnswers} updateAnswer={updateAnswer}/>
    </div>
  );
}

export default App;
