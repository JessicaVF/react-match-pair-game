import React, {useEffect, useState } from "react";
import cardClasses from "./Cards.module.css";
const flower = require("../../Shared/images/matchGame/flower-bw.jpeg");

const Cards = (props) => {

  //Area for the logic, if need it

  //We log the id when we need to debug (like this we know wich card is wich before flip them)
  console.log("idToCompare :", props.idToCompare);


  /* This component show the photo to be matched (card revealed) or the generic photo (card unrevealed)
     It does with the "props", they are the arguments or attributes we pass from the cardBoard Component
     We use the props as boolean or to call functions that we change those booleans
  */
  
  //return jsx
  return (
    <div className={cardClasses.matchCardBorder}>
      {
        (props.matched) || (props.revealed)  ?
        (
          <div className={cardClasses.matchCardFront}>
            <img src={props.img} alt="" />
          </div>
        )
        :
        (
          <div
            className={cardClasses.matchCardBack}
            onClick={() => {
              props.revealFunction(props.uniqueId);
              props.compare(props.idToCompare, props.uniqueId);
              
            }}
          >
            <img src={flower} alt="black and white flower" />
          </div>
        )
      }
    </div>

  )
};

export default Cards;
