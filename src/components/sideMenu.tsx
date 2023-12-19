import React from "react";
import { motion } from "framer-motion";
import ShowModal from "./showModal";

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
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.75 },
  },
};

const SideMenu = () => {
  return (
    <motion.div
      className="flex flex-col px-10 bg-white h-full w-full z-10 absolute top-0  "
      key={"sideMenu"}
      variants={menuVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="mt-40"></div>
      {menuItems.map((item) => (
        <button key={item} className="my-3 text-4xl text-left">
          {item}
        </button>
      ))}
    </motion.div>
  );
};

export default SideMenu;
