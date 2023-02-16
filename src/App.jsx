import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
// import Landing from './components/Landing/Landing';
import Questions from './components/questions/Questions';

function App() {

  const [questions, setQuestions] = useState(()=> JSON.parse(localStorage.getItem("questions")) || [])

  const answeredQuestions =  []

  function updateAnswer(questionId, choosedAnswer){
    
  }

  function hasPassed(){
    
  }

  function showAnswers(){
    if(answeredQuestions.length === questions.length){
      console.log("answered all questions")
    }
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
      alert(`check your internet connection ${error}`)
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
