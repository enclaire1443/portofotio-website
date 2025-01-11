'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import Header from './components/header';
import LandingPage from './components/landingpage';
import MainPage from './components/mainpage';
import About from './components/about';
import Lenis from '@studio-freight/lenis';

const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: 0.8, 
    once: false
  });
  const headerControl = useAnimation();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
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
            },
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          },
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={headerControl}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
        }}
      >
        <Header />
      </motion.div>

      <div ref={ref}>
        <LandingPage />
      </div>
      <div className="h-[100vh]">
        <MainPage />
      </div>

      <About />
    </div>
  );
};

export default Page;