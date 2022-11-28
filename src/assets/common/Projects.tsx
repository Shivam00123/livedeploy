import React, { useEffect, useState, useMemo } from "react";
import About from "./About";
import { projectData } from "@/Data/project";
import useSearchElement from "@/hooks/SearchElement";
import useProjectdata from "@/hooks/use-projectdata";

interface Props {
  id: string;
  children: any;
}

const ProjectCards: React.FC<Props> = ({ id, children }) => {
  return (
    <div
      id={id}
      className="w-1/5 h-[20%]  min-h-[120px]  min-w-[200px] bg-white rounded-3xl pointer-events-auto overflow-hidden relative"
    >
      {children}
    </div>
  );
};

const Projects = (expandedElement: any) => {
  const [data, setData] = useState<{ [key: string]: any }>({});
  const { searchFromArray } = useSearchElement();
  const { getProjectData, useProjectDataState } = useProjectdata();

  useEffect(() => {
    getProjectData();
  }, []);

  const getTheData = (e?: any) => {
    let Id = e?.target?.id;
    const clickedArray = searchFromArray(Id, useProjectDataState?.value);
    setData(clickedArray);
  };

  useMemo(() => {
    if (expandedElement === "D" && !data.id) {
      getTheData();
    }
  }, [expandedElement]);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center mt-2">
      <div
        style={{
          height:
            expandedElement === "C" || expandedElement === "D" ? "30%" : "100%",
        }}
        className="w-full h-full flex justify-center items-center space-x-5"
        onClick={(e) => getTheData(e)}
      >
        {useProjectDataState?.value?.slice(0, 3)?.map((project) => (
          <ProjectCards id={project.id} key={project.id}>
            <img
              src={project.thumbnail}
              alt="thumbnail"
              className="w-[100%] h-[100%] object-cover absolute top-0 pointer-events-none"
            />
          </ProjectCards>
        ))}
      </div>
      {expandedElement === "D" && (
        <div className="w-full h-[70%] mt-3 flex items-center justify-center flex-shrink-0 pointer-events-auto">
          <div className="w-1/2 h-full bg-white rounded-3xl border relative overflow-hidden">
            <About videoUrl={data.videoUrl} mob={false} />
          </div>
          <div className="w-1/2 h-full flex flex-col justify-between items-start p-5">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <h2 className="text-lg font-bold">Description</h2>
            <p className="text-base">{data.desc}</p>
            <button className="text-xl font-bold hover:text-[blue]">
              <u>project link</u>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
{
  /* <div className="w-full h-full flex items-start justify-evenly  space-x-2 mt-2">
  <div
    style={{ height: expandedElement === "C" ? "120%" : "70%" }}
    id="1"
    className="w-[32%] min-w-[242px]  min-h-[110px] bg-white rounded-lg"
  ></div>
  <div
    style={{ height: expandedElement === "C" ? "120%" : "70%" }}
    id="2"
    className="w-[32%]  min-w-[242px] min-h-[110px]  bg-white rounded-lg"
  ></div>
  <div
    style={{ height: expandedElement === "C" ? "120%" : "70%" }}
    id="3"
    className="w-[32%]  min-w-[242px] min-h-[110px]  bg-white rounded-lg"
  ></div>
</div>; */
}
