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
  const INPUT_ROW = 9;
  const [currentRow, setCurrentRow] = useState(INPUT_ROW - 1);
  const [finished, setFinished] = useState(false);

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

  const findFirstEmpty = () => {
    return rows[INPUT_ROW].findIndex((color) => color === "empty");
  };

  const renderRows = () => {
    return rows.map((color, i) => (
      <Row
        key={i}
        colors={color}
        type={SlotType.GUESS}
        onRemove={!finished && i === INPUT_ROW ? handleGuessClick : undefined}
      />
    ));
  };

  const handleGuessClick = (index: number) => {
    rows[INPUT_ROW][index] = "empty";
    setRows([...rows]);
  };

  const handleKeyboardClick = (color: string) => {
    const firstEmpty = findFirstEmpty();
    rows[INPUT_ROW][firstEmpty] = color;
    setRows([...rows]);
  };

  const submitGuess = () => {
    if (findFirstEmpty() === -1) {
      // check guess

      if (currentRow >= 0) {
        for (let i = currentRow; i <= rows.length - 2; i++) {
          rows[i] = [...rows[i + 1]];
        }
        rows[INPUT_ROW] = [...EMPTY_ROW];
        setRows([...rows]);
        setCurrentRow(currentRow - 1);
      } else {
        setFinished(true);
      }
    }
  };

  return (
    <div className="Board">
      {renderRows()}
      <Keyboard onClick={handleKeyboardClick} onSubmit={submitGuess} />
    </div>
  );
}

export default Board;
