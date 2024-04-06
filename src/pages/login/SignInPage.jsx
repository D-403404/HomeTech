import React from "react";
import logo from "./../../assets/images/Logo.png";
import arrow from "./../../assets/images/Arrow1.png";
import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <div className="min-h-[100vh] min-w-[900px] bg-background flex flex-col justify-center items-center">
      <img className="h-[110px] mb-[10px] pr-[90px]" src={logo} />
      <div className="textformat text-[55px] font-sans">SIGN IN</div>
      <SignInForm />
    </div>
  );
}

function SignInForm() {
  return (
    <div className="mt-[10px]">
      <form>
        <div className="flex justify-between items-center p-[15px]">
          <label className="mr-[20px] textformat text-[30px]">Username:</label>
          <input
            className="h-[90px] w-[80vw] max-w-[569px] inputfield"
            placeholder="Username"
            spellCheck="false"
          />
        </div>
        <div className="flex justify-between items-center p-[15px]">
          <label className="mr-[20px] textformat text-[30px]">Password:</label>
          <input
            className="h-[90px] w-[80vw] max-w-[569px] inputfield"
            placeholder="Password"
            spellCheck="false"
            type="password"
          />
        </div>
        <div className="flex justify-center mt-[30px]">
          <button className="button">Sign in</button>
        </div>
      </form>
      <div className="flex justify-center">
        <div className="textformat text-[25px]">Haven't got an account? </div>
        <img src={arrow} className="object-none scale-[0.8]" />
        <Link
          to="/sign-up"
          className="textformat text-[25px] font-bold hover:underline focus:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
