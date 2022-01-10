import React, { useEffect, useState, prevState } from "react";
import Cards from "../Cards/Cards";
import BoardClasses from "./CardsBoard.module.css";

// We take the photos from an API generator of user data: https://randomuser.me/api/?results=5

const CardsBoard = () => {

  /* We start setting some hooks:
  
    const [example, setExample] = useState(null);

  More or less: this hook thing can be understood like variable, and a special function
    to modify that variable instantly
    
  Note: useState() does not has to be "null", can be "undefined", 0, booleans or else.
  */

  //hook to represent the deck of cards
  const [imgGroup, setImgGroup] = useState(null);

  //hook to save the first revealed card of each turn
  const [card1, setCard1] = useState(undefined);

  /* We use useEffect() to launch the code inside it; because we add an array in the end,as second argument
  useEffect() will launch only one time.
  */
useEffect(() => {
    // We fetch a colection of objects from a API, that offer "users" (with photos and other useful data)
    fetch("https://randomuser.me/api/?results=2")
      .then((res) => res.json())
      .then((data) => {
        

        // We save the results
        let setOne = data.results;
        /* We deep clone the save results. Deep clone means we are really creating a copy, a new object, 
        and not just coping the reference. This will allow work with each set of cards in individual way
        */
        let setTwo = JSON.parse(JSON.stringify(setOne));
        
        /* We add some new propierties to the cards in each set
        Note: the cards are almost the same in both sets, except for the "uniqueId", that's  the reason why we have
        to work with them i separate sets */
        setOne.map(card => {card.matched = false; card.revealed = false; card.uniqueId = card.email + 1});
        setTwo.map(card => {card.matched = false; card.revealed = false; card.uniqueId = card.email + 2});

        // We fuse both sets and suffle
        let finalSet = [...setOne, ...setTwo];
        finalSet = shuffle(finalSet);
        
        // we assign the final set to setImgGroup, the hook-variable we created before to represent the deck
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

 /* Function compare:Here we use card1, the hook-variable that we created at the start of the code,
  to save the value of the first flipped card at the start of each turn
 */

  const compare = (idToCompare) => {
    
    //If card1 is undefined it means is the start of a turn, so we assign the value idToCompare to card1
    if (card1 == undefined) {
      setCard1(idToCompare)
    }
    // Else, we compare the value of the first card (save it in card1) with the current card (idToCompare)
    else {
      // If we are talking about the same card we logged and call a function to block them in place
      if (card1 == idToCompare) {
        console.log("they match!");
        blockMatchedCards(idToCompare);
      }
      else{
        // If the player did'nt got a match: we flip down the cards (we unreveal) passing their ids
        flipDown(card1, idToCompare);
      }
      // We reset card1 for the next round
      setCard1(undefined);
    }
  };

  // Function that reveal the cards (show the images to macth)
  // We use uniqueId to reference the card the user selected to reveal 
  const reveal = (uniqueId) =>
  {
  
    // We use the hook setImgGroup with map to update the deck of cards
    setImgGroup(prevState =>{
      return prevState.map( card =>{
        if(card.uniqueId == uniqueId){
          /* The attribute "revealed" will be turned into "true" for the selected card. 
             This attribute will be use for the child component "Cards" to do the reveal and also unreveal.
          */
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
          // the attribute "revealed" will be turned into "false" for the cards revealed and no matched in this turn 
          return {...card, revealed: false}
        }
        else{
          return card
        }
      })
    })}, 1000);
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
              compare={compare} // We pass the function compare, so the component cards can call it
              revealFunction={reveal} // We pass the function reveal, so the component cards can call it
              img={userObj.picture.large} // The pic that will have to be match with it's clone
              matched={userObj.matched} // The attribute that will block the cards already matched
              idToCompare={userObj.email} // The id that will be the same between the "original" card and the "clone"
              revealed={userObj.revealed} // The attribute that will be use to decide if a card gets reveal or not
              uniqueId={userObj.uniqueId} // The id that difference the clone from the original
            />
          ))}
      </div>
    </>
  );
};

export default CardsBoard;
