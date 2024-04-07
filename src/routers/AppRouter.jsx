import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardRouter from "./DashboardRouter";
import ControlRouter from "./ControlRouter";
import HSRouter from "./HSRouter";
import AppLayout from "../components/layout/AppLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<AppLayout />}>
        <Route exact path="/dashboard/*" element={<DashboardRouter />} />
        <Route exact path="/device-control/*" element={<ControlRouter />} />
        <Route exact path="/history-statistics/*" element={<HSRouter />} />
      </Route>
    </Routes>
  );
}
