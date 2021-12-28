import React, { useState } from "react";
import cardClasses from "./Cards.module.css";
const flower = require("../../Shared/images/matchGame/flower-bw.jpeg");

const Cards = (props) => {
  //logic

  const [cardIsFlipped, setCardIsFlipped] = useState(false);
  
  const handleCardIsFlipped = () => {
    const cardBool = !cardIsFlipped;
    setCardIsFlipped(cardBool);
    
  };

  
  //return jsx
  return (
    <div className={cardClasses.matchCardBorder}>
      
      {cardIsFlipped ? 
      (
        <div
          className={cardClasses.matchCardFront}
          onClick={() => {
            handleCardIsFlipped();
          }}>
          <img src={props.img} alt="" />
        </div>
      ) : (
        <div
          className={cardClasses.matchCardBack}

          onClick={() => {
            handleCardIsFlipped();
            props.compare(props.id)
          }}>
          <img src={flower} alt="black and white flower" />
        </div>
      )}
    </div>
  );
};

export default Cards;
