
import React from 'react'
import Quiz from './components/Quiz';
import Menu from './components/Menu';
import { v4 as uuidv4} from "uuid"



function App() {
  
  
  const [quiz, setQuiz] = React.useState(true)
  

  React.useEffect(()=> {
    
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy")
    
    

    .then(res => res.json())
    .then((data) =>
    setState(data.results.map(item => ({
      myQuestions: item.question,
      buttons: item.incorrect_answers.concat(item.correct_answer).sort(() => 0.5 - Math.random())
      .map(item => ({use:item, isHeld:false, isTruth:"no",myColor:false, id:uuidv4()})),
      correct: item.correct_answer,
      incorrect: item.incorrect_answers,
      stylesColor1: "#e1dad2",
      stylesColor2: "#f0ffff",
      
    }))))
    
  } , [])

 

  function changeTruth () {
    setQuiz(prevState => prevState = false)
  }
const [state , setState] = React.useState ([])


console.log(state)



const getGame = state.map(item => <Quiz
  buttons ={item.buttons.map(item => item)}
  handleClick = {(e) => handleClick(e.target.name)}
  questions ={item.myQuestions}
  styles1= {item.stylesColor1}
  styles2 = {item.stylesColor2}
  myColor ={item.buttons.map(item =>item.myColor)}
  
  /> )


  function handleClick(e) {
    setState(prevState => prevState.map(item => ({ 
        ...item,
        buttons: item.buttons.map(btn => 
          btn.id === e ?  {...btn, isTruth :"wow"} : btn),
    })))
    setState(prevState => prevState.map(item => ({ 
      ...item,
      buttons: item.buttons.map(btn => 
        btn.id === e ?  {...btn, isHeld :!btn.isHeld} : btn),
  })))
    }
    
    

  function handleChange () {

    setState(prevState => prevState.map(item =>  ({
      ...item, buttons: item.buttons.map(btn => 
        btn.myColor === false ? {...btn , myColor: true} : btn)
      })))

    setState(prevState => prevState.map(item => ({
      ...item, buttons: item.buttons.map(btn =>
        btn.use === item.correct ? {...btn, isTruth:true} : 
        btn.isTruth ==="wow" ? {...btn, isTruth:"change"} : {...btn, isHeld:"lol"})
    })))
    

  }

  function changeColor () {
    setState(prevState => prevState.map(item => ({
    ...item, stylesColor1: "#ED9191", stylesColor2:"#D6FFD6"
  })))  
}


  if (quiz === true) {
  return(
  <Menu 
  changeTruth ={changeTruth}
  />
  )}

  else if(quiz === false) {
      return (
        <div className="parent--quiz">
        <div className="quiz">
          <h1>Quizzical</h1>
          {getGame}
          <div>
          </div>
          <button onClick={() =>{handleChange(); changeColor();}}>Check answers</button>
      </div>

          
      </div>
      
      )
  }

}

export default App

