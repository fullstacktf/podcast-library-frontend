import React, {FC} from "react";
import { motion } from "framer-motion";

type Props = {
  delay: number;
};

const Show: FC<Props> = ({ children, delay }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.4,
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

export default Show;