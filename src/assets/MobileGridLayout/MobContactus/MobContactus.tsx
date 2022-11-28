import React from "react";
import MobTitle from "../MobTitle/MobTitle";
import readingchar from "@/public/Images/readingchar.png";

interface Props {
  expandedElement?: any;
}

const MobContactus: React.FC<Props> = ({ expandedElement }) => {
  return (
    <div className="w-full h-full relative pointer-events-none flex flex-col items-center justify-start">
      {expandedElement === "C" && (
        <div className="w-[100%] h-[90%] absolute -bottom-[20%] -right-[40%] z-50">
          <img
            src={readingchar}
            alt="character"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {expandedElement === "D" ? (
        <div className="w-[50%] min-h-fit  max-w-[40px] h-[40%] rounded-full overflow-hidden -translate-x-4 relative mt-3">
          <div className="w-full h-full absolute top-0 bg-white opacity-50"></div>
          <div className="w-full h-full absolute top-0 flex items-center justify-center">
            <h1 className="whitespace-nowrap rotate-90 text-base font-bold">
              Contact us
            </h1>
          </div>
        </div>
      ) : (
        <div
          style={{
            height:
              expandedElement === "C"
                ? "20%"
                : expandedElement === "A" || !expandedElement
                ? "40%"
                : "100%",
            marginTop:
              expandedElement === "B" || expandedElement === "C"
                ? "0px"
                : "5px",
          }}
          className="w-full h-full p-2 flex items-center justify-center"
        >
          <MobTitle
            title="Contact us"
            opacity={expandedElement === "C" ? "0" : "0.5"}
          />
        </div>
      )}
    </div>
  );
};

export default MobContactus;
