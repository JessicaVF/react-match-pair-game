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

  // Function compare: We have, card1, a external variable that will save the value of the first flipped card
  let card1;
  let test ="";
    
  const compare = (cardId) => { 
    
    //If card1 is undefined it means is the start of a turn, so we assign the value cardId to card1
    if(card1 == undefined){
      card1 = cardId;
      test =cardId;
    }
    // Else, we compare the value of the first card (save it in card1) with the current card (cardId)
    else{
      if (card1 == cardId){
        console.log("they match!");
        // We remove the cards that were found
        removeCards(cardId);
      }
      // to do : flip down cards
        card1 = undefined;
    }
    
  }
const removeCards =(cardId) => {
  
  
  let newImgGroup = [];
  for(let card of imgGroup){
    let arrayForModification = imgGroup;
    if(card.email != cardId){
    newImgGroup.push(arrayForModification.splice(imgGroup.indexOf(card), 1));
    }
  }
  // setImgGroup(newImgGroup);
  
// imgGroup.filter(userObj => userObj.email != test).map( filteredObj => <Cards compare={compare} key={userObj.email} img={userObj.picture.large} id={userObj.email} />)

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
