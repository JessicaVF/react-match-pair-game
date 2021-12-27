import React from "react";
import NavBarClasses from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={"p-4 " + NavBarClasses.flxrow}>
      <a className={NavBarClasses.anchor} href="/home">
        Home
      </a>
      <a className={NavBarClasses.anchor} href="/match-pair">
        Match Pair
      </a>
      <a className={NavBarClasses.anchor} href="/tictac">
        Tic-Tac-Toe
      </a>
    </div>
  );
};

export default NavBar;
