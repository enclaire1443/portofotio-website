"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "../animations/reveal";

function MainPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => setIsExpanded(true);
  const handleClose = () => setIsExpanded(false);

  return (
    <motion.div className="sticky h-screen bg-white" style={{ top: 0 }}>
      <div className="absolute inset-0 bg-gray-50 z-0"></div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 bg-gray-100 z-10"
        style={{ clipPath: "polygon(100% 0%, 100% 100%, 50% 100%)" }}
      ></div>

      <div className="absolute top-[30%] left-[10%] flex flex-col md:flex-row gap-8 md:gap-12 items-center text-gray-800 z-30">
        <div className="overflow-hidden">
          <Reveal>
            <motion.div
              className="flex flex-col items-start space-y-4"
            >
              <motion.div
              >
                <p className="font-poppins font-superbold text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Hello! I'm Fatih<span className="text-yellow-400">.</span>
                </p>
                <p className="font-poppins text-xl font-semibold">
                  And this is my personal &#40;
                  <span className="text-yellow-400">experimental</span>&#41; page
                </p>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
        <motion.div
          ref={ref}
          className="w-40 h-40 bg-yellow-400 rounded-lg flex items-center justify-center z-20"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0,
            rotate: isInView ? 360 : 0,
            transition: { duration: 1, type: "spring" },
          }}
          whileHover={
            !isExpanded
              ? {
                  rotate: [0, 360],
                  scale: [1, 1.02],
                  borderRadius: ["10%", "30%"],
                  transition: {
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }
              : {}
          }
          onClick={handleExpand}
        >
          <div className="absolute">
            <div className="relative flex flex-col items-center">
              <div className="flex justify-between w-12">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="mt-2 w-8 h-2 bg-white rounded-b-full"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {isExpanded && (
        <motion.div className="absolute inset-0 bg-yellow-400 z-40 m-10 rounded-xl py-12 px-16 overflow-y-auto">
          <button
            className="absolute top-4 right-4 font-poppins font-superbold bg-gray-800 text-white py-1 px-2 rounded-lg"
            onClick={handleClose}
          >
            Close
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
            <div className="w-full h-full font-poppins font-superbold bg-white text-gray-800 rounded-lg flex items-center justify-center">
              Pretend
            </div>
            <div className="w-full h-full font-poppins font-superbold bg-white text-gray-800 rounded-lg flex items-center justify-center">
              There Is
            </div>
            <div className="w-full h-full font-poppins font-superbold bg-white text-gray-800 rounded-lg flex items-center justify-center">
              Some good content
            </div>
            <div className="w-full h-full font-poppins font-superbold bg-white text-gray-800 rounded-lg flex items-center justify-center">
              In This Boxes.... Please
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default MainPage;