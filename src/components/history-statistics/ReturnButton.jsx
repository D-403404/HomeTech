import React from "react";
import RoundReturnButton from "/src/assets/images/RoundReturnButton.png";

import { Link } from "react-router-dom";

export default function ReturnButton() {
  return (
    // <div className="relative min-w-[1001px]">
    <Link to="/home/history-statistics">
      <img
        className="absolute top-[28px] right-[47px] z-[999]"
        src={RoundReturnButton}
      />
    </Link>
    // </div>
  );
}
