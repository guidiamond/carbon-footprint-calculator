import React from "react";
import "antd/dist/antd.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HouseCarbonCalculator } from "./pages/HouseCarbonCalculator";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { FoodCarbonCalculator } from "./pages/FoodCarbonCalculator";
import { ROUTES } from "./constants/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.houseImpact} element={<HouseCarbonCalculator />} />
        <Route path={ROUTES.foodImpact} element={<FoodCarbonCalculator />} />
        <Route path="*" element={<Navigate to="/house" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
