import React, { useState } from "react";
import "./App.css";
import { COLORS, COLOR_NAMES } from "./data";
import Board from "./views/game/Board/Board";
import Header from "./views/stats/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Board></Board>
    </div>
  );
}

export default App;
