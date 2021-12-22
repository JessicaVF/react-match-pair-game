import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CardsBoard from "./Components/CardsBoard/CardsBoard";

export const SocialRouter = () => {
  return (
    <div className="mainContent">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardsBoard />} />
          <Route path="/home" element={<CardsBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
