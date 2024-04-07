import React, { useEffect, useRef, useState } from "react";
import logo from "./../../assets/images/Logo.png";
import icon_dashboard from "./../../assets/images/icon_dashboard.png";
import icon_control from "./../../assets/images/icon_control.png";
import icon_hs from "./../../assets/images/icon_hs.png";
import icon_signout from "./../../assets/images/icon_signout.png";

import user from "../../assets/data/currentUser.json";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const sidebarItems = [
    {
      display: "Dashboard",
      icon: icon_dashboard,
      to: "/home/dashboard",
      section: 'dashboard',
    },
    {
      display: "Device control",
      icon: icon_control,
      to: "/home/device-control",
      section: 'device-control',
    },
    {
      display: "History & Statistics",
      icon: icon_hs,
      to: "/home/history-statistics",
      section: 'history-statistics',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const curPath = window.location.pathname.split('/')[2];
    const idx = sidebarItems.findIndex(item => item.section === curPath);
    setActiveIndex(idx);
    console.log(activeIndex)
  }, [location]);

  return (
    <div className="sidebar overflow-hidden">
      <img className="h-[72.85px] mt-[16px] ml-[25px]" src={logo} />
      <div className="flex justify-center items-center mb-[20px]">
        <img className="h-[2.5em] m-[10px]" src={user.avatar} />
        <div className="textformat text-[22px]">{user.username}</div>
      </div>
      <div className="w-[100%] flex flex-col items-center">
        {sidebarItems.map((item, index) => (
          <Link to={item.to} className="my-[30px]" key={index}>
            <button
              className={`sidebar-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="h-[1rem] px-[20px] content-center">
                <img className={`${activeIndex === index ? "sidebar-icon-active" : "sidebar-icon"}`} src={item.icon} />
              </div>
              <div>{item.display}</div>
            </button>
          </Link>
        ))}
      </div>
      <div className="ml-[40px] mt-[20px] flex items-center">
        <img className="h-[1.5rem] mr-[20px]" src={icon_signout} />
        <Link
          to="/"
          className="textformat text-[22px] hover:underline focus:underline"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
}
