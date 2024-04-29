import React, { useEffect, useState } from "react";
import icon_lightbulb from "/src/assets/images/icon_lightbulb.png";
import icon_fan from "/src/assets/images/icon_fan.png";

import { Link } from "react-router-dom";

export default function ControlHomePage() {
  const items = [
    {
      icon: icon_lightbulb,
      display: "Light",
      color: "color-lightbulb",
      to: "/home/device-control/light",
    },
    {
      icon: icon_fan,
      display: "Fan",
      color: "color-fan",
      to: "/home/device-control/fan",
    },
  ];

  return (
    <div className="min-h-[100vh] min-w-[1018px] py-[50px] flex flex-col justify-around items-center bg-background">
      {items.map((item, index) => (
        <Button key={index} item={item} />
      ))}
    </div>
  );
}

function Button({ item }) {
  return (
    <Link to={item.to}>
      <button
        className={`${item.color} h-[157px] w-[467px] m-[50px] rounded-[20px] flex justify-center items-center shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)] hover:scale-[1.1]`}
      >
        <div className="w-[112px] flex justify-center items-center">
          <img className="" src={item.icon} />
        </div>
        <div className="w-[247px] flex justify-center items-center">
          <div className="font-main text-[40px]">{item.display}</div>
        </div>
      </button>
    </Link>
  );
}
