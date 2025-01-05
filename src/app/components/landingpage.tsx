'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

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
      <div className="fixed w-full h-20 rounded-b-lg flex items-center justify-between px-8 z-50">
        <div className="text-white font-bold bg-gray-800 rounded-2xl">
          <button className="gap-4 font-serif font-semibold text-3xl py-2 px-4 text-yellow-300">Fatih</button>
        </div>
      </div>

      {/* Background Image - Set to fototim1 */}
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

      {/* First Text */}
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
            transition: { duration: 1, delay: 0.2, ease: 'easeInOut' }, // Reduced duration
            filter: "blur(0px)",
          },
          fadeOut: {
            opacity: 0,
            y: -50,
            transition: { duration: 0.8, delay: 0.5, ease: 'easeInOut' }, // Reduced fade-out duration
            filter: "blur(33px)",
          }
        }}
        initial="hidden" 
        animate={firstControl}
      >
        <p className="text-white font-serif font-bold text-center mt-4 text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
          Hello, I&apos;m Muhammad Fatih Zamzami
        </p>
      </motion.div>

      {/* Second Text */}
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
            transition: { duration: 1, delay: 0.2, ease: 'easeInOut' }, // Reduced duration
            filter: "blur(0px)",
          },
        }}
        initial="hidden"
        animate={secondControl}
      >
        <p className="text-white font-serif font-bold text-center mt-4 text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
          Welcome to my journey
        </p>
      </motion.div>

      {/* Discover Button with Fade In Animation */}
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
            duration: 1.5, // Reduced duration
            ease: 'easeOut',
            delay: 0.3 // Reduced delay
          }}
        >
          <button className="bg-gray-800 text-white hover:bg-white hover:text-gray-800 font-serif py-3 px-6 rounded-full text-xl font-semibold shadow-lg backdrop-blur-sm hover:bg-black/90 transition-colors">
            Discover More
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default LandingPage;