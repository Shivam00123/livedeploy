import React, { useState } from "react";
import { isMobile } from "react-device-detect";

import GridLayout from "@/assets/GridLayout/GridLayout";
import RenderGrid from "./RenderGrid";
import WelcomeScreen from "@/assets/MobileGridLayout/WelcomeScreen/WelcomeScreen";

const GridLayoutContainer = () => {
  return (
    <div
      style={isMobile ? {} : { minHeight: "701px", minWidth: "1276px" }}
      className="w-full h-full  absolute top-0 bg-transparent z-20 overflow-hidden"
    >
      {isMobile ? <WelcomeScreen /> : <RenderGrid />}
    </div>
  );
};

export default GridLayoutContainer;
