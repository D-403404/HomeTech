import React from 'react'
import { Route, Routes } from "react-router-dom";
import HSHomePage from '../pages/history-statistics/HSHomePage';
import HSHistoryPage from '../pages/history-statistics/HSHistoryPage';
import HSTemperaturePage from '../pages/history-statistics/HSTemperaturePage';
import HSHumidityPage from '../pages/history-statistics/HSHumidityPage';
import HSLightPage from '../pages/history-statistics/HSLightPage';

export default function HSRouter() {
  return (
    <Routes>
        <Route exact path='/' element={<HSHomePage />} />
        <Route exact path='/history' element={<HSHistoryPage />} />
        <Route exact path='/temperature' element={<HSTemperaturePage />} />
        <Route exact path='/humidity' element={<HSHumidityPage />} />
        <Route exact path='/light' element={<HSLightPage />} />
    </Routes>
  )
}
