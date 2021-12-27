import React from "react";
import TicTacCss from "./TicTac.module.css";

function TicTacSquare(props) {
  const { turnBool, tblNum, onChange, tdVal } = props;

  const handleXO = () => {
    if (tdVal === null) {
      const value = turnBool ? "X" : "O";
      onChange(value, tblNum);
    }
  };

  return (
    <td onClick={handleXO} className={TicTacCss.square}>
      {tdVal}
    </td>
  );
}

export default TicTacSquare;
