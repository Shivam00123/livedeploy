import React from "react";
import swordraising from "@/public/Images/swordraising.png";
import RightToLeftAnimation from "../CharacterAnimation/RightToLeftAnimation/RightToLeftAnimation";

interface Props {
  currentClass?: any;
}

const AboutFounder: React.FC<Props> = ({ currentClass }) => {
  return (
    <div className="w-full h-full relative pointer-events-none">
      {currentClass === "B" && (
        <div className=" w-full h-full  relative">
          <RightToLeftAnimation>
            <img
              src={swordraising}
              alt="character"
              className="w-full h-full object-contain"
            />
          </RightToLeftAnimation>
        </div>
      )}
      {(currentClass === "A" || currentClass === "B") && (
        <div
          style={{
            width: currentClass === "B" ? "70%" : "100%",
            flexDirection: currentClass === "B" ? "row" : "column",
          }}
          className="w-full h-full  absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-between space-x-10"
        >
          <div
            style={{
              width: currentClass === "B" ? "45%" : "60%",
              height: currentClass === "B" ? "90%" : "65%",
            }}
            className="w-[45%] h-[90%] bg-white rounded-xl flex-shrink-0"
          ></div>
          <div
            style={{ alignItems: currentClass === "B" ? "start" : "center" }}
            className="w-full  h-full flex flex-col items-center justify-center text-black 2xl:text-2xl text-lg font-extrabold  -translate-x-5"
          >
            <p className="whitespace-nowrap">Meet Shalin Shodhan</p>
            <p className="whitespace-nowrap mb-2">Director, Masala Games</p>
            {currentClass === "B" && (
              <p className=" lg:text-base text-sm">
                Making games and films since 20 years EA, Pixar, Carnegie Mellon
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutFounder;
