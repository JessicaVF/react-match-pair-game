import React, { useEffect, useState, prevState } from "react";
import Cards from "../Cards/Cards";
import BoardClasses from "./CardsBoard.module.css";

// We take the photos from an API generator of user data: https://randomuser.me/api/?results=5

const CardsBoard = () => {
  const [imgGroup, setImgGroup] = useState(null);
  const [count, setCount] = useState(0);
  const [toUnreveal, setToUnreveal] = useState(["a", "b"]);
  console.log("state of toUnreveal:", toUnreveal);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((res) => res.json())
      .then((data) => {
        // We add the propierty "matched" to the cards, they all start in "false"
        data.results.map(card => card.matched = false);
        setImgGroup(() => {
          const newArr = shuffle([...data.results, ...data.results]);
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

  const compare = (cardId) => {
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
        flipDown(card1, cardId);
        
      }
      card1 = undefined;
      // setToUnreveal(arr => [...arr, ...[]])
      
      
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
  const blockMatchedCards = (cardId) =>{
    setImgGroup(prevState =>{
      return prevState.map( card =>{
        if(card.email == cardId){
          return {...card, matched: true}
        }
        else{
          return card
        }
      })
    })
  }
  const flipDown = (card1, cardId) =>{
    
    let cardsToUnreveal = [card1, cardId];
    setTimeout(() => { setToUnreveal(arr => [...arr = cardsToUnreveal])}, 3000);
    let t = ["c", "d"];
    setToUnreveal(arr => arr = t);
    setTimeout(() => { setToUnreveal( arr => arr = t)}, 6000);
    console.log("state of toUnreveal when we exit to flip down:", toUnreveal);
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
              id={userObj.email}
              matched={userObj.matched}
              isToFlip={toUnreveal}
            />
          ))}
      </div>
    </>
  );
};

export default CardsBoard;
