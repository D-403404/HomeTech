import React from "react";
import logo from "/src/assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-[100vh] bg-background flex flex-col justify-center items-center">
      <img className="h-[133px] my-[41px]" src={logo} />
      <div className="h-[324px] w-[80vw] max-w-[681px] my-[41px] bg-primary rounded-3xl drop-shadow-lg">
        <div className="h-full pt-[36px] pb-[36px] pl-[116px] pr-[116px] flex flex-col flex-wrap justify-between">
          <Link to="/sign-in">
            <button className="homebutton">Sign in</button>
          </Link>
          <Link to="/sign-up">
            <button className="homebutton">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
