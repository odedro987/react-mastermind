import React, { useState } from "react";
import { COLORS, COLOR_NAMES } from "../../../data";
import { EMPTY_ROW } from "../../../globals";
import Row from "../Row/Row";
import { SlotType } from "../Slot/Slot";
import "./Keyboard.scss";

interface Props {
  onClick: (color: string) => void;
}

function Keyboard({ onClick }: Props) {
  return (
    <div className="Keyboard">
      <Row
        colors={COLOR_NAMES.slice(0, 4)}
        type={SlotType.KEYBOARD}
        onAdd={onClick}
      />
      <Row
        colors={COLOR_NAMES.slice(4)}
        type={SlotType.KEYBOARD}
        onAdd={onClick}
      />
    </div>
  );
}

export default Keyboard;
