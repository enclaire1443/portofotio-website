'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

function LandingPage() {
  // Text Logic
  const [firstControl, setFirstControl] = useState('hidden');
  const [secondControl, setSecondControl] = useState('hidden');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const firstTextDuration = 3000; 
    const secondTextDelay = firstTextDuration + 1000; 

    setFirstControl('visible');

    const firstTextTimeout = setTimeout(() => {
      setFirstControl('fadeOut');
    }, firstTextDuration);

    const secondTextTimeout = setTimeout(() => {
      setSecondControl('visible');
      setShowButton(true);
    }, secondTextDelay);

    return () => {
      clearTimeout(firstTextTimeout);
      clearTimeout(secondTextTimeout);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-screen">
      <div className="w-full h-screen">
        <div className="fixed inset-0">
          <motion.div
            className="absolute w-full h-full"
            style={{
              backgroundImage: `url('/assets/fototim1.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </div>
      </div>
      <div>
      <motion.div
      className="fixed inset-0 flex justify-center items-center"
      variants={{
        hidden: {left: 0},
        visible: {left: "100%"}
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
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
        className="fixed inset-0 flex justify-center items-center"
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
            transition: { duration: 1, delay: 0.2, ease: 'easeInOut' }, 
            filter: "blur(0px)",
          },
          fadeOut: {
            opacity: 0,
            y: -50,
            transition: { duration: 0.8, delay: 0.5, ease: 'easeInOut' }, 
            filter: "blur(33px)",
          }
        }}
        initial="hidden" 
        animate={firstControl}
        >
        <p className="text-white font-poppins font-extrabold text-center mt-4 text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl">
          Hello, I&apos;m Muhammad Fatih Zamzami
        </p>
      </motion.div>
        </div>


      <motion.div
        className="fixed inset-0 flex justify-center items-center"
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
            transition: { duration: 1, delay: 0.2, ease: 'easeInOut' }, 
            filter: "blur(0px)",
          },
        }}
        initial="hidden"
        animate={secondControl}
      >
        <p className="text-white font-poppins font-extrabold text-center mt-4 text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl">
          Welcome to my journey
        </p>
      </motion.div>

    
      {showButton && (
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center items-center"
          initial={{ 
            opacity: 0, 
            y: 20, 
            filter: "blur(33px)"}}
          animate={{ 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)"}}
          transition={{
            duration: 1.5, 
            ease: 'easeOut',
            delay: 0.3 
          }}
        >
          <button className="bg-gray-800 text-white hover:bg-white hover:text-gray-800 font-poppins font-extrabold py-3 px-6 rounded-full text-xl font-semibold shadow-lg backdrop-blur-sm hover:bg-black/90 transition-colors">
            Discover More
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default LandingPage;