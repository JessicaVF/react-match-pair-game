import Square from "./Square";
import { useState } from "react";
import TicTacCss from "./TicTac.module.css";

function TicTacBoard() {
  const win = ["012", "345", "678", "036", "147", "258", "048", "246"];
  let tableNumber = 0;

  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [playerOneSqs, setPlayerOneSqs] = useState([]);
  const [playerTwoSqs, setPlayerTwoSqs] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameTable, setGameTable] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleGamePlay = (val, num) => {
    if (!gameOver) {
      const arrTbl = [...gameTable];
      arrTbl[num] = val;

      if (isPlayerOne) {
        const arrPlayer1 = [...playerOneSqs];
        arrPlayer1.push(num);
        setPlayerOneSqs(() => {
          return arrPlayer1;
        });
        handleWinner(arrPlayer1);
      } else {
        const arrPlayer2 = [...playerTwoSqs];
        arrPlayer2.push(num);
        setPlayerTwoSqs(() => {
          return arrPlayer2;
        });
        handleWinner(arrPlayer2);
      }

      setGameTable(() => {
        return arrTbl;
      });

      setIsPlayerOne(() => !isPlayerOne);
    }
  };

  const handleWinner = (player) => {
    for (var i = 0; i < 8; i++) {
      let won = win[i];
      let inCommon = player.filter((x) => won.includes(x));
      if (inCommon.length === 3) {
        isPlayerOne ? console.log("playerone win") : console.log("player2 win");
        endGameEvaluation();
      }
    }
  };

  const endGameEvaluation = () => {
    setGameOver(true);
  };

  const handleReset = () => {
    const newBoard = [null, null, null, null, null, null, null, null, null];
    setGameTable(() => {
      return newBoard;
    });
    setPlayerOneSqs([]);
    setPlayerTwoSqs([]);
    setGameOver(false);
  };

  const playerTurn = isPlayerOne ? (
    <div className={TicTacCss.joueur1} id="player-turn">
      "P1: Your Turn !"
    </div>
  ) : (
    <div className={TicTacCss.joueur2} id="player-turn">
      "P2: Your Turn !"
    </div>
  );
  const gameWinMsg = !isPlayerOne ? "Player1 wins" : "Player2 wins";

  return (
    <div className={TicTacCss.containertac}>
      <div className={TicTacCss.rowtac}>
        <div className={TicTacCss.coltac}>
          <h1>Morpion</h1>
          <div id="result"></div>
          {!gameOver && playerTurn}
          <table className={TicTacCss["table-style"]}>
            <tbody>
              <tr>
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handleGamePlay}
                  turnBool={isPlayerOne}
                />

                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handleGamePlay}
                  turnBool={isPlayerOne}
                />

                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handleGamePlay}
                  turnBool={isPlayerOne}
                />
              </tr>
              <tr>
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handleGamePlay}
                  turnBool={isPlayerOne}
                />

                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handleGamePlay}
                  turnBool={isPlayerOne}
                />

                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handleGamePlay}
                  turnBool={isPlayerOne}
                />
              </tr>
              <tr>
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handleGamePlay}
                  turnBool={isPlayerOne}
                />
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handleGamePlay}
                  turnBool={isPlayerOne}
                />
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handleGamePlay}
                  turnBool={isPlayerOne}
                />
              </tr>
            </tbody>
          </table>
          <button onClick={() => handleReset()} id="new-game">
            New Game
          </button>

          <div id="resultMessage">{gameOver && gameWinMsg}</div>
        </div>
      </div>
      {/* add a score board? maybe? */}
      {/* add optional login? maybe? */}
    </div>
  );
}

export default TicTacBoard;
