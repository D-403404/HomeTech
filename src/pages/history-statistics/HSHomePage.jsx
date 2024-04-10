import React from "react";
import icon_history from "/src/assets/images/icon_history.png";
import icon_temperature from "/src/assets/images/icon_temperature.png";
import icon_humidity from "/src/assets/images/icon_humidity.png";
import icon_light from "/src/assets/images/icon_light.png";

import { Link } from "react-router-dom";

export default function HSHomePage() {
  const historyItems = [
    {
      icon: icon_history,
      display: "History",
      color: "bg-gradient-to-b from-[#DCFECB] to-[#92C57A]",
      to: "/home/history-statistics/history",
    },
  ];
  const statisticsItems = [
    {
      icon: icon_temperature,
      display: "Temperature",
      color: "bg-gradient-to-b from-[#F3D2BF] to-[#DA9067]",
      to: "/home/history-statistics/temperature",
    },
    {
      icon: icon_humidity,
      display: "Humidity",
      color: "bg-gradient-to-b from-[#C6EEF3] to-[#69B0BF]",
      to: "/home/history-statistics/humidity",
    },
    {
      icon: icon_light,
      display: "Light",
      color: "bg-gradient-to-b from-[#FDFED2] to-[#C1DC54]",
      to: "/home/history-statistics/light",
    },
  ];
  return (
    <div className="min-h-[100vh] min-w-[1018px] bg-background">
      <Section title="History" itemLst={historyItems} />
      <Section title="Statistics" itemLst={statisticsItems} />
    </div>
  );
}

function Section({ title, itemLst }) {
  return (
    <div className="pt-[30px]">
      <div className="textformat text-[30px] ml-[37px] mb-[5px]">{title}</div>
      <div className="h-0 w-[191px] border-bordercolor border-b-[3px] shadow-[4px_4px_10px_0_rgba(0,0,0,0.82)]"></div>
      <div className="min-w-[80%] flex justify-evenly pt-[30px] pb-[20px]">
        {itemLst.map((item, index) => (
          <Button key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function Button({ item }) {
  return (
    <Link to={item.to}>
      <button className={`${item.color} h-[156.96px] w-[251px] rounded-[20px] flex flex-col justify-center items-center shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)] hover:scale-[1.1]`}>
        <img className="" src={item.icon} />
        <div className="text-[30px]">{item.display}</div>
      </button>
    </Link>
  );
}
