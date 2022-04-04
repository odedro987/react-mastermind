import React from "react";
import { COLORS } from "../../../data";
import ResponseSlot, { ResponseType } from "../ResponseSlot/ResponseSlot";
import Slot, { SlotType } from "../Slot/Slot";
import "./Response.scss";

interface Props {
  types: Array<ResponseType>;
}

function Response({ types }: Props) {
  return (
    <div className="Response">
      <div className="Response-row">
        <ResponseSlot type={types[0]}></ResponseSlot>
        <ResponseSlot type={types[1]}></ResponseSlot>
      </div>
      <div className="Response-row">
        <ResponseSlot type={types[2]}></ResponseSlot>
        <ResponseSlot type={types[3]}></ResponseSlot>
      </div>
    </div>
  );
}

export default Response;
