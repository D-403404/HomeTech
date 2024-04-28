import React, { useEffect, useState } from "react";
import ReturnButton from "/src/components/general/ReturnButton";
import Arc_temperature from "/src/assets/images/Arc_temperature.png";
import Arc_humidity from "/src/assets/images/Arc_humidity.png";

export default function DashboardPageLayout({ title, value, unit, range, safeRange, warningMsgLst }) {
  const Arc = title === "Temperature" ? Arc_temperature : Arc_humidity;
  const msg = value < safeRange[0] ? warningMsgLst[0] : value > safeRange[1] ? warningMsgLst[1] : "";

  return (
    <div className="relative min-h-[100vh] min-w-[1001px] bg-background">
      <ReturnButton link={"/home/dashboard"} />
      <div className="pt-[35px]">
        <div className="pl-[40px] textformat text-[40px] mb-[15px]">
          {title}
        </div>
        <Chart Arc={Arc} range={range} value={value} unit={unit} />
        {(value < safeRange[0] || value > safeRange[1]) &&
        <div className="pl-[50px] textwarning">
          <span className="font-[Alata]">
            <span className="underline">Warning</span>
            <span>:</span>
          </span>
          <span className="font-[Actor]"> {msg}</span>
        </div>
}
      </div>
    </div>
  );
}

function Chart({ Arc, range, value, unit }) {
  const [angle, setAngle] = useState(45);

  function angleFromValue() {
    if (value < range[0]) return 0;
    if (value > range[1]) return 1;
    return (value - range[0]) / (range[1] - range[0]);
  }

  // Counterclockwise: -45deg to 45deg
  useEffect(() => {
    const perc = angleFromValue();
    console.log(perc);
    if (perc > 0.5) setAngle(-45 - (1 - perc) * (360 - 90));
    else setAngle(45 + perc * (360 - 90));
    console.log(angle);
  }, [value]);

  const radius = 253;
  // const arcWidth = "w-[" + radius * 2 + "px]";
  // console.log(arcWidth);
  // const rotateAttr = `rotate-[${angle}deg]`;

  return (
    <div className="flex justify-center items-center">
      <div className="relative h-[460px] w-[506px] flex justify-center items-center">
        <img className="absolute top-0 w-[506px] z-0" src={Arc} />
        <div className="absolute bottom-0 left-[-15px] font-[Adamina] text-[40px]">{range[0]}</div>
        <div className="absolute bottom-0 right-[-35px] font-[Adamina] text-[40px]">{range[1]}</div>
        <div className="font-[Adamina] text-[100px] z-50">
          {value.toFixed(1)}
          {unit}
        </div>
        <div
          className="absolute left-[calc(50%-42.5px)] top-[-22.80395px] w-[85px] h-[calc(506px+22.80395px*2)] flex flex-col justify-end"
          style={{ rotate: `${angle}deg` }}
        >
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}
