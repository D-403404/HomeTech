import React from "react";
import WarningIcon from "/src/assets/images/WarningIcon.png";

export default function HexWarning({ msg, setError }) {
  return (
    <section>
      <div className="h-[100vh] w-[100vw] fixed top-0 left-0 z-[10000]"></div>
      <div className="warning z-[10001]">
        <div className="w-[20rem] flex justify-center items-center">
          <img className="w-[12.5rem] m-[10px]" src={WarningIcon} />
        </div>
        <div className="h-full grow py-[3rem] flex flex-col justify-around items-center">
          <div className="text-black text-[2rem]">
            <span className="font-main text-center">
              You must input correct form of hexadecimal code for a color !
            </span>
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
