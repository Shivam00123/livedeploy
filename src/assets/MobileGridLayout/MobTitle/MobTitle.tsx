import React from "react";

interface Props {
  title: string;
  opacity?: string;
}

const MobTitle: React.FC<Props> = ({ title, opacity = "0.5" }) => {
  return (
    <div className="w-full h-full min-h-[40px] max-h-[60px]  grid place-items-center rounded-[30px] relative overflow-hidden">
      <div
        style={{ opacity: opacity }}
        className="w-full h-full absolute top-0 bg-white"
      ></div>
      <div className="w-full h-full absolute top-0 grid place-items-center">
        <h1 className="tracking-wide font-bold text-black text-base">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default MobTitle;
