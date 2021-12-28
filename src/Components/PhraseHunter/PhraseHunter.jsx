import React from "react";
import { useState } from "react";
import PhraseHunterCss from "./PhraseHunter.module.css";
const fullHeart = require("../../Shared/images/matchGame/outline_favorite_black_24dp2x.png");
const emptyHeart = require("../../Shared/images/matchGame/outline_favorite_border_black_24dp2x.png");

const PhraseHunter = () => {
  const [gameOver, setGameOver] = useState(false);
  const [gameStart, setGameStart] = useState(false);

  return (
    <div className="main-container">
      {!gameStart && (
        <>
          <div className={PhraseHunterCss.backdrop} />
          <div className={PhraseHunterCss.startmodule}>
            <h2 className={PhraseHunterCss.title}>Phrase Hunter</h2>
            {gameOver && <h1 className="game-over-message">Game Over</h1>}
            <button
              className="btn btn-success"
              onClick={() => setGameStart(true)}
            >
              Start Game
            </button>
          </div>
        </>
      )}

      {gameStart && (
        <div
          className={
            PhraseHunterCss.gamecontainer +
            " d-flex flex-column align-items-center"
          }
        >
          <div id="banner" className="section">
            <h2 className="header">Phrase Hunter</h2>
          </div>

          <div id="phrase" className="section">
            <ul>This is the secret phrase to hide and create dynamically</ul>
          </div>

          <div id="qwerty" className="section">
            <div className={PhraseHunterCss.keyrow}>
              <button className={PhraseHunterCss.digitialkey}>q</button>
              <button className={PhraseHunterCss.digitialkey}>w</button>
              <button className={PhraseHunterCss.digitialkey}>e</button>
              <button className={PhraseHunterCss.digitialkey}>r</button>
              <button className={PhraseHunterCss.digitialkey}>t</button>
              <button className={PhraseHunterCss.digitialkey}>y</button>
              <button className={PhraseHunterCss.digitialkey}>u</button>
              <button className={PhraseHunterCss.digitialkey}>i</button>
              <button className={PhraseHunterCss.digitialkey}>o</button>
              <button className={PhraseHunterCss.digitialkey}>p</button>
            </div>

            <div className={PhraseHunterCss.keyrow}>
              <button className={PhraseHunterCss.digitialkey}>a</button>
              <button className={PhraseHunterCss.digitialkey}>s</button>
              <button className={PhraseHunterCss.digitialkey}>d</button>
              <button className={PhraseHunterCss.digitialkey}>f</button>
              <button className={PhraseHunterCss.digitialkey}>g</button>
              <button className={PhraseHunterCss.digitialkey}>h</button>
              <button className={PhraseHunterCss.digitialkey}>j</button>
              <button className={PhraseHunterCss.digitialkey}>k</button>
              <button className={PhraseHunterCss.digitialkey}>l</button>
            </div>

            <div className={PhraseHunterCss.keyrow}>
              <button className={PhraseHunterCss.digitialkey}>z</button>
              <button className={PhraseHunterCss.digitialkey}>x</button>
              <button className={PhraseHunterCss.digitialkey}>c</button>
              <button className={PhraseHunterCss.digitialkey}>v</button>
              <button className={PhraseHunterCss.digitialkey}>b</button>
              <button className={PhraseHunterCss.digitialkey}>n</button>
              <button className={PhraseHunterCss.digitialkey}>m</button>
            </div>
          </div>

          <div id="scoreboard" className="section">
            <ul className="d-flex">
              <li className="tries">
                <img className="hearticon" src={fullHeart} alt="Heart Icon" />
              </li>
              <li className="tries">
                <img className="hearticon" src={fullHeart} alt="Heart Icon" />
              </li>
              <li className="tries">
                <img className="hearticon" src={fullHeart} alt="Heart Icon" />
              </li>
              <li className="tries">
                <img className="hearticon" src={fullHeart} alt="Heart Icon" />
              </li>
              <li className="tries">
                <img className="hearticon" src={fullHeart} alt="Heart Icon" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhraseHunter;
