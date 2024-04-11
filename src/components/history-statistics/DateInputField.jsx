import React, { useEffect, useState } from "react";

export default function DateInputField({
  label,
  type,
  default_1 = null,
  default_2 = null,
  default_3 = null,
  value,
  setValue,
}) {
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
  const [value_1, setValue_1] = useState(default_1);
  const [value_2, setValue_2] = useState(default_2);
  const [value_3, setValue_3] = useState(default_3);

  useEffect(() => {
    console.log(value_1);
    console.log(value_2);
    console.log(value_3);
    if (value_1 === '') setValue_1(default_1);
    if (value_2 === '') setValue_2(default_2);
    if (value_3 === '') setValue_3(default_3);
    if (type === "date") {
      let val1 = parseInt(value_1, 10).toString().padStart(2, "0");
      let val2 = parseInt(value_2, 10).toString().padStart(2, "0");
      let val3 = parseInt(value_3, 10).toString();
      setValue(new Date(`${val3}-${val2}-${val1}T00:00:00`));
    } else {
      let val1 = parseInt(value_1, 10).toString().padStart(2, "0");
      let val2 = parseInt(value_2, 10).toString().padStart(2, "0");
      let val3 = parseInt(value_3, 10).toString().padStart(2, "0");
      setValue(`${val1}:${val2}:${val3}`);
    }
  }, [value_1, value_2, value_3]);

  return (
    <div className="w-[calc(283px+38px)] flex items-center pr-[38px]">
      <div className="pr-[6px] textformat text-[20px]">{label}</div>
      <div className="flex items-center textformat text-[20px]">
        <input
          className="h-[40px] w-[49px] inputfield"
          defaultValue={default_1}
          onKeyDown={acceptOnlyNumber}
          onBlur={(event) => setValue_1(event.target.value)}
        />
        <div className="w-[14px] flex justify-center">
          {" "}
          {type === "date" ? "/" : ":"}{" "}
        </div>
        <input
          className="h-[40px] w-[49px] inputfield"
          defaultValue={default_2}
          onKeyDown={acceptOnlyNumber}
          onBlur={(event) => setValue_2(event.target.value)}
        />
        <div className="w-[14px] flex justify-center">
          {" "}
          {type === "date" ? "/" : ":"}{" "}
        </div>
        <input
          className={
            type === "date"
              ? "h-[40px] w-[65px] inputfield"
              : "h-[40px] w-[49px] inputfield"
          }
          defaultValue={default_3}
          onKeyDown={acceptOnlyNumber}
          onBlur={(event) => setValue_3(event.target.value)}
        />
      </div>
    </div>
  );
}
