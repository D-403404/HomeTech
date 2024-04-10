import React from "react";

export default function DateInputField({ label, type }) {
  function acceptOnlyNumber(event) {
    if (
      ![
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
      ].includes(event.key) &&
      !/[0-9]/.test(event.key)
    ) {
      event.preventDefault();
    }
  }
  return (
    <div className="w-[calc(283px+38px)] flex items-center pr-[38px]">
      <div className="pr-[6px] textformat text-[20px]">{label}</div>
      <div className="flex items-center textformat text-[20px]">
        <input
          className="h-[40px] w-[49px] inputfield"
          onKeyDown={acceptOnlyNumber}
        />
        <div className="w-[14px] flex justify-center"> {type === 'date' ? '/' : ':'} </div>
        <input
          className="h-[40px] w-[49px] inputfield"
          onKeyDown={acceptOnlyNumber}
        />
        <div className="w-[14px] flex justify-center"> {type === 'date' ? '/' : ':'} </div>
        <input
          className={`h-[40px] w-[${
            type === "date" ? "61" : "49"
          }px] inputfield`}
          onKeyDown={acceptOnlyNumber}
        />
      </div>
    </div>
  );
}
