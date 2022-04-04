import React from "react";
import { COLORS } from "../../../data";
import Response from "../Response/Response";
import { ResponseType } from "../ResponseSlot/ResponseSlot";
import Slot, { SlotType } from "../Slot/Slot";
import "./Row.scss";

interface Props {
  colors: Array<string>;
  slotType: SlotType;
  responseTypes?: Array<ResponseType>;
  onAdd?: (color: string) => void;
  onRemove?: (index: number) => void;
}

function Row({ colors, slotType, responseTypes, onAdd, onRemove }: Props) {
  return (
    <div className="Row">
      {colors.map((color, i) => (
        <Slot
          index={i}
          type={slotType}
          color={color}
          onClick={onAdd != undefined ? onAdd : onRemove}
        />
      ))}
      {slotType === SlotType.GUESS && (
        <Response types={responseTypes!}></Response>
      )}
    </div>
  );
}

export default Row;
