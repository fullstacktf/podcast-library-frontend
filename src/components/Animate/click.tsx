import React, { FC } from "react";
import { motion } from "framer-motion";

export const Click: FC = (props) => (
  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
    {props.children}
  </motion.button>
);
