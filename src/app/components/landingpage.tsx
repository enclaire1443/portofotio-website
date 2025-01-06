'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

function LandingPage() {
  const [firstControl, setFirstControl] = useState('hidden');
  const [secondControl, setSecondControl] = useState('hidden');
  const [thirdControl, setThirdControl] = useState('hidden');

  useEffect(() => {
    const firstTextDuration = 1500; 
    const secondTextDelay = firstTextDuration + 750; 
    const thirdTextDelay = secondTextDelay + 750; 

    setFirstControl('visible');

    const firstTextTimeout = setTimeout(() => {
      setFirstControl('fadeOut');
    }, firstTextDuration);

    const secondTextTimeout = setTimeout(() => {
      setSecondControl('visible');
    }, secondTextDelay);

    const thirdTextTimeout = setTimeout(() => {
      setThirdControl('visible');
    }, thirdTextDelay);

    return () => {
      clearTimeout(firstTextTimeout);
      clearTimeout(secondTextTimeout);
      clearTimeout(thirdTextTimeout);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-screen">
      <div className="w-full h-screen">
        <div className="inset-0">
          <motion.div
            className="absolute w-full h-full"
            style={{
              backgroundImage: `url('/assets/fototim1.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }} 
          />
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
        </div>
      </div>
      <div>
        <motion.div
          className="fixed inset-0 flex justify-center items-center"
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" }
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            ease: "easeIn"
          }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#1f2937",
            zIndex: 20,
          }}
        >
        </motion.div>
        <motion.div
          className="z-20 absolute inset-0 flex justify-center items-center"
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              transition: { duration: 0, ease: 'easeInOut' },
              filter: "blur(33px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2, ease: 'easeInOut' }, 
              filter: "blur(0px)",
            },
            fadeOut: {
              opacity: 0,
              y: -50,
              transition: { duration: 0.6, delay: 0.3, ease: 'easeInOut' }, 
              filter: "blur(33px)",
            }
          }}
          initial="hidden" 
          animate={firstControl}
        >
          <p className="text-white font-poppins font-extrabold text-center mt-4 text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl">
            Welcome to My Digital Playground
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 flex justify-center items-center z-20"
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
            transition: { duration: 0, ease: 'easeInOut' },
            filter: "blur(33px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.2, ease: 'easeInOut' }, 
            filter: "blur(0px)",
          },
        }}
        initial="hidden"
        animate={secondControl}
      >
        <p className="absolute text-white font-poppins font-superbold text-center mt-4 text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl">
          Step into My World of Discovery
        </p>
      </motion.div>

      <motion.div
        className="z-20 absolute bottom-8 left-0 right-0 flex justify-center items-center"
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(33px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
        }}
        initial="hidden"
        animate={thirdControl}
        transition={{
          duration: 0.8, 
          ease: 'easeOut',
          delay: 0.2
        }}
      >
        <p className="text-white font-poppins font-superbold text-center mt-4 text-l sm:text-l md:text-l lg:text-xl xl:text-xl">
          Scroll down for more
        </p>
      </motion.div>
    </div>
  );
}

export default LandingPage;