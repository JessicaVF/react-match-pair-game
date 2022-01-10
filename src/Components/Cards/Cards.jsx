import React, {useEffect, useState } from "react";
import cardClasses from "./Cards.module.css";
const flower = require("../../Shared/images/matchGame/flower-bw.jpeg");

const Cards = (props) => {
  //logic
  console.log("uniqueId :", props.uniqueId);
  console.log("idToCompare :", props.idToCompare);
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
