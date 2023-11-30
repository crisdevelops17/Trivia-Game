

function Quiz(props) {




  return (

    <div>


      <h1 className="quiz--h1">{props.questions}</h1>
      <div className="cards--buttons-div"  >

        {props.buttons.map(item =>
          <button className="cards--buttons" name={item.id} onClick={props.handleClick} value={item.isHeld}
          style={item.myColor === false ? ({ backgroundColor: item.isHeld === false ? props.styles1 : props.styles2 }) : 
          ({ backgroundColor: item.isTruth === true ? props.styles2 : item.isTruth === "change" ? props.styles1 : "#e1dad2" }) }>
          
            {item.use}
          </button>
        )}

      </div>
    </div>



  )

}
export default Quiz