import React from "react";
import Cards from "../Cards/Cards";

const CardsBoard = () => {
  //logic

  //return jsx
  return (
    <div className="game-board">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default CardsBoard;
