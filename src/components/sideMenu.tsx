import React from "react";
import { motion } from "framer-motion";

const menuItems = ["Home", "Projects", "Blog", "Recipes"];

const menuVariant = {
  hidden: { opacity: 0, x: "-100vw" },
  show: {
    opacity: 1,
    x: 0,
    transition: { style: "tween", duration: 0.75 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut", duration: 0.75 },
  },
};

const SideMenu = () => {
  return (
    <motion.div
      className="flex flex-col px-10 bg-orange-400 max-h-full w-2/5 rounded-r-full round"
      key={"sideMenu"}
      variants={menuVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {menuItems.map((item) => (
        <button className="my-3 text-4xl text-left">{item}</button>
      ))}
    </motion.div>
  );
};

export default SideMenu;
