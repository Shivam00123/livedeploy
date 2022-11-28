import React, { useState } from "react";
import { motion } from "framer-motion";

import MobileViewGrid from "@/assets/MobileGridLayout/MobileGridLayout";
import masalalogo from "@/public/Images/masalalogo.png";

const WelcomeScreen = () => {
  const [entering, setEntering] = useState<boolean>(false);
  return (
    <div className="w-full h-full">
      {entering ? (
        <MobileViewGrid />
      ) : (
        <motion.div
          initial={{ opacity: "0" }}
          animate={{ opacity: "1" }}
          exit={{ opacity: "0" }}
          className="w-full h-full bg-white grid place-items-center"
        >
          <div className="w-full h-[40%] flex flex-col items-center justify-between space-y-5">
            <div className="w-full h-[90%]">
              <img
                src={masalalogo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <button
              onClick={() => setEntering(true)}
              className="w-1/2 h-[8%] min-h-[40px] bg-green rounded-full text-lg font-bold"
            >
              Enter
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WelcomeScreen;
