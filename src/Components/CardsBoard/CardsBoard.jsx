import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

//https://randomuser.me/api/?results=5

const CardsBoard = () => {
  const [imgGroup1, setImgGroup1] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        setImgGroup1([...data.results]);
      });
  }, []);

  //return jsx
  return (
    <div className="game-board">
      {imgGroup1 &&
        imgGroup1.map((userObj) => (
          <Cards key={userObj.email} img={userObj.picture.large} />
        ))}
    </div>
  );
};

export default CardsBoard;
