import React, { memo, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import slingshotchar from "@/public/Images/slingshotchar.png";
import readingchar from "@/public/Images/readingchar.png";
import LeftToRightAnimation from "../CharacterAnimation/LeftToRightAnimation/LeftToRightAnimation";

interface Props {
  currentClass?: any;
}

const InitialPhase = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-2">
      <p className="text-lg font-bold">follow us</p>
      <div className="w-full h-full flex items-center justify-center space-x-5 -mt-3">
        <div className=" w-12 sm:w-8 sm:h-8 h-12 bg-white rounded-full"></div>
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

const FullPhase = () => {
  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="w-1/2 h-full relative">
        <LeftToRightAnimation>
          <img
            src={readingchar}
            alt="character"
            className="w-full h-full object-contain"
          />
        </LeftToRightAnimation>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-1/2 h-full flex flex-col pointer-events-auto cursor-auto"
      >
        <form
          // onSubmit={sendEmail}
          className="w-full h-2/3  flex-shrink-0 flex flex-col items-start justify-start p-5"
        >
          <h2 className="text-xl mb-2 text-black font-bold">Write to us</h2>
          <textarea
            name="message"
            spellCheck={false}
            className="w-full h-[70%] rounded-lg border-black resize-none p-2 placeholder:text-base text-lg"
            placeholder="hello"
          ></textarea>
          <div className="w-full h-[15%]  mt-2 flex items-center justify-between rounded-full overflow-hidden border border-black relative">
            <div className="w-3/4 h-full flex items-center">
              <input
                name="user_email"
                type="email"
                placeholder="email id"
                className="w-full h-full px-5 placeholder:text-base text-base focus:outline-none"
              />
            </div>
            <button
              type="submit"
              style={{ borderLeft: "1px solid #665752" }}
              className="w-[30%] h-full absolute right-0 border-black rounded-full bg-greenStroke text-base text-black font-bold cursor-pointer"
            >
              send
            </button>
          </div>
        </form>
        <div className="w-full h-full">
          <InitialPhase />
        </div>
      </div>
    </div>
  );
};

const HorizontalPhase = () => {
  return (
    <div className="w-full h-full relative">
      <LeftToRightAnimation>
        <img
          src={slingshotchar}
          alt="charcter"
          className="w-full h-full object-contain"
        />
      </LeftToRightAnimation>
    </div>
  );
};

const ContactUs: React.FC<Props> = ({ currentClass }) => {
  const [currentPhase, setCurrentPhase] = useState<string>("initial");

  const sendEmail = (e: any) => {
    e.preventDefault();
    // console.log({ name: e.target.user_email });

    // emailjs
    //   .sendForm(
    //     "service_6syek1s",
    //     "template_ftfmt4s",
    //     e.target,
    //     "kAJrkM0KueyzUP8w-"
    //   )
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!currentClass || currentClass === "A" || currentClass === "B") {
      setCurrentPhase("initial");
    } else if (currentClass === "C") {
      setCurrentPhase("fullphase");
    } else {
      setCurrentPhase("horizontalphase");
    }
  }, [currentClass]);

  return (
    <div className="w-full h-[80%]">
      {currentPhase === "initial" && <InitialPhase />}
      {currentPhase === "fullphase" && <FullPhase />}
      {currentPhase === "horizontalphase" && <HorizontalPhase />}
    </div>
  );
};

export default memo(ContactUs);
