import React from "react";
import { COLORS } from "../../../data";
import Slot, { SlotType } from "../Slot/Slot";
import "./Row.scss";

interface Props {
  colors: Array<string>;
  type: SlotType;
  onAdd?: (color: string) => void;
  onRemove?: (index: number) => void;
}

function Row({ colors, type, onAdd, onRemove }: Props) {
  return (
    <div className="Row">
      {colors.map((color, i) => (
        <Slot
          index={i}
          type={type}
          color={color}
          onClick={onAdd != undefined ? onAdd : onRemove}
        />
      ))}
    </div>
  );
}

export default Row;
