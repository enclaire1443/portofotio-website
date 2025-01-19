"use client"
import React, { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { Reveal } from "../animations/reveal"

function Main() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true })
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => setIsExpanded(true)
  const handleClose = () => setIsExpanded(false)

  return (
    <motion.div className="sticky h-screen bg-white" style={{ top: 0 }}>
      <div className="absolute inset-0 bg-gray-50 z-0"></div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 bg-gray-100 z-10"
        style={{ clipPath: "polygon(100% 0%, 100% 100%, 50% 100%)" }}
      ></div>

      <div className="absolute top-[30%] left-[10%] flex flex-col md:flex-row gap-8 md:gap-12 items-center text-gray-800 z-30">
        <div className="overflow-hidden">
          <Reveal>
            <motion.div
              className="flex flex-col items-start space-y-4"
            >
              <motion.div
              >
                <p className="font-poppins font-superbold text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Hello! I'm Fatih<span className="text-yellow-400">.</span>
                </p>
                <p className="font-poppins text-xl font-semibold">
                  And this is my personal &#40;
                  <span className="text-yellow-400">experimental</span>&#41; page
                </p>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
        <motion.div
          ref={ref}
          className="w-40 h-40 bg-yellow-400 rounded-lg flex items-center justify-center z-20"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0,
            rotate: isInView ? 360 : 0,
            transition: { duration: 1, type: "spring" },
          }}
          whileHover={
            !isExpanded
              ? {
                  rotate: [0, 360],
                  scale: [1, 1.02],
                  borderRadius: ["10%", "30%"],
                  transition: {
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }
              : {}
          }
          onClick={handleExpand}
        >
          <div className="absolute">
            <div className="relative flex flex-col items-center">
              <div className="flex justify-between w-12">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="mt-2 w-8 h-2 bg-white rounded-b-full"></div>
            </div>
          </div>
        </motion.div>
      </div>

<AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute inset-0 z-40 m-4 sm:m-8 md:m-12 rounded-xl py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-20 overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-[#1a1a1a] rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "linear-gradient(45deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
                    "linear-gradient(45deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%)",
                    "linear-gradient(45deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            <motion.button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 font-poppins font-bold bg-[#333333] text-white py-1 sm:py-2 px-2 sm:px-4 rounded-lg hover:bg-[#444444] transition-colors z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={handleClose}
            >
              Close
            </motion.button>

            <motion.div
              className="w-full h-full flex flex-col items-center justify-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.h2
                className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-white text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Inspirational Quote
              </motion.h2>
              <motion.p
                className="font-poppins text-lg sm:text-xl md:text-2xl text-gray-300 italic mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                "Creativity is intelligence having fun."
              </motion.p>
              <motion.button
                className="font-poppins font-semibold bg-[#333333] text-white py-2 px-6 rounded-lg hover:bg-[#444444] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                onClick={() => {
                  const quotes = [
                    "The only limit is your imagination.",
                    "Do what you love, love what you do.",
                    "Simplicity is the ultimate sophistication.",
                    "Every great design begins with an even better story.",
                  ]
                  const randomQuote =
                    quotes[Math.floor(Math.random() * quotes.length)]
                  alert(randomQuote)
                }}
              >
                New Quote
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Main;