import React, { useState } from "react";
import QuestionList from "./QuestionList";
import './Quiz.css'
export default function Quiz() {
  const Questions = [
    {
      question: "What is npm ?",
      options: ["node package manager", "error", "All of the above"],
      answers: "node package manager",
    },
    {
      question: "What is 2+2 ? ",
      options: ["4", "8", "10", "16"],
      answers: "4",
    },
    {
      question: "Which of the following are fruits ?",
      options: ["Apple", "Cabbage", "Raddish", "Ginger"],
      answers: "Apple",
    },
  ]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const[score,setScore] = useState(0);
  const handleClick = (option) => {
    setCurrentAnswer(option)
    if(option === Questions[currentQuestionIndex].answers){
      setScore(score+1)
    }
  }
  const handleNextQuestion = ()=>{
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  }
  return (
    <div>
      {currentQuestionIndex < Questions.length ? 
      <div>
        <QuestionList
          question={Questions[currentQuestionIndex].question}
          options={Questions[currentQuestionIndex].options}
          handleClick = {handleClick} currentAnswer = {currentAnswer}/>
          <button disabled = {currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
      </div> : <div> Your Score is {score}</div> }
    </div>
  );
}
