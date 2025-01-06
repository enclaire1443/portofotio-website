import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function MainPage() {
  const helloRef = useRef(null);
  const isInView = useInView(helloRef, {
    amount: 0.5,
    once: true,
  });

  return (
    <>
      <div className="relative h-screen pt-20">
        {/* Background Section */}
        <div
          className="absolute top-0 right-0 bottom-0 left-0 bg-dark-200"
          style={{
            clipPath: 'polygon(100% 0%, 100% 100%, 50% 100%)',
            zIndex: -1,
          }}
        ></div>

        <motion.div
          ref={helloRef}
          className="absolute top-[30%] left-[10%] flex flex-col sm:flex-row sm:items-center sm:space-x-12 space-y-4 sm:space-y-0 text-white"
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              filter: 'blur(33px)',
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 1 },
            },
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Text Section */}
          <div>
            <p className="font-poppins font-superbold text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Hello! I'm Fatih <span className="text-light-200">.</span>
            </p>
            <p className="font-poppins text-xl font-semibold">
              Electrical Engineering enthusiast.
            </p>
          </div>

          {/* Character Section */}
          <motion.div
            className="flex justify-center items-center px-10"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.5 },
              },
            }}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              className="w-64 h-64"
            >
              {/* Head */}
              <circle cx="150" cy="90" r="50" fill="#F3A04D" />
              {/* Hair */}
              <path d="M100 60 Q150 0 200 60 Q180 30 150 30 Q120 30 100 60" fill="#000" />
              <path d="M100 60 Q150 10 200 60 Q180 40 150 40 Q120 40 100 60" fill="#000" />
              <path d="M100 60 Q150 20 200 60 Q180 50 150 50 Q120 50 100 60" fill="#000" />
              {/* Body */}
              <rect x="100" y="150" width="100" height="80" rx="20" fill="#3B82F6" />
              {/* Eyes */}
              <circle cx="130" cy="80" r="8" fill="#000" />
              <circle cx="170" cy="80" r="8" fill="#000" />
              {/* Mouth */}
              <path
                d="M135 110 Q150 125 165 110"
                stroke="#000"
                strokeWidth="3"
                fill="none"
              />
              {/* Neck */}
              <rect x="140" y="130" width="20" height="20" fill="#F3A04D" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default MainPage;