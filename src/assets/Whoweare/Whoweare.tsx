import React from "react";
import sittingCharacters from "@/public/Images/sittingChar.png";

const Whoweare = () => {
  return (
    <div className="w-full h-full ml-10 flex flex-col items-center justify-between space-y-10">
      <div className="w-[50%] h-[60%]">
        <img
          src={sittingCharacters}
          alt="character"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full h-full">
        <p className="text-xl text-black font-bold">
          Games and digital entertainment experts working on world class
          products
        </p>
        <p className="text-lg text-black">
          We love building games, tools and pipeline and solving hard problems
          at scale for our clients. Our team has consistently shipped world
          class entertainment products over the past 20 years.
        </p>
      </div>
    </div>
  );
};

export default Whoweare;
