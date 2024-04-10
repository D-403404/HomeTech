import React from "react";
import logo from "/src/assets/images/Logo.png";
import arrow from "/src/assets/images/Arrow1.png";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="min-h-[100vh] min-w-[900px] bg-background flex flex-col justify-center items-center">
      <img className="h-[110px] mb-[10px] mt-[36px] pr-[90px]" src={logo} />
      <div className="textformat text-[55px] font-sans">SIGN UP</div>
      <SignUpForm />
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="mt-[10px]">
      <form>
        <InputField
          title={"Full name:"}
          placeholder={"Full name"}
          type={"fullname"}
        />
        <InputField
          title={"Email address:"}
          placeholder={"Email address"}
          type={"email"}
        />
        <div className="flex justify-between items-center p-[29px]">
          <label className="w-[230px] textformat text-[30px]">
            Phone number:
          </label>
          <input
            className="h-[90px] w-[80vw] max-w-[703px] inputfield text-[30px]"
            placeholder="Phone number"
            type="phone"
            required
            onKeyDown={(event) => {
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
            }}
          />
        </div>
        <InputField
          title={"Username:"}
          placeholder={"Username"}
          type={"username"}
        />
        <InputField
          title={"Password:"}
          placeholder={"Password"}
          type={"password"}
        />
        <div className="flex justify-center mt-[30px]">
          <button className="button">Sign up</button>
        </div>
      </form>
      <div className="flex justify-center mb-[36px]">
        <div className="textformat text-[25px]">Already have an account? </div>
        <img src={arrow} className="object-none scale-[0.8]" />
        <Link
          to="/sign-in"
          className="textformat text-[25px] font-bold hover:underline focus:underline"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

function InputField({ title, placeholder, type }) {
  return (
    <div className="flex justify-between items-center p-[29px]">
      <label className="w-[230px] textformat text-[30px]">{title}</label>
      <input
        className="h-[90px] w-[80vw] max-w-[703px] inputfield text-[30px]"
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
}
