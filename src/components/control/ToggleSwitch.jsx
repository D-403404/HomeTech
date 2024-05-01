import React from "react";
import Switch from "react-switch";
import SwitchIcon from "/src/assets/images/SwitchIcon.svg";

export default function ToggleSwitch({ className, switchClassName, title, value, setValue }) {
  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <div className="textformat-control text-[32px]">{title}</div>
      <div className="flex items-center">
        <div className="textformat-control text-[20px]">Off</div>
        <Switch
          checked={value}
          onChange={(checked) => setValue(checked)}
          height={53}
          width={117}
          handleDiameter={45}
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          offColor="#D9D9D9"
          onColor="#D9D9D9"
          offHandleColor="#FF0000"
          uncheckedHandleIcon={<div className="h-full w-full border-[1px] border-primary rounded-[50%] flex justify-center items-center"><img src={SwitchIcon} /></div>}
          onHandleColor="#00FF00"
          checkedHandleIcon={<div className="h-full w-full border-[1px] border-primary rounded-[50%] flex justify-center items-center"><img src={SwitchIcon} /></div>}
          uncheckedIcon={false}
          checkedIcon={false}
          className={`${switchClassName} mx-[10px] border-[1px] border-primary`}
        />
        <div className="textformat-control text-[20px]">On</div>
      </div>
    </div>
  );
}

