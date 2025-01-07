"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import { Reveal } from '../animations/reveal'; 

function MainPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => setIsExpanded(true);
  const handleClose = () => setIsExpanded(false);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div 
      className="h-screen relative bg-white" 
      ref={targetRef}
      style={{
        scale,
        opacity
      }}
    >
      <div className="absolute inset-0 bg-dark-300 z-0"></div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 bg-dark-200 z-10"
        style={{
          clipPath: "polygon(100% 0%, 100% 100%, 50% 100%)",
        }}
      ></div>

      <div className="absolute top-[30%] left-[10%] flex flex-col md:flex-row gap-8 md:gap-12 items-center text-white z-30">
        <div className="overflow-hidden">
          <Reveal>
            <motion.div
              ref={ref}
              className="flex flex-col items-start space-y-4"
              initial={"hidden"}
              animate={"visible"}
              whileHover={"hovered"}
            >
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                  },
                  visible: {
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 50,
                    transition: { duration: 1 },
                  },
                  hovered: {
                    background: "#FFFFFF",
                    opacity: 1,
                    y: "0%",
                    color: "#000000",
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <p className="font-poppins font-superbold text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Hello! I'm Fatih<span className="text-light-200">.</span>
                </p>
                <p className="font-poppins text-xl font-semibold">
                  And this is my personal &#40;<span className="text-light-200">experimental</span>&#41; page
                </p>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
        <motion.div
          ref={ref}
          className="w-40 h-40 bg-light-200 rounded-lg flex items-center justify-center z-20"
          initial={{
            opacity: 0,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0,
            rotate: isInView ? 360 : 0,
            transition: { duration: 1, type: "spring" },
          }}
          whileHover={
            !isExpanded
              ? {
                  rotate: [0, 0, 90, 90, 180, 0],
                  scale: [1, 1.05, 1.05, 1, 1, 1],
                  borderRadius: ["10%", "10%", "50%", "50%", "50%", "10%"],
                  transition: {
                    rotate: { duration: 4, ease: "easeInOut", repeat: Infinity },
                    scale: { duration: 0.6, ease: "easeInOut" },
                    borderRadius: { duration: 0.6, ease: "easeInOut" },
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
        <motion.div className="absolute inset-0 bg-light-200 z-40 m-10 rounded-xl py-12 px-16 overflow-y-auto">
          <button
            className="absolute top-4 right-4 font-poppins font-superbold bg-dark-300 text-white py-1 px-2 rounded-lg"
            onClick={handleClose}
          >
            Close
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
            <div className="w-full h-full font-poppins font-superbold bg-light-300 rounded-lg flex items-center justify-center">
              Pretend
            </div>
            <div className="w-full h-full font-poppins font-superbold bg-light-300 rounded-lg flex items-center justify-center">
              There Is
            </div>
            <div className="w-full h-full font-poppins font-superbold bg-light-300 rounded-lg flex items-center justify-center">
              Some good content
            </div>
            <div className="w-full h-full font-poppins font-superbold bg-light-300 rounded-lg flex items-center justify-center">
              In This Boxes.... Please
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default MainPage;