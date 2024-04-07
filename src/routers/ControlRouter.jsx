import React from 'react'
import { Route, Routes } from "react-router-dom";
import ControlHomePage from '../pages/device-control/ControlHomePage';
import ControlFanPage from '../pages/device-control/ControlFanPage';
import ControlLightPage from '../pages/device-control/ControlLightPage';

export default function ControlRouter() {
  return (
    <Routes>
        <Route exact path='/' element={<ControlHomePage />} />
        <Route exact path='/fan' element={<ControlFanPage />} />
        <Route exact path='/light' element={<ControlLightPage />} />
    </Routes>
  )
}
