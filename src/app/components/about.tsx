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
      className="relative h-screen bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden"
      style={{ scale }}
    >
      <motion.div
        style={{ y, opacity }}
        className="relative flex flex-col lg:flex-row items-center justify-center w-full h-full space-y-8 lg:space-y-0 lg:space-x-8"
      >
        <div className="flex flex-col justify-center space-y-6 max-w-xl text-center lg:text-left">
          <p className="text-3xl sm:text-5xl text-black font-poppins font-superbold leading-tight">
            I'm Muhammad <span className="text-light-200">Fatih</span> Zamzami
          </p>
          <p className="text-xl sm:text-2xl text-black/80 font-poppins font-extrabold">
            I Study Electrical Engineering at <span className="text-light-200">Universitas Indonesia</span>
          </p>
          <p className="text-lg sm:text-xl text-black/70 font-poppins font-extrabold leading-relaxed">
            I'm a passionate and <span className="text-light-200">Driven</span> individual 
            with a strong interest in technology and innovation. 
            I'm always looking for ways to <span className="text-light-200">Improve and Learn</span> new things.
          </p>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-80 h-96">
            <div className="absolute -top-4 -right-4 w-full h-full bg-light-200/20 rounded-xl" />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-light-200/10 rounded-xl" />
            <div className="relative w-full h-full bg-white rounded -xl overflow-hidden shadow-lg">
              <img
                src="/assets/fotodiri2.jpeg"
                alt="Fatih"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}