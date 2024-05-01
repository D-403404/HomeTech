import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import RGBWarning from "/src/components/general/RGBWarning";
import HexWarning from "/src/components/general/HexWarning";

class OutOfRange extends Error {
  constructor(msg) {
    super(msg);
    this.name = "OutOfRange";
  }
}

class InvalidHexFormat extends Error {
  constructor(msg) {
    super(msg);
    this.name = "InvalidHexFormat";
  }
}

export default function ColorPalette({
  rgb_to_hex,
  hex_to_rgb,
  defaultColor,
  defaultHex,
  red,
  setRed,
  green,
  setGreen,
  blue,
  setBlue,
  mode,
  setMode,
  hex,
  setHex,
  color,
  setColor,
}) {
  const [rgbError, setRgbError] = useState(false);
  const [hexError, setHexError] = useState(false);

  return (
    <div>
      <div className="flex justify-center textformat-control text-[32px]">
        COLOR
      </div>
      <div className="h-[385px] w-[631px] flex border-[1px] border-primary rounded-[20px]">
        <div className="h-full w-[50%] flex justify-center items-center">
          <div
            className="w-[233px] aspect-[1/1] border-[1px] border-primary rounded-[50%]"
            style={{ backgroundColor: `#${color}` }}
          ></div>
        </div>
        <div className="h-full w-[50%] flex flex-col">
          <div className="h-[40%] w-full flex justify-center items-center">
            <ModeSwitch value={mode} setValue={setMode} />
          </div>
          <div className="grow flex justify-center items-center">
            {!mode ? (
              <RGBInput
                rgb_to_hex={rgb_to_hex}
                hex_to_rgb={hex_to_rgb}
                defaultColor={defaultColor}
                red={red}
                setRed={setRed}
                green={green}
                setGreen={setGreen}
                blue={blue}
                setBlue={setBlue}
                setHex={setHex}
                color={color}
                setColor={setColor}
                setError={setRgbError}
              />
            ) : (
              <HexInput
                rgb_to_hex={rgb_to_hex}
                hex_to_rgb={hex_to_rgb}
                defaultHex={defaultHex}
                hex={hex}
                setHex={setHex}
                setRed={setRed}
                setGreen={setGreen}
                setBlue={setBlue}
                color={color}
                setColor={setColor}
                setError={setHexError}
              />
            )}
          </div>
        </div>
      </div>
      {rgbError && <RGBWarning setError={setRgbError} />}
      {hexError && <HexWarning setError={setHexError} />}
    </div>
  );
}

function ModeSwitch({ className, value, setValue }) {
  return (
    <div className={`${className} flex items-center`}>
      <div className="textformat-control text-[20px]">RGB</div>
      <Switch
        checked={value}
        onChange={(checked) => setValue(checked)}
        height={53}
        width={117}
        handleDiameter={45}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        offColor="#D9D9D9"
        onColor="#D9D9D9"
        uncheckedHandleIcon={
          <div className="h-full w-full border-[1px] border-primary rounded-[50%]"></div>
        }
        checkedHandleIcon={
          <div className="h-full w-full border-[1px] border-primary rounded-[50%]"></div>
        }
        uncheckedIcon={false}
        checkedIcon={false}
        className="mx-[10px] border-[1px] border-primary"
      />
      <div className="textformat-control text-[20px]">Hex</div>
    </div>
  );
}

function RGBInput({
  rgb_to_hex,
  hex_to_rgb,
  defaultColor,
  red,
  setRed,
  green,
  setGreen,
  blue,
  setBlue,
  setHex,
  color,
  setColor,
  setError,
}) {
  function checkInput(str) {
    if (!/^[0-9]+$/.test(str) || parseInt(str) > 255) throw new OutOfRange();
  }

  return (
    <div className="flex flex-col">
      <div className="p-[11px] flex items-center">
        <div className="w-[58px] text-red font-main text-[20px]">Red</div>
        <input
          className="h-[40px] w-[73px] px-[20px] inputfield text-main font-control font-bold text-[20px] text-right border-red"
          //   defaultValue={defaultColor.red}
          value={red}
          onChange={(event) => {
            setRed(event.target.value);
          }}
          onBlur={(event) => {
            try {
              checkInput(red);
              setHex(rgb_to_hex(red, green, blue));
              setColor(rgb_to_hex(red, green, blue));
            } catch (error) {
              console.log(error);
              setError(true);
              setRed(hex_to_rgb(color).red.toString());
            }
          }}
        />
      </div>
      <div className="p-[11px] flex items-center">
        <div className="w-[58px] text-green font-main text-[20px]">Green</div>
        <input
          className="h-[40px] w-[73px] px-[20px] inputfield text-main font-control font-bold text-[20px] text-right border-green"
          //   defaultValue={defaultColor.green}
          value={green}
          onChange={(event) => {
            setGreen(event.target.value);
          }}
          onBlur={(event) => {
            try {
              checkInput(green);
              setHex(rgb_to_hex(red, green, blue));
              setColor(rgb_to_hex(red, green, blue));
            } catch (error) {
              console.log(error);
              setError(true);
              setGreen(hex_to_rgb(color).green.toString());
            }
          }}
        />
      </div>
      <div className="p-[11px] flex items-center">
        <div className="w-[58px] text-blue font-main text-[20px]">Blue</div>
        <input
          className="h-[40px] w-[73px] px-[20px] inputfield text-main font-control font-bold text-[20px] text-right border-blue"
          //   defaultValue={defaultColor.blue}
          value={blue}
          onChange={(event) => {
            setBlue(event.target.value);
          }}
          onBlur={(event) => {
            try {
              checkInput(blue);
              setHex(rgb_to_hex(red, green, blue));
              setColor(rgb_to_hex(red, green, blue));
            } catch (error) {
              console.log(error);
              setError(true);
              setBlue(hex_to_rgb(color).blue.toString());
            }
          }}
        />
      </div>
    </div>
  );
}

function HexInput({
  rgb_to_hex,
  hex_to_rgb,
  defaultHex,
  hex,
  setHex,
  setRed,
  setGreen,
  setBlue,
  color,
  setColor,
  setError,
}) {
  function checkInput(str) {
    if (str.length !== 6 || /[^0-9a-fA-F]/.test(str))
      throw new InvalidHexFormat();
  }

  return (
    <div className="flex flex-col items-center">
      <div className="textformat-control text-[20px]">Hexadecimal code</div>
      <div className="p-[11px] flex items-center">
        <div className="pr-[5px] text-primary font-control font-bold text-[20px]">
          #
        </div>
        <input
          className="h-[40px] w-[95px] px-[15px] inputfield text-main font-control font-bold text-[20px] text-right border-main"
          //   defaultValue={defaultHex}
          value={hex}
          onChange={(event) => {
            setHex(event.target.value);
          }}
          onBlur={(event) => {
            try {
              checkInput(hex);
              setColor(hex);
              const res = hex_to_rgb(hex);
              setRed(res.red.toString());
              setGreen(res.green.toString());
              setBlue(res.blue.toString());
            } catch (error) {
              console.log(error);
              setError(true);
              setHex(color);
            }
          }}
        />
      </div>
    </div>
  );
}
