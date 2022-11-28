import React from "react";

interface Props {
  title: string;
  color?: string;
  opacity?: string;
}

const Title: React.FC<Props> = ({ title, opacity = "0.5" }) => {
  return (
    <div className="w-full min-h-[60px] max-h-[100px] rounded-2xl flex-shrink-0 relative overflow-hidden">
      <div
        style={{ opacity: opacity }}
        className="w-full h-full absolute top-0 bg-white opacity-50"
      ></div>
      <div className="w-full h-full absolute top-0  grid place-items-center">
        <h1 className="tracking-wide font-bold text-black">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
