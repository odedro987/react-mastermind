import React, { useState } from "react";
import { COLORS, COLOR_NAMES } from "../../../data";
import { EMPTY_ROW } from "../../../globals";
import Row from "../Row/Row";
import { SlotType } from "../Slot/Slot";
import "./Keyboard.scss";

interface Props {
  onClick: (color: string) => void;
  onSubmit: () => void;
}

function Keyboard({ onClick, onSubmit }: Props) {
  return (
    <div className="Keyboard">
      <Row
        colors={COLOR_NAMES.slice(0, 4)}
        slotType={SlotType.KEYBOARD}
        onAdd={onClick}
      />
      <Row
        colors={COLOR_NAMES.slice(4)}
        slotType={SlotType.KEYBOARD}
        onAdd={onClick}
      />
      <button className="Keyboard-btn" onClick={onSubmit}>
        CHECK
      </button>
    </div>
  );
}

export default Keyboard;
