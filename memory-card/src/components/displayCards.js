import React from "react";

const DisplayCards = (props) =>{
    return(
        <div className="cardContainer">
        {props.cardsArr.map(card => {
            return( <div className="card" key={card.id} id={card.order}><img src={card.picture} id={card.order} alt=""/> <p id={card.order}>{card.name}</p> </div>)
         })}
         </div>
    )
}

export default DisplayCards;