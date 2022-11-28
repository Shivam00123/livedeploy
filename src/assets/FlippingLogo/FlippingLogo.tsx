import React, { memo, useEffect, useState } from "react";
import masalalogo from "@/public/Images/masalalogo.png";
import sittingchar from "@/public/Images/sittingChar.png";

const FlippingLogo = () => {
  return (
    <div className="container">
      <div className="card bg-white">
        <div className="front">
          <img
            src={masalalogo}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(FlippingLogo);
