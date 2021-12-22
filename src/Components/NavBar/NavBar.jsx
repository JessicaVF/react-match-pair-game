import React from "react";
import NavBarClasses from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={NavBarClasses.flxrow}>
      <a className={NavBarClasses.anchor} href="/home">
        Home
      </a>
      <a className={NavBarClasses.anchor} href="/match-pair">
        Match Pair
      </a>
    </div>
    // <Link to="/home" className={NavBarClasses.flxrow}>
    //   Match Pair
    // </Link>
  );
};

export default NavBar;
