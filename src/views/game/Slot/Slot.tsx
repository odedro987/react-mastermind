import React from "react";
import { COLORS } from "../../../data";
import "./Slot.scss";

export enum SlotType {
  KEYBOARD,
  GUESS,
}

interface Props {
  color: string;
  index: number;
  type: SlotType;
  onClick?: (value: any) => void;
}

function Slot({ color, type, index, onClick }: Props) {
  const handleClick = () => {
    switch (type) {
      case SlotType.KEYBOARD: {
        onClick!(color);
        break;
      }
      case SlotType.GUESS: {
        onClick!(index);
        break;
      }
    }
  };

  return (
    <div
      className={`Slot ${onClick && "Slot--clickable"}`}
      style={{ backgroundColor: COLORS[color] }}
      onClick={onClick && handleClick}
    ></div>
  );
}

export default Slot;
