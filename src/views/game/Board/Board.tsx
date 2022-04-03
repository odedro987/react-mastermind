import React, { useEffect, useState } from "react";
import { COLORS } from "../../../data";
import { EMPTY_ROW } from "../../../globals";
import Keyboard from "../Keyboard/Keyboard";
import Row from "../Row/Row";
import { SlotType } from "../Slot/Slot";
import "./Board.scss";

interface Props {}

function Board({}: Props) {
  const [rows, setRows] = useState<Array<Array<string>>>([]);
  const [currentRow, setCurrentRow] = useState(9);

  useEffect(() => {
    const rows: Array<Array<string>> = [];
    for (let i = 0; i < 10; i++) {
      rows.push([]);
      for (let j = 0; j < 4; j++) {
        rows[i].push("empty");
      }
    }
    setRows(rows);
  }, []);

  const renderRows = () => {
    return rows.map((color, i) => (
      <Row
        key={i}
        colors={color}
        type={SlotType.GUESS}
        onRemove={handleGuessClick}
      />
    ));
  };

  const handleGuessClick = (index: number) => {
    rows[currentRow][index] = "empty";
    setRows([...rows]);
  };

  const handleKeyboardClick = (color: string) => {
    const firstEmpty = rows[currentRow].findIndex((color) => color === "empty");
    rows[currentRow][firstEmpty] = color;
    setRows([...rows]);
  };

  return (
    <div className="Board">
      {renderRows()}
      <Keyboard onClick={handleKeyboardClick} />
    </div>
  );
}

export default Board;
