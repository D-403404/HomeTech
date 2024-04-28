import React, { useEffect, useState } from "react";
import currentUser from "/src/assets/data/currentUser";
import HomepageImg from "/src/assets/images/HomepageImg.png";

import temperature from "/src/assets/data/temperature";
import humidity from "/src/assets/data/humidity";
import icon_temperature from "/src/assets/images/icon_temperature.png";
import icon_humidity from "/src/assets/images/icon_humidity.png";

import { Link } from "react-router-dom";

export default function DashboardHomePage() {
  const [date, setDate] = useState(new Date());
  const items = [
    {
      icon: icon_temperature,
      display: "Temperature",
      color: "bg-gradient-to-b from-[#F3D2BF] to-[#DA9067]",
      to: "/home/dashboard/temperature",
      data: temperature,
      unit: "°C"
    },
    {
      icon: icon_humidity,
      display: "Humidity",
      color: "bg-gradient-to-b from-[#C6EEF3] to-[#69B0BF]",
      to: "/home/dashboard/humidity",
      data: humidity,
      unit: "%"
    },
  ];

  return (
    <div className="min-h-[100vh] min-w-[1018px] flex flex-col bg-background">
      <div className="w-full flex justify-between pl-[60px] pt-[37px] pr-[60px]">
        <div className="h-[200px] w-[30%] pt-[39px] textformat text-[40px] overflow-hidden overflow-ellipsis">
          Welcome, {currentUser.username}!
        </div>
        <div className="relative w-[60%]">
          <Timer date={date} setDate={setDate} />
          <img className="h-[100%] rounded-[20px]" src={HomepageImg} />
        </div>
      </div>
      <div className="min-h-[218.48px] w-full flex justify-around items-center grow">
        {items.map((item, index) => (
          <Button key={index} item={item} today={date} />
        ))}
      </div>
    </div>
  );
}

function Timer({ date, setDate }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      // console.log(date)
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="absolute top-[15px] right-[20%] flex flex-col items-center text-[40px]">
      <div className="text-white font-time text-[1em]">
        {date.getHours().toString().padStart(2, "0")}:
        {date.getMinutes().toString().padStart(2, "0")}
        {/* {date.toLocaleTimeString()} */}
      </div>
      <div className="text-white font-date text-[0.45em]">
        {date.toLocaleDateString(undefined, options)}
      </div>
    </div>
  );
}

function Button({ item, today }) {
  function containsToday() {
    var i = item.data.length;
    while (i--) {
      const date = item.data[i].date;
      if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      ) {
        return i;
      }
    }
    return null;
  }

  return (
    <Link to={item.to}>
      <button
        className={`${item.color} h-[156.96px] w-[251px] rounded-[20px] flex justify-center items-center shadow-[6px_6px_4px_0_rgba(0,0,0,0.25)] hover:scale-[1.1]`}
      >
        <div className="w-[90px] flex justify-center items-center">
          <img className="" src={item.icon} />
        </div>
        <div className="w-[131.93px] flex flex-col justify-center items-center">
          <div className="font-[Actor] text-[22px]">{item.display}</div>
          <div className="font-[Adamina] text-[42px]">
            {containsToday() !== null
              ? item.data[containsToday()].data.length > 0
                ? item.data[containsToday()].data[item.data[containsToday()].data.length - 1].value.toFixed(1).toString() + item.unit
                : "N/A"
              : "N/A"}
          </div>
        </div>
      </button>
    </Link>
  );
}
