import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AboutFounder from "../AboutFounder/AboutFounder";
import Projects from "../common/Projects";
import ContactUs from "../ContactUs/ContactUs";
import FlippingLogo from "../FlippingLogo/FlippingLogo";
import Title from "../Title/Title";
import Whoweare from "../Whoweare/Whoweare";

const GridLayout = () => {
  const [expandedElement, setExpandedElement] = useState<number | string>("A");

  const variants: { [key: string]: any } = {
    AClass: {
      gridTemplateColumns:
        "[col1-start] 25% [col2-start] 25% [col3-start] 25% [col4-start] 25% [col4-end]",
      gridTemplateRows:
        "[row1-start] 33% [row2-start] 33% [row3-start] 33% [row3-end]",
    },
    BClass: {
      gridTemplateColumns:
        "[col1-start] 25% [col2-start] 11.5% [col3-start] 11.5% [col4-start] 50% [col4-end]",
      gridTemplateRows:
        "[row1-start] 33% [row2-start] 33% [row3-start] 33% [row3-end]",
    },
    CClass: {
      gridTemplateColumns:
        "[col1-start] 50% [col2-start] 12.5% [col3-start] 12.5% [col4-start] 25% [col4-end]",
      gridTemplateRows:
        "[row1-start] 10% [row2-start] 10% [row3-start] 80% [row3-end]",
    },
    DClass: {
      gridTemplateColumns:
        "[col1-start] 25% [col2-start] 25% [col3-start] 25% [col4-start] 25% [col4-end]",
      gridTemplateRows:
        "[row1-start] 10% [row2-start] 10% [row3-start] 80% [row3-end]",
    },
  };

  const expandElement = (event: { target: any }, id: string = ""): void => {
    let elementId: string | number = event?.target?.id || id;
    if (elementId === "container") {
      return;
    }
    if (Number(elementId)) {
      elementId = "D";
    }

    setExpandedElement(elementId);
  };

  return (
    <motion.div
      initial={{
        gridTemplateColumns:
          "[col1-start] 25% [col2-start] 25% [col3-start] 25% [col4-start] 25% [col4-end]",
        gridTemplateRows:
          "[row1-start] 33% [row2-start] 33% [row3-start] 33% [row3-end]",
      }}
      variants={variants}
      animate={
        expandedElement === "A"
          ? "AClass"
          : expandedElement === "B"
          ? "BClass"
          : expandedElement === "C"
          ? "CClass"
          : expandedElement === "D"
          ? "DClass"
          : "AClass"
      }
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        staggerDirection: -1,
      }}
      id="container"
      className="w-full h-full grid p-8 gap-3 bg-transparent place-content-center"
      onClick={expandElement}
      exit={{ transform: "translateY(-100vh)" }}
    >
      <div
        id="A"
        style={{
          border:
            !expandedElement || expandedElement === "A"
              ? "4px solid #78CCE5"
              : "",
        }}
        className="bg-blue rounded-2xl overflow-hidden cursor-pointer a  p-3"
      >
        <div className="w-full h-full text-2xl flex items-center justify-between pointer-events-none">
          <div className="w-1/3 h-full flex flex-col items-center justify-between space-y-5 flex-shrink-0">
            <Title
              opacity={expandedElement === "A" ? "1" : "0.5"}
              title="Who we are"
            />
            <div
              style={{ width: expandedElement === "A" ? "80%" : "100%" }}
              className="h-full"
            >
              {(expandedElement === "A" ||
                !expandedElement ||
                expandedElement === "B") && <FlippingLogo />}
            </div>
          </div>
          {expandedElement === "A" && <Whoweare />}
        </div>
      </div>
      <div
        style={{
          border: expandedElement === "B" ? "4px solid #ECCF5F" : "",
        }}
        id="B"
        className="bg-yellow rounded-2xl p-2  b relative cursor-pointer"
      >
        <div className="w-full h-full text-2xl  flex flex-col items-center justify-between pointer-events-none">
          <Title
            opacity={expandedElement === "B" ? "1" : "0.5"}
            title="Meet our Founder"
          />
          <div className="w-full h-[80%]">
            <AboutFounder currentClass={expandedElement} />
          </div>
        </div>
      </div>
      <div
        style={{
          border: expandedElement === "C" ? "4px solid #85D4BE" : "",
        }}
        id="C"
        className="bg-green rounded-2xl p-5 text-2xl cursor-pointer c relative"
      >
        <div className="w-full h-full flex flex-col items-center justify-between pointer-events-none">
          <Title
            opacity={expandedElement === "C" ? "1" : "0.5"}
            title="Contact Us"
          />
          <ContactUs currentClass={expandedElement} />
        </div>
      </div>
      <div
        style={{
          border: expandedElement === "D" ? "4px solid #E3D0C2" : "",
        }}
        id="D"
        className="bg-sand rounded-xl text-2xl cursor-pointer d overflow-hidden p-5 po"
      >
        <div className="w-full h-full flex flex-col items-center justify-between pointer-events-none">
          <Title
            opacity={expandedElement === "D" ? "1" : "0.5"}
            title="Our work"
          />
          <Projects expandedElement={expandedElement} />
        </div>
      </div>
    </motion.div>
  );
};

export default GridLayout;
