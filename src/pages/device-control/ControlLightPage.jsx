import React, { useEffect, useState } from "react";
import ReturnButton from "/src/components/general/ReturnButton";
import ToggleSwitch from "/src/components/control/ToggleSwitch";
import ColorPalette from "/src/components/control/ColorPalette";
import icon_light from "/src/assets/images/icon_light.png";

import Sidebar from "/src/components/sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function ControlLightPage() {
  function rgb_to_hex(red, green, blue) {
    const redPart = parseInt(red).toString(16).padStart(2, "0");
    const greenPart = parseInt(green).toString(16).padStart(2, "0");
    const bluePart = parseInt(blue).toString(16).padStart(2, "0");
    console.log(redPart);
    console.log(greenPart);
    console.log(bluePart);
    return (redPart + greenPart + bluePart).toUpperCase();
  }

  function hex_to_rgb(hex) {
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);
    return { red: red, green: green, blue: blue };
  }

  const [toggle, setToggle] = useState(false);
  const [auto, setAuto] = useState(false);

  const defaultColor = { red: 37, green: 169, blue: 247 };
  const [color, setColor] = useState(
    rgb_to_hex(
      defaultColor.red.toString(),
      defaultColor.green.toString(),
      defaultColor.blue.toString()
    )
  );

  const [red, setRed] = useState(hex_to_rgb(color).red.toString());
  const [green, setGreen] = useState(hex_to_rgb(color).green.toString());
  const [blue, setBlue] = useState(hex_to_rgb(color).blue.toString());
  const [mode, setMode] = useState(false);
  const [hex, setHex] = useState(color);

  const item = {
    icon: icon_light,
    color: "color-light",
    value: 73,
    unit: " lx",
    to: "/home/history-statistics/light",
  };

  return (
    <div className="relative min-h-[100vh] min-w-[1001px] bg-background">
      <ReturnButton link={"/home/device-control"} />
      <div className="pt-[35px]">
        <div className="pl-[40px] textformat text-[40px] mb-[15px]">Light</div>
        <div className="flex justify-center items-center">
          <div className="pl-[50px] flex flex-col">
            <div className="flex flex-col">
              <ToggleSwitch
                className="pb-[36px]"
                title="SWITCH"
                value={toggle}
                setValue={setToggle}
              />
              <ToggleSwitch
                className="pb-[36px]"
                title="AUTO MODE"
                value={auto}
                setValue={setAuto}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="textformat-control text-[32px]">INTENSITY</div>
              <Button item={item} />
            </div>
          </div>
          <div className="grow flex flex-col justify-center items-center">
            <ColorPalette
              rgb_to_hex={rgb_to_hex}
              hex_to_rgb={hex_to_rgb}
              defaultColor={defaultColor}
              defaultHex={rgb_to_hex(
                defaultColor.red,
                defaultColor.green,
                defaultColor.blue
              )}
              red={red}
              setRed={setRed}
              green={green}
              setGreen={setGreen}
              blue={blue}
              setBlue={setBlue}
              mode={mode}
              setMode={setMode}
              hex={hex}
              setHex={setHex}
              color={color}
              setColor={setColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ item }) {
  return (
    <Link to={item.to}>
      <button
        className={`${item.color} h-[157px] w-[251px] rounded-[20px] flex justify-center items-center shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)] hover:scale-[1.1]`}
      >
        <div className="flex justify-center items-center">
          <img className="" src={item.icon} />
        </div>
        <div className="w-[131.93px] flex justify-center items-center">
          <div className="font-[Adamina] text-[42px]">
            {item.value !== null
              ? item.value.toFixed(1).toString() + item.unit
              : "N/A"}
          </div>
        </div>
      </button>
    </Link>
  );
}
