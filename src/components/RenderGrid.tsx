import GridLayout from "@/assets/GridLayout/GridLayout";
import WelcomeScreenPc from "@/assets/WelcomeScreenPc/WelcomeScreenPc";
import { useHookstate } from "@hookstate/core";
import React, { useState } from "react";

const RenderGrid = () => {
  const [enteringState, setEnteringState] = useState<boolean>(false);

  const changeEnteringState = () => {
    setEnteringState(true);
  };

  return (
    <>
      {enteringState ? (
        <GridLayout />
      ) : (
        <WelcomeScreenPc func={changeEnteringState} />
      )}
    </>
  );
};

export default RenderGrid;
