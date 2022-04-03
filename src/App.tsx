import React from "react";
import "./App.css";
import { COLORS, COLOR_NAMES } from "./data";
import Board from "./views/game/Board/Board";

function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

export default App;
