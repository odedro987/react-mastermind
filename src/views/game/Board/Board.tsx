import { type } from "os";
import React, { useEffect, useState } from "react";
import { COLORS, COLOR_NAMES } from "../../../data";
import { EMPTY_RESPONSE, EMPTY_ROW } from "../../../globals";
import Keyboard from "../Keyboard/Keyboard";
import { ResponseType } from "../ResponseSlot/ResponseSlot";
import Row from "../Row/Row";
import { SlotType } from "../Slot/Slot";
import "./Board.scss";

interface Props {}

function Board({}: Props) {
  const INPUT_ROW = 9;

  const [rows, setRows] = useState<Array<Array<string>>>([]);
  const [responses, setResponses] = useState<Array<Array<ResponseType>>>([]);
  const [currentRow, setCurrentRow] = useState(INPUT_ROW - 1);
  const [finished, setFinished] = useState(false);
  const [secret, setSecret] = useState<Array<string>>([]);

  useEffect(() => {
    const rows: Array<Array<string>> = [];
    const types: Array<Array<ResponseType>> = [];
    for (let i = 0; i < 10; i++) {
      rows.push([]);
      types.push([]);
      for (let j = 0; j < 4; j++) {
        rows[i].push("empty");
        types[i].push(ResponseType.WRONG);
      }
    }
    setRows(rows);
    setResponses(types);

    const secret = [];
    for (let i = 0; i < 4; i++) {
      secret.push(COLOR_NAMES[Math.floor(Math.random() * COLOR_NAMES.length)]);
    }
    setSecret(secret);
    console.log(secret);
  }, []);

  const findFirstEmpty = () => {
    return rows[INPUT_ROW].findIndex((color) => color === "empty");
  };

  const renderRows = () => {
    return rows.map((color, i) => (
      <Row
        key={i}
        colors={color}
        slotType={SlotType.GUESS}
        responseTypes={responses[i]}
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
      const responseTypes = checkGuess();
      responses[INPUT_ROW] = [...responseTypes];

      if (responseTypes.filter((type) => type === ResponseType.CORRECT).length === 4) {
        setFinished(true);
      } else {
        if (currentRow >= 0) {
          for (let i = currentRow; i <= rows.length - 2; i++) {
            rows[i] = [...rows[i + 1]];
            responses[i] = [...responses[i + 1]];
          }
          rows[INPUT_ROW] = [...EMPTY_ROW];
          responses[INPUT_ROW] = [...EMPTY_RESPONSE];
          setRows([...rows]);
          setResponses([...responses]);
          setCurrentRow(currentRow - 1);
        } else {
          setFinished(true);
        }
      }
    }
  };

  const checkGuess = () => {
    const types: Array<ResponseType> = [];
    rows[INPUT_ROW].forEach((color, i) => {
      if (secret[i] == color) {
        types.push(ResponseType.CORRECT);
      } else if (secret.includes(color)) {
        types.push(ResponseType.MISPLACED);
      } else {
        types.push(ResponseType.WRONG);
      }
    });

    const secretColorCount = getColorCount(secret);
    const guessColorCount = getColorCount(rows[INPUT_ROW]);

    rows[INPUT_ROW].reverse().forEach((color, i) => {
      if (types[4 - 1 - i] === ResponseType.MISPLACED) {
        const colorCount = guessColorCount.get(color)!;
        if (colorCount > 1) {
          if (secretColorCount.get(color)! < colorCount) {
            types[4 - 1 - i] = ResponseType.WRONG;
            guessColorCount.set(color, colorCount - 1);
          }
        }
      }
    });

    rows[INPUT_ROW].reverse();

    return types.sort((t1, t2) => t1 - t2);
  };

  const getColorCount = (array: Array<string>): Map<string, number> => {
    let map = new Map<string, number>();

    array.forEach((color) => {
      if (map.has(color)) {
        map.set(color, map.get(color)! + 1);
      } else {
        map.set(color, 1);
      }
    });

    return map;
  };

  return (
    <div className="Board">
      {renderRows()}
      <Keyboard onClick={handleKeyboardClick} onSubmit={submitGuess} />
    </div>
  );
}

export default Board;
