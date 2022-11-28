import React from "react";
import { projectData } from "@/Data/projectData";
import MobLogo from "../MobLogo/MobLogo";
import MobTitle from "../MobTitle/MobTitle";
import Title from "@/assets/Title/Title";

interface Props {
  expandedElement?: any;
}

const Mobwhoweare: React.FC<Props> = ({ expandedElement }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        style={{
          height: expandedElement === "A" || !expandedElement ? "50%" : "100%",
        }}
        className="w-full"
      >
        {expandedElement !== "B" ? (
          <MobLogo
            showCharacter={expandedElement === "A" || !expandedElement}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <MobTitle
              title="Who we are"
              opacity={
                expandedElement === "A" || !expandedElement ? "1" : "0.5"
              }
            />
          </div>
        )}
      </div>
      {(expandedElement === "A" || !expandedElement) && (
        <div className="w-full h-1/2 flex flex-col items-start justify-between mt-2">
          <h1 className="text-black text-lg font-bold">
            {projectData.gridOneData.title}
          </h1>
          <h2 className="text-black text-sm font-bold">
            {projectData.gridOneData.subTitle}
          </h2>
          <p className="text-black text-xs">
            {projectData.gridOneData.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Mobwhoweare;
