'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Header from './components/header';
import LandingPage from './components/landingpage';
import MainPage from './components/mainpage';

const Page = () => {
  const mainPageRef = useRef(null);
  const isInView = useInView(mainPageRef, { 
    amount: 0.5, 
    once: false
  });
  const headerControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      headerControl.start("visible")
    } else{
      headerControl.start("hidden")
    }
  }, [isInView, headerControl]);

  return (
    <div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 20,
            transition: {
            duration: 0.5,
            ease: "easeInOut",
          }},
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
              ease: "easeOut"
            }}
      }}        
        initial={{ opacity: 0, y: 20 }}
        animate={headerControl}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50 
        }}
      >
        <Header />
      </motion.div>
      <LandingPage />
      <div ref={mainPageRef}>
        <MainPage />
      </div>
    </div>
  );
};

export default Page;