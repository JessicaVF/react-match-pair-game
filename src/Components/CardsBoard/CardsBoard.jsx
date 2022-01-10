import React, { useEffect, useState, prevState } from "react";
import Cards from "../Cards/Cards";
import BoardClasses from "./CardsBoard.module.css";

// We take the photos from an API generator of user data: https://randomuser.me/api/?results=5

const CardsBoard = () => {
  const [imgGroup, setImgGroup] = useState(null);
  const [card1, setCard1] = useState(undefined);
  
useEffect(() => {
    fetch("https://randomuser.me/api/?results=2")
      .then((res) => res.json())
      .then((data) => {
        
        let setOne = data.results;
        let setTwo = JSON.parse(JSON.stringify(setOne));
        
        setOne.map(card => {card.matched = false; card.revealed = false; card.uniqueId = card.email + 1});
        setTwo.map(card => {card.matched = false; card.revealed = false; card.uniqueId = card.email + 2});
        let finalSet = [...setOne, ...setTwo];
        finalSet = shuffle(finalSet);
                
        setImgGroup(() => {
          return [...finalSet];
        });
      });
  }, []);

  //mix array results (code from Stack overflow) :)
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

  // Function compare: We have, card1, a state that will save the value of the first flipped card
  

  const compare = (idToCompare) => {
    
    //If card1 is undefined it means is the start of a turn, so we assign the value idToCompare to card1
    if (card1 == undefined) {
      setCard1(idToCompare)
    }
    // Else, we compare the value of the first card (save it in card1) with the current card (idToCompare)
    else {
      if (card1 == idToCompare) {
        console.log("they match!");
        blockMatchedCards(idToCompare);
      }
      else{
        // If the player did'nt got a match we flip down the cards, passing their ids
        flipDown(card1, idToCompare);
      }
      // We reset card1 for the next round
      setCard1(undefined);
    }
  };

  
  const reveal = (uniqueId) =>
  {
  
    // We use the hook setImgGroup with map to update the deck of cards
    setImgGroup(prevState =>{
      return prevState.map( card =>{
        if(card.uniqueId == uniqueId){
          // the attribute "revealed" will be turned into "true" for the matched cards, that will show them to the player 
          return {...card, revealed: true}
        }
        else{
          return card
        }
      })
    })
  }

  // Function that block the cards already matched. It takes the cardId (that is the id for the two matched cards)
  const blockMatchedCards = (cardId) =>
  {
    // We use the hook setImgGroup with map to update the deck of cards
    setImgGroup(prevState =>{
      return prevState.map( card =>{
        if(card.email == cardId){
          // the attribute "matched" will be turned into "true" for the matched cards, that will lock them in the component "cards" 
          return {...card, matched: true}
        }
        else{
          return card
        }
      })
    })
  }
  const flipDown = (card1, cardId) =>{
    setTimeout(() => { setImgGroup(prevState =>{
      return prevState.map( card =>{
        if(card.email == cardId || card.email == card1 ){
          // the attribute "matched" will be turned into "true" for the matched cards, that will lock them in the component "cards" 
          return {...card, revealed: false}
        }
        else{
          return card
        }
      })
    })}, 3000);
  }

  //return jsx
  return (
    <>
      <div className={BoardClasses["flxrow"]}>
        {/* Game Cards */}
        {imgGroup &&
          imgGroup.map((userObj, index) => (
            <Cards
              key={index}
              compare={compare}
              revealFunction={reveal}
              img={userObj.picture.large}
              matched={userObj.matched}
              idToCompare={userObj.email}
              revealed={userObj.revealed}
              uniqueId={userObj.uniqueId}
            />
          ))}
      </div>
    </>
  );
};

export default CardsBoard;
