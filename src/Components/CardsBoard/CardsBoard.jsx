import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import BoardClasses from "./CardsBoard.module.css";



// We take the photos from an API generator of user data: https://randomuser.me/api/?results=5

const CardsBoard = () => {
  const [imgGroup, setImgGroup] = useState(null);
  const [test, setTest] = useState("");
  
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
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
  let toFlipDown;
  
  const compare = (cardId) => { 
    
    if(card1 == undefined){
      card1 = cardId;
    }
    else{
      if (card1 == cardId){
        console.log("they match!");
        // to do : remove matched cards
      }
      // to do : flip down cards
      setTest(cardId, card1);
      card1 = undefined;
    }
    
  }

  //return jsx
  return (
    <>
      <div className={BoardClasses["flxrow"]}>
        {/* Game Cards */}
        {imgGroup &&
          imgGroup.map((userObj) => 
            <Cards compare={compare} key={userObj.email} img={userObj.picture.large} id={userObj.email} test={test} />
          
          )}
      </div>
      
    </>
  );
};

export default CardsBoard;
