

function Menu (props) {
    return (
  <div className="parent">
  <div className="app">
  <h1> Quizzical </h1>
    <p>Fun trivia game!</p>
    
    <button className="app--button" onClick={props.changeTruth}>Start Quiz</button>
  </div>
  </div>
    )
}
export default Menu