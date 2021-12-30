import React, { useState, useEffect } from "react";
import PhraseHunterCss from "./PhraseHunter.module.css";
import Heart from "./Heart";

const PhraseHunter = () => {
  const [gameOver, setGameOver] = useState(false);
  const [gameQuote, setGameQuote] = useState("life is beautiful");
  const [gameStart, setGameStart] = useState(false);

  const [gameScore, setGameScore] = useState([true, true, true, true, true]);
  const [count, setCount] = useState(4);

  useEffect(() => {
    // create asynce function to handle this so that it can be reused for future start new game button.

    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setGameQuote(randomQuote(data));
      });
  }, []);

  const randomQuote = (arr) => {
    const number = Math.floor(Math.random() * 1500 + 1);
    const quote = arr[number].text;
    return quote;
  };

  const handleGameStart = () => {
    setCount(5);

    // for (let i = 0; i < gameQuote.length; i++) {
    //   const element = array[i];
    // }
    setGameStart(true);
  };

  const handleGameScore = () => {
    const index = count > 0 && count - 1;
    let tempArr = [...gameScore];
    tempArr[index] = false;
    setGameScore(tempArr);

    count > 0 &&
      setCount(() => {
        return count - 1;
      });
  };

  const handleEndGame = () => {
    console.log("gameover");
  };

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
              onClick={() => handleGameStart()}
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
            <h3>{gameQuote}</h3>
          </div>

          <div id="qwerty" className="section">
            <div className={PhraseHunterCss.keyrow}>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                q
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                w
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                e
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                r
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                t
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                y
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                u
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                i
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                o
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                p
              </button>
            </div>

            <div className={PhraseHunterCss.keyrow}>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                a
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                s
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                d
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                f
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                g
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                h
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                j
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                k
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                l
              </button>
            </div>

            <div className={PhraseHunterCss.keyrow}>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                z
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                x
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                c
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                v
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                b
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                n
              </button>
              <button
                onClick={() => handleGameScore()}
                className={PhraseHunterCss.digitialkey}
              >
                m
              </button>
            </div>
          </div>

          <div id="scoreboard" className="section">
            <ul className="d-flex">
              {gameScore.map((heartBool, index) => (
                <Heart key={index} isFull={heartBool} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhraseHunter;
