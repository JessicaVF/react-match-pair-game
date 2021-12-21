import React, { useState } from "react";
import cardClasses from "./Cards.module.css";
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
      {cardIsFlipped ? (
        <div className="matchCardFront">I am the front</div>
      ) : (
        <div
          className="matchCardBack"
          onClick={() => {
            handleCardIsFlipped();
          }}
        >
          I am the back
        </div>
      )}
    </div>
  );
};

export default Cards;
