import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../pages/login/HomePage";
import SignInPage from "../pages/login/SignInPage";
import SignUpPage from "../pages/login/SignUpPage";

export default function LoginRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/sign-in" element={<SignInPage />} />
      <Route exact path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}
