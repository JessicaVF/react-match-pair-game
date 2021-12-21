import React, { useState } from "react";

const Cards = (props) => {
  //logic
  const [cardIsFlipped, setCardIsFlipped] = useState(false);

  return (
    <div className="match-card-border">
      {cardIsFlipped ? (
        <div className="match-card-front">I am the front</div>
      ) : (
        <div className="match-card-back">I am the back</div>
      )}
    </div>
  );
};

export default Cards;
