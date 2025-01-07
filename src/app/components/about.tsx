"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
function About() {
  return (
    <div className="w-full h-[200vh]">
      <ScreenOne />
      <ScreenTwo />
    </div>
  );
}

export default About;

function ScreenOne() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  // Adjust the scale and opacity for a stronger effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div className="h-screen relative bg-white" ref={targetRef}>
      <motion.div
        style={{
          backgroundImage: `url('/assets/fototim2.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          scale, // Stronger scaling effect
          opacity, // Fading effect
          margin: 50
        }}
        className="absolute inset-0 p-4 rounded-2xl"
      ></motion.div>

      <div className="absolute inset-0 flex justify-center items-center">
        <motion.h1 
        ref={targetRef}
        className="text-9xl text-white font-poppins font-superbold"
        style={{
            scale: scaleText,
            opacity: 1,
        }}>
            About Me
        </motion.h1>
      </div>
    </motion.div>
  );
}

function ScreenTwo() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Make the vertical movement and opacity transition stronger
  const y = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="h-screen flex justify-center items-center bg-gray-100"
    >
      <motion.p
        style={{ y, opacity }}
        className="text-4xl text-black font-poppins"
      >
        Lorem Ipsum dulu yah
      </motion.p>
    </motion.div>
  );
}
