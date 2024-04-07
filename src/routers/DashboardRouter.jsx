import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardHomePage from "../pages/dashboard/DashboardHomePage";
import HumidityPage from "../pages/dashboard/HumidityPage";
import TemperaturePage from "../pages/dashboard/TemperaturePage";

export default function DashboardRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<DashboardHomePage />} />
      <Route exact path="/humidity" element={<HumidityPage />} />
      <Route exact path="/temperature" element={<TemperaturePage />} />
    </Routes>
  );
}
