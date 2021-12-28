import React from "react";
const fullHeart = require("../../Shared/images/matchGame/outline_favorite_black_24dp2x.png");
const emptyHeart = require("../../Shared/images/matchGame/outline_favorite_border_black_24dp2x.png");

const PhraseHunter = () => {
  return (
    <div className="main-container">
      <div id="overlay" className="start">
        <h2 className="title">Phrase Hunter</h2>
        <h1 className="game-over-message">Game Over</h1>
        <button id="btn__reset">Start Game</button>
      </div>

      <div id="banner" className="section">
        <h2 className="header">Phrase Hunter</h2>
      </div>

      <div id="phrase" className="section">
        <ul></ul>
      </div>

      <div id="qwerty" className="section">
        <div className="keyrow">
          <button className="key">q</button>
          <button className="key">w</button>
          <button className="key">e</button>
          <button className="key">r</button>
          <button className="key">t</button>
          <button className="key">y</button>
          <button className="key">u</button>
          <button className="key">i</button>
          <button className="key">o</button>
          <button className="key">p</button>
        </div>

        <div className="keyrow">
          <button className="key">a</button>
          <button className="key">s</button>
          <button className="key">d</button>
          <button className="key">f</button>
          <button className="key">g</button>
          <button className="key">h</button>
          <button className="key">j</button>
          <button className="key">k</button>
          <button className="key">l</button>
        </div>

        <div className="keyrow">
          <button className="key">z</button>
          <button className="key">x</button>
          <button className="key">c</button>
          <button className="key">v</button>
          <button className="key">b</button>
          <button className="key">n</button>
          <button className="key">m</button>
        </div>
      </div>

      <div id="scoreboard" className="section">
        <ol>
          <li className="tries">
            <img
              src="images/liveHeart.png"
              alt="Heart Icon"
              height="35"
              width="30"
            />
          </li>
          <li className="tries">
            <img
              src="images/liveHeart.png"
              alt="Heart Icon"
              height="35"
              width="30"
            />
          </li>
          <li className="tries">
            <img
              src="images/liveHeart.png"
              alt="Heart Icon"
              height="35"
              width="30"
            />
          </li>
          <li className="tries">
            <img
              src="images/liveHeart.png"
              alt="Heart Icon"
              height="35"
              width="30"
            />
          </li>
          <li className="tries">
            <img
              src="images/liveHeart.png"
              alt="Heart Icon"
              height="35"
              width="30"
            />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PhraseHunter;
