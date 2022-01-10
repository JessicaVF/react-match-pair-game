import React, { useEffect, useState, prevState } from "react";
import Cards from "../Cards/Cards";
import BoardClasses from "./CardsBoard.module.css";

// We take the photos from an API generator of user data: https://randomuser.me/api/?results=5

const CardsBoard = () => {
  const [imgGroup, setImgGroup] = useState(null);
  const [count, setCount] = useState(0);
  const [toUnreveal, setToUnreveal] = useState([]);
useEffect(() => {
    fetch("https://randomuser.me/api/?results=2")
      .then((res) => res.json())
      .then((data) => {
        
        let setOne = data.results;
        let setTwo = JSON.parse(JSON.stringify(setOne));
        let randomNumberOne = 1;
        setOne.map(card => {card.matched = false; card.revealed = false; card.uniqueId = card.email + randomNumberOne});
        console.log("setOne:", setOne);
        
        let randomNumberTwo = 2;
        setTwo.map(card => {card.matched = false; card.revealed = false; card.uniqueId = card.email + randomNumberTwo});
        console.log("setTwo:", setTwo);

        let finalSet = [...setOne, ...setTwo]
        console.log("finalSet:", finalSet);
        const newArr = shuffle(finalSet);
                
        setImgGroup(() => {
          return [...newArr];
        });
      });
  }, []);

  //mix array results Stack overflow :)
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

  const compare = (cardId, uniqueId) => {
    revealed(uniqueId);
    console.log("in compare");
    //If card1 is undefined it means is the start of a turn, so we assign the value cardId to card1
    if (card1 == undefined) {
      card1 = cardId;
    }
    // Else, we compare the value of the first card (save it in card1) with the current card (cardId)
    else {
      if (card1 == cardId) {
        console.log("they match!");
              // In one version We remove the cards that were found
              // removeCards(cardId);
        // In another version (current) we block the matched cards
        blockMatchedCards(cardId);
      }
      else{
        // If the player did'nt got a match we flip down the cards, passing their ids
        flipDown(card1, cardId);
        
      }
      card1 = undefined;
    }
  };
  const removeCards = (cardId) => {
    // let newImgGroup = [];
    // for (let card of imgGroup) {
    //   if (card.email != cardId) {
    //     newImgGroup.push(card);
    //   }
    // }
    // to do (pending): update ImgGroup in a way that we don't create a "valley effect"
        //first try (failed): setImgGroup(newImgGroup);
        // second try (failed):
        // setImgGroup(prevCards => {
        //   return prevCards.map(card =>{
        //     if (card.email != cardId){
        //       return card;
        //     }
        //   })
        // })
  };
  const revealed = (uniqueId) =>
  {
    console.log("in revealed");
    // We use the hook setImgGroup with map to update the deck of cards
    setImgGroup(prevState =>{
      return prevState.map( card =>{
        if(card.uniqueId == uniqueId){
          // the attribute "matched" will be turned into "true" for the matched cards, that will lock them in the component "cards" 
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
    console.log("in matched");
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
    // We create an array that will rewrite the state "toUnreveal"
  
    let cardsToUnreveal = [card1, cardId];
    // We use a timer so the flip down don't happen before the user can actually see the cards. We allow 3 seconds of wait
    setTimeout(() => { setToUnreveal(arr => arr = cardsToUnreveal)}, 3000);
    
    
    // To do: put this part in another function ?? or optimaze this so it become a callback of the first setTimeout

    // We clear the state to prepare it to the next round, we give this part  6 seconds of wait to avoid it start before the previous line finish
    // let clear = ["c"];
    setTimeout(() => { setToUnreveal( arr => arr = [])}, 6000);
    
    
  
  }

  //return jsx
  return (
    <>
      <div className={BoardClasses["flxrow"]}>
        {/* Game Cards */}
        {imgGroup &&
          imgGroup.map((userObj, index) => (
            <Cards
              compare={compare}
              key={index}
              img={userObj.picture.large}
              idToCompare={userObj.email}
              matched={userObj.matched}
              isToFlip={toUnreveal}
              revealed={userObj.revealed}
              uniqueId={userObj.uniqueId}
            />
          ))}
      </div>
    </>
  );
};

export default CardsBoard;
