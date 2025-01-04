'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

function LandingPage() {
  // Carousel Logic 
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/assets/fototim1.jpeg',
    '/assets/fototim2.jpeg',
    '/assets/fototim3.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Text Logic
  const [firstControl, setFirstControl] = useState('hidden');
  const [secondControl, setSecondControl] = useState('hidden');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const firstTextDuration = 4500;
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
    <div className="relative w-full overflow-hidden h-screen scrollbar-hide">
      <div className="fixed inset-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        ))}
      </div>
      
      {/* First Text */}
      <motion.div
        className="fixed inset-0 flex justify-center items-center"
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
            transition: { duration: 0, ease: 'easeInOut' },
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, delay: 0.2, ease: 'easeInOut' },
          },
          fadeOut: {
            opacity: 0,
            y: -50,
            transition: { duration: 1, delay: 1, ease: 'easeInOut' },
          }
        }}
        initial="hidden" 
        animate={firstControl}
      >
        <p className="text-white font-serif font-bold text-center mt-4 text-9xl md:text-3xl">
          Hello, I'm Muhammad Fatih Zamzami
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
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, delay: 0.2, ease: 'easeInOut' },
          },
        }}
        initial="hidden"
        animate={secondControl}
      >
        <p className="text-white font-serif font-bold text-center mt-4 text-9xl md:text-3xl">
          Welcome to my journey
        </p>
      </motion.div>

      {/* Discover Button with Fade In Animation */}
      {showButton && (
        <motion.div
          className="absolute bottom-0 mb-8 left-1/2 transform flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: 'easeOut',
            delay: 0.5 
          }}
        >
          <button className="bg-black/80 text-white font-serif py-3 px-6 rounded-full text-xl font-semibold shadow-lg backdrop-blur-sm hover:bg-black/90 transition-colors">
            Discover More
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default LandingPage;