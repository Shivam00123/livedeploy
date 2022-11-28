import React, { useEffect, useMemo, useState } from "react";
import About from "../../common/About";
import { projectData } from "@/Data/project";
import MobTitle from "../MobTitle/MobTitle";
import slingshotchar from "@/public/Images/slingshotchar.png";
import useProjectdata from "@/hooks/use-projectdata";
import useSearchElement from "@/hooks/SearchElement";

interface Props {
  id?: string;
  children?: any;
}

const ProjectThumbnail: React.FC<Props> = ({ id, children }) => {
  return (
    <div id={id} className=" w-[100px] h-[70px] bg-white rounded-xl">
      {children}
    </div>
  );
};

const ProjectsMob = (expandElement: any, expandedElement: any) => {
  const [data, setData] = useState<{ [key: string]: any }>({});
  const { getProjectData, useProjectDataState } = useProjectdata();
  const { searchFromArray } = useSearchElement();

  useEffect(() => {
    getProjectData();
  }, []);

  const getTheData = (e?: any) => {
    let Id = e?.target?.id;
    const clickedArray = searchFromArray(Id, useProjectDataState?.value);
    setData(clickedArray);
  };

  useMemo(() => {
    if (expandedElement === "B" && !data.id) {
      getTheData();
    }
  }, [expandedElement]);

  return (
    <div
      className="w-full h-full relative flex flex-col items-center justify-start p-1"
      onClick={(e) => {
        e.stopPropagation();
        expandElement(e, "B");
      }}
    >
      <div className="w-full h-[12%] mt-2 grid place-items-center px-2 mb-5">
        <MobTitle
          title="Our work"
          opacity={expandedElement === "B" ? "0" : "0.5"}
        />
      </div>

      {expandedElement === "B" ? (
        <>
          <div className="w-[90%] h-1/3 rounded-3xl flex-shrink-0 relative overflow-hidden">
            <About videoUrl={data?.videoUrl} mob={true} />
          </div>
          <div className="w-full h-full  flex items-end justify-end mt-5">
            <div
              className="w-[40%] h-full  flex flex-col justify-around items-center"
              onClick={(e) => getTheData(e)}
            >
              {useProjectDataState?.value
                ?.filter((project) => project.id != data.id)
                .map((projectEle) => (
                  <ProjectThumbnail key={projectEle.id} id={projectEle.id}>
                    <img
                      src={projectEle.thumbnail}
                      alt="thumbnail"
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </ProjectThumbnail>
                ))}
            </div>
          </div>
          <div
            style={{ transform: "rotateY(180deg)" }}
            className="absolute w-2/3 h-[40%] -bottom-3 -left-5"
          >
            <img
              src={slingshotchar}
              alt="character"
              className="w-full h-full object-contain"
            />
          </div>
        </>
      ) : (
        <div
          className="w-full h-full flex items-center justify-around"
          onClick={(e) => getTheData(e)}
        >
          {useProjectDataState?.value?.slice(0, 3).map((project) => (
            <ProjectThumbnail key={project.id} id={project.id}>
              <img
                src={project.thumbnail}
                alt="thumbnail"
                className="w-full h-full object-contain pointer-events-none"
              />
            </ProjectThumbnail>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsMob;
