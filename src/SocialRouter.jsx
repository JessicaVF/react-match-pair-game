import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CardsBoard from "./Components/CardsBoard/CardsBoard";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import TicTacBoard from "./Components/TicTac/TicTacBoard";

export const SocialRouter = () => {
  return (
    <div className="mainContent">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/match-pair" element={<CardsBoard />} />
          <Route path="/tictac" element={<TicTacBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
