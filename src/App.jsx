import { useState, useEffect } from 'react';
import './App.scss';
// import Landing from './components/Landing/Landing';
import Questions from './components/questions/Questions';

function App() {

  const [questions, setQuestions] = useState(()=> JSON.parse(localStorage.getItem("questions")) || [])

  //get data from api
  useEffect(()=>{
    async function getQuestions(){
     try{
      const response = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium")

      if(!response.ok){
        throw new Error(response.status)
      }

      const data = await response.json()
      localStorage.setItem("questions", JSON.stringify(data.results))
      console.log(data.results)

     }catch(error){
      alert(`check your internet connection ${error}`)
     }
    }

    getQuestions()
  }, [questions])

  return (
    <div className="App">
      <Questions questions={questions}/>
    </div>
  );
}

export default App;
