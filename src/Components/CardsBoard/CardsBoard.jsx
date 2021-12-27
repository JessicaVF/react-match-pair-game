import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import BoardClasses from "./CardsBoard.module.css";



// We take the photos from an API generator of user data: https://randomuser.me/api/?results=5

const CardsBoard = () => {
  const [imgGroup1, setImgGroup1] = useState(null);
  const [imgGroup2, setImgGroup2] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        setImgGroup1([...data.results]);
        setImgGroup2(shuffle([...data.results]));
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

  //return jsx
  return (
    <>
      <div className={BoardClasses["flxrow"]}>
        {/* Game Cards */}
        {imgGroup1 &&
          imgGroup1.map((userObj) => (
            <Cards key={userObj.email} img={userObj.picture.large} />
          ))}
      </div>
      <div className={BoardClasses["flxrow"]}>
        {imgGroup2 &&
          imgGroup2.map((userObj) => (
            <Cards key={userObj.email} img={userObj.picture.large} />
          ))}
      </div>
    </>
  );
};

export default CardsBoard;
