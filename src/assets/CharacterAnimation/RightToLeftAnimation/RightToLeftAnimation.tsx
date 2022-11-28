import React from "react";
import { motion } from "framer-motion";
import { ChildrenProps } from "@/Interface/children";

const RightToLeftAnimation: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ left: "150%", bottom: "0" }}
      animate={{ left: "-65%", bottom: "-20px" }}
      transition={{ duration: 3, stiffness: 80, type: "spring", delay: 0.5 }}
      className="absolute w-full h-[120%] z-50"
    >
      {children}
    </motion.div>
  );
};

export default RightToLeftAnimation;
