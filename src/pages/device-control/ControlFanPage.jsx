import React, { useEffect, useState } from "react";
import ReturnButton from "/src/components/general/ReturnButton";
import ToggleSwitch from "/src/components/control/ToggleSwitch";
import FanImg from "/src/assets/images/FanImg.png";

import { Link } from "react-router-dom";

export default function ControlFanPage() {
  const [toggle, setToggle] = useState(false);
  const [auto, setAuto] = useState(false);
  const [speed, setSpeed] = useState(0);
  const maxSpeed = 10;

  useEffect(() => {
    console.log(speed);
    if (speed === 0) document.getElementById('dec-speed').disabled = true;
    else document.getElementById('dec-speed').disabled = false;
    if (speed === maxSpeed) document.getElementById('inc-speed').disabled = true;
    else document.getElementById('inc-speed').disabled = false;
  }, [speed])

  return (
    <div className="relative min-h-[100vh] min-w-[1001px] bg-background">
      <ReturnButton link={"/home/device-control"} />
      <div className="pt-[35px]">
        <div className="pl-[40px] textformat text-[40px] mb-[15px]">Fan</div>
        <div className="px-[50px] flex justify-center items-center">
          <div className="h-full w-[50%] flex justify-center items-center">
            <img className="spinning" style={{animationDuration: `${speed ? 1.5 - speed/10 : 0}s`}} src={FanImg} />
          </div>
          <div className="grow flex flex-col">
            <div className="flex flex-col">
              <ToggleSwitch
                className="pb-[30px]"
                switchClassName="mx-[30px] my-[15px] scale-[1.2]"
                title="AUTO MODE"
                value={auto}
                setValue={setAuto}
              />
              <ToggleSwitch
                className="pb-[30px]"
                switchClassName="mx-[30px] my-[15px] scale-[1.2]"
                title="SWITCH"
                value={toggle}
                setValue={(value) => {
                  if (toggle) setSpeed(0);
                  else setSpeed(1);
                  setToggle(value);
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="textformat-control text-[32px]">SPEED</div>
              <SpeedChanger
                speed={speed}
                maxSpeed={maxSpeed}
                setSpeed={setSpeed}
                setToggle={setToggle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeedChanger({ speed, maxSpeed, setSpeed, setToggle }) {
  return (
    <div className="flex justify-center items-center">
      <button
        className="m-[20px] h-[45px] w-[45px] pb-[8px] flex justify-center items-center bg-primary rounded-[50%] text-white text-[35px] shadowed scale-[1.2]"
        onClick={(event) => {
          if (speed < maxSpeed) {
            if (speed === 0) setToggle(true);
            setSpeed(speed + 1);
          }
        }}
        name="inc-speed"
        id="inc-speed"
      >
        +
      </button>
      <div className="h-[66px] w-[146px] flex justify-center items-center border-[1px] border-primary rounded-[20px] text-primary font-control font-bold text-[30px]">
        {speed}
      </div>
      <button
        className="m-[20px] h-[45px] w-[45px] pb-[8px] flex justify-center items-center bg-primary rounded-[50%] text-white text-[35px] shadowed scale-[1.2]"
        onClick={(event) => {
          if (speed > 0) {
            if (speed === 1) setToggle(false);
            setSpeed(speed - 1);
          }
        }}
        name="dec-speed"
        id="dec-speed"
      >
        -
      </button>
    </div>
  );
}
