import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 0.5 },
};

interface modelProps {
  show: boolean;
}

const ShowModal = ({ show }: modelProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="show"
          className=" opacity-50 bg-black w-screen h-screen bottom-0 left-0 fixed z-10"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShowModal;
