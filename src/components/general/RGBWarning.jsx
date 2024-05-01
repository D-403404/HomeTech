import React from "react";
import WarningIcon from "/src/assets/images/WarningIcon.png";

export default function RGBWarning({ msg, setError }) {
  return (
    <section>
      <div className="h-[100vh] w-[100vw] fixed top-0 left-0 z-[10000]"></div>
      <div className="warning z-[10001]">
        <div className="w-[15rem] flex justify-center items-center">
          <img className="w-[12.5rem] m-[10px]" src={WarningIcon} />
        </div>
        <div className="h-full grow py-[3rem] flex flex-col justify-around items-center">
          <div className="text-black text-[2rem]">
            <span className="font-main">You must input an integer from </span>
            <span className="font-control font-bold">0</span>
            <span className="font-main"> to </span>
            <span className="font-control font-bold">255</span>
            <span className="font-main"> !</span>
          </div>
          <button
            className="h-[4.4rem] w-[20.7rem] m-[10px] bg-primary rounded-[20px] text-white font-main text-[2rem]"
            onClick={() => {
              console.log("Close modal");
              setError(false);
            }}
          >
            Ok, I understood.
          </button>
        </div>
      </div>
    </section>
  );
}
