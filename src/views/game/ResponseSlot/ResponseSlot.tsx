import React from "react";
import { COLORS } from "../../../data";
import Slot, { SlotType } from "../Slot/Slot";
import "./ResponseSlot.scss";

export enum ResponseType {
  CORRECT,
  MISPLACED,
  WRONG,
}

interface Props {
  type: ResponseType;
}

function ResponseSlot({ type }: Props) {
  const getClassNames = (): string => {
    const classes = ["ResponseSlot"];

    if (type === ResponseType.CORRECT) classes.push("ResponseSlot--correct");
    else if (type === ResponseType.MISPLACED)
      classes.push("ResponseSlot--misplaced");

    return classes.join(" ");
  };

  return <div className={getClassNames()}></div>;
}

export default ResponseSlot;
