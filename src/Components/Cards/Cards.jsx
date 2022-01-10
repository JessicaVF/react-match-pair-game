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
              
              props.compare(props.idToCompare, props.uniqueId);
              props.revealFunction(props.uniqueId);
            }}
          >
            <img src={flower} alt="black and white flower" />
          </div>
        )
      }
    </div>

  )
//   return (
//     <div className={cardClasses.matchCardBorder}>
//     { props.matched ?
//       (
//         <div className={cardClasses.matchCardFront}>
//           <img src={props.img} alt="" />
//         </div>
//       )
//       :
//       (cardIsRevealed ? 
//         (
//           <div
//             className={cardClasses.matchCardFront}
//             onClick={() => {
//               handleCardIsRevealed();
//             }}
//           >
//             <img src={props.img} alt="" />
//           </div>
//         ) : 
//         (
//           <div
//             className={cardClasses.matchCardBack}
//             onClick={() => {
//               handleCardIsRevealed();
//               props.compare(props.id)
//             }}
//           >
//             <img src={flower} alt="black and white flower" />
//           </div>
//         )
//       )
//     }
//     </div>
//   );
};

export default Cards;
