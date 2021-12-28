import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import BoardClasses from "./CardsBoard.module.css";



// We take the photos from an API generator of user data: https://randomuser.me/api/?results=5

const CardsBoard = () => {
  const [imgGroup, setImgGroup] = useState(null);
  
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=2")
      .then((res) => res.json())
      .then((data) => {
        
        setImgGroup(shuffle([...data.results, ...data.results ]));
        
      });
  }, []);

  // Stack overflow :)
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // Function compare: We have a external variable that will save the value of the first flipped card
  let card1;
    
  const compare = (cardId) => { 
    
    if(card1 == undefined){
      card1 = cardId;
    }
    else{
      if (card1 == cardId){
        console.log("they match!");
        
        removeCards(cardId);
      }
      // to do : flip down cards
        card1 = undefined;
    }
    
  }
const removeCards =(cardId) => {
  
  for (let card of imgGroup){
    console.log("cardId", cardId);
    console.log("cardEMAIL", card.email);
    if(card.email == cardId){
      console.log("here");
      // setImgGroup(imgGroup.splice(imgGroup.indexOf(card), 1));
    }
  } 
  
  
}
  //return jsx
  return (
    <>
      <div className={BoardClasses["flxrow"]}>
        {/* Game Cards */}
        {imgGroup &&
          imgGroup.map((userObj) => 
            <Cards compare={compare} key={userObj.email} img={userObj.picture.large} id={userObj.email} />
          
          )}
      </div>
      
    </>
  );
};

export default CardsBoard;
