"use clinet";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function MainPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  return (
    <div className="relative h-screen pt-20 bg-dark-300">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 bg-dark-200"
        style={{
          clipPath: "polygon(100% 0%, 100% 100%, 50% 100%)",
          zIndex: 0,
        }}
      ></div>

      <div className="absolute top-[30%] left-[10%] flex flex-col gap-28 md:flex-row items-center md:space-x-8 text-white">
        <div className="overflow-hidden"> 
        <motion.div
          ref={ref}
          className="flex flex-col items-start space-y-4"
          initial={"hidden"}
          animate={"visible"}
          whileHover={ "hovered" }
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
              color: "#000000", // Change text color to red
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },}
          }}>
          <p className="font-poppins font-superbold text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Hello! I'm Fatih<span className="text-light-200">.</span>
          </p>
          <p className="font-poppins text-xl font-semibold">
            And this is my personal &#40;experimental&#41; page
          </p>
          </motion.div>
        </motion.div>
        </div>
        <motion.div
          ref={ref}
          className="relative w-40 h-40 bg-light-200 rounded-lg mt-8 md:mt-0 flex items-center justify-center"
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
          whileHover={{
            rotate: [0, 0, 90, 90, 180, 0],
            scale: [1, 1.05, 1.05, 1, 1, 1],
            borderRadius: ["10%", "10%", "50%", "50%", "50%", "10%"],
            transition: {
              rotate: { duration: 4, ease: "easeInOut", repeat: Infinity },
              scale: { duration: 0.6, ease: "easeInOut" },
              borderRadius: { duration: 0.6, ease: "easeInOut" },
            },
          }}
        >
          <div className="absolute">
            <div className="relative flex flex-col items-center">
              {/* Eyes */}
              <div className="flex justify-between w-12">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              {/* Mouth */}
              <div className="mt-2 w-8 h-2 bg-white rounded-b-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MainPage;