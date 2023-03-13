import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
import Landing from './components/Landing/Landing';
import Questions from './components/questions/Questions';

function App() {

  // set the questions state
  const [questions, setQuestions] = useState(()=> JSON.parse(localStorage.getItem("questions")) || [])

  // set the show answer state
  const [showAnswer, setShowAnswer] = useState(false)

  // set the updating questions state when user clicks on get more questions
  const [moreQuestions, setMoreQuestions] = useState({
    status: false,
    amount: 10,
    difficulty: 'medium'
  })

  function checkAnswer(){
    setShowAnswer(prevState => !prevState)
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
      // console.log(idsetData)

     }catch(error){
      console.error(error)
     }
    }

    getQuestions()
  }, [moreQuestions])

  if(moreQuestions.status){
    return <Landing/>
  }

  return (
    <div className="App">
      <Questions questions={questions} checkAnswer={checkAnswer} showAnswer={showAnswer}/>
    </div>
  );
}

export default App;
