"use client"
import React from 'react'
import { motion } from "motion/react"
import { FaDownload } from "react-icons/fa"
import { easeInOut, easeIn } from 'motion'
import { Reveal } from "../animations/reveal"

function Portofolio() {
  return (
    <div className="bg-white w-full h-screen flex items-center">
      <div className="flex-1 flex justify-center items-center">
        <motion.img 
          src="/assets/fotodiri2.jpeg" 
          alt="My Photo" 
          className="w-[70%] h-auto object-cover rounded-2xl"
          initial={{ 
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: easeIn
            }
          }}
          whileHover={{
            scale: 1.01,
            transition: { 
              duration: 0.7, 
              ease: easeInOut 
            },
          }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center items-start px-10 gap-4">
        <Reveal>
        <p className="text-black font-poppins font-superbold text-6xl">
          Hi, I&apos;m <span className="text-yellow-400">Fatih</span>!
        </p>
        </Reveal>
        <Reveal>
        <p className="text-black font-poppins font-semibold text-2xl">
        I have a <span className="text-yellow-400">strong</span> interest in technology, science, and mathematics. I am <span className="text-yellow-400">eager</span> to learn, grow, and build a diverse professional network to support my <span className="text-yellow-400">journey</span>.
        </p>
        </Reveal>
        <Reveal>
        <motion.button
        className="mt-6 px-6 py-3 bg-yellow-400 text-black font-poppins font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-500 transition-colors flex items-center gap-2"
        >
          <FaDownload className="text-xl" />
          Download CV
        </motion.button>
        </Reveal>
      </div>
    </div>
  );
}

export default Portofolio;