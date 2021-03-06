import React from "react";
const fullHeart = require("../../Shared/images/matchGame/outline_favorite_black_24dp2x.png");
const emptyHeart = require("../../Shared/images/matchGame/outline_favorite_border_black_24dp2x.png");

const Heart = (props) => {
  const imgSrc = props.isFull ? fullHeart : emptyHeart;

  return (
    <li>
      <img src={imgSrc} alt="heart" />
    </li>
  );
};

export default Heart;
