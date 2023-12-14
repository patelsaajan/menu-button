"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SideMenu from "../components/sideMenu";

const buttonVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

export default function Home() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <motion.button
        className={`m-10 p-4 border-2 rounded-3xl ${
          menuState ? "border-red-500" : "border-sky-500"
        }`}
        variants={buttonVariant}
        initial="hidden"
        animate="show"
        onClick={() => {
          setMenuState(!menuState);
        }}
      >
        {menuState ? "Close" : "Menu"}
      </motion.button>
      <AnimatePresence>{menuState && <SideMenu />}</AnimatePresence>
    </>
  );
}

const headingVariant = {
  hidden: { opacity: 0, y: "100vh" },
  visable: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 2,
      when: "beforeChildren",
      staggerChildren: 3,
    },
  },
};

const subHeadingVariant = {
  hidden: { opacity: 0, y: "100vh" },
  visable: { opacity: 1, y: 0, transition: { type: "tween", duration: 3 } },
};

{
  /* <motion.div
        className="flex-column text-6xl  text-center mt-20"
        variants={headingVariant}
        initial="hidden"
        animate="visable"
      >
        Hello there
        <motion.div
          className="flex text-4xl justify-center text-center mt-8"
          variants={subHeadingVariant}
        >
          Welcome to the test server
        </motion.div>
        <motion.div
          className="flex text-xl justify-center text-center mt-8"
          variants={subHeadingVariant}
        >
          An example of a menu button utilising framer motion is displayed here.
        </motion.div>
      
      </motion.div> */
}
