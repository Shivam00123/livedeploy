import React from "react";
import swordraising from "@/public/Images/swordraising.png";
import MobTitle from "../MobTitle/MobTitle";

interface Props {
  expandedElement?: any;
}

const Founder: React.FC<Props> = ({ expandedElement }) => {
  return (
    <div className="w-full h-full relative pointer-events-none flex flex-col items-center justify-start">
      {expandedElement === "D" && (
        <div className="absolute h-[63%] w-[90%] -bottom-2 -left-[49%]">
          <img
            src={swordraising}
            alt="character"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {expandedElement === "C" ? (
        <div className="w-[50%] max-w-[40px] min-h-fit h-[40%] rounded-full overflow-hidden translate-x-4 relative mt-3">
          <div className="w-full h-full absolute top-0 bg-white opacity-50"></div>
          <div className="w-full h-full absolute top-0 flex items-center justify-center">
            <h1 className="whitespace-nowrap rotate-90 text-base font-bold">
              founder
            </h1>
          </div>
        </div>
      ) : (
        <div
          style={{
            height:
              expandedElement === "D"
                ? "20%"
                : expandedElement === "A" || !expandedElement
                ? "40%"
                : "100%",
            marginTop:
              expandedElement === "D" || expandedElement === "B"
                ? "0px"
                : "5px",
          }}
          className="w-full h-full p-2 flex items-center justify-center"
        >
          <MobTitle
            title="Meet our founder"
            opacity={expandedElement === "D" ? "0" : "0.5"}
          />
        </div>
      )}
    </div>
  );
};

export default Founder;
{
  /* <div className="w-full h-full relative pointer-events-none">
      {expandedElement === "D" && (
        <div className="absolute h-[70%] w-[90%] -bottom-6 -left-[55%]">
          <img
            src={swordraising}
            alt="character"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {expandedElement === "C" ? (
        <div className="w-[80%] min-h-fit h-1/2 bg-white rounded-full flex items-center justify-center translate-x-5 opacity-50">
          <h1 className="whitespace-nowrap rotate-90 text-xl font-bold">
            Founder
          </h1>
        </div>
      ) : (
        <div
          style={{ opacity: expandedElement === "D" ? "1" : "0.6" }}
          className="w-full h-[15%]  -translate-y-2"
        >
          <MobTitle title="Founder" />
        </div>
      )}
    </div> */
}
