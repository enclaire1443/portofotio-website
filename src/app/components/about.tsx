'use client';
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
  
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
    return (
      <motion.div 
        className="h-screen relative bg-white" 
        ref={targetRef}
        style={{
          scale,
          opacity
        }}
      >
        <motion.div
          style={{
            backgroundImage: `url('/assets/fototim2.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            margin: 60
          }}
          className="absolute inset-0 p-4 rounded-2xl"
        ></motion.div>
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.h1
            ref={targetRef}
            className="font-poppins font-superbold text-white"
            style={{
              scale: scaleText,
              opacity: 1,
              fontSize: 'clamp(5rem, 10vw, 9rem)' 
            }}
          >
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

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="h-screen flex justify-center items-center bg-gray-100"
      style={{ scale }}
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