import React from "react";
import { motion } from "framer-motion";

const styleContainer = {
  position: "relative",
  width: 50,
  height: 50
};

const styleSpan = {
  display: "block",
  width: 50,
  height: 50,
  border: "7px solid #eee",
  borderTop: "7px solid #DBA54E",
  borderRadius: "50%",
  top: 0,
  left: 0
};

const spinTransition = {
  repeat: Infinity,
  ease: "linear",
  width: ["100%", "100%"],
  duration: 0.95
};

export const ThreeDotsWave = () => {
  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.span
        style={styleSpan}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};

export default ThreeDotsWave;
