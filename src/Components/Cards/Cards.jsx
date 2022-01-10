import React, {useEffect, useState } from "react";
import cardClasses from "./Cards.module.css";
const flower = require("../../Shared/images/matchGame/flower-bw.jpeg");

const Cards = (props) => {
  //logic
  
  const [cardIsRevealed, setCardIsRevealed] = useState(false);
  console.log(props.id);

  
  const handleCardIsRevealed = () => {
    let cardBool = !cardIsRevealed;
    setCardIsRevealed(cardBool);
  };

  //return jsx
  return (
    <div className={cardClasses.matchCardBorder}>
      {
        (props.matched) || (cardIsRevealed && !props.isToFlip.includes(props.id)) ?
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
              handleCardIsRevealed();
              props.compare(props.id)
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
