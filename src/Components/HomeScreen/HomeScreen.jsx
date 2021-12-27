import React from "react";

import homeScreenStyles from "./HomeScreen.module.css";
const backGroundImage = require("../../Shared/images/matchGame/flower-bw.jpeg");

const HomeScreen = () => {
  return (
    <>
      <header className={homeScreenStyles.main}>
        <h1 className="p-5">Hello World</h1>
      </header>
    </>
  );
};

export default HomeScreen;
