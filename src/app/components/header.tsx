"use client";
import React, { useState }from "react"
import { motion } from 'motion/react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonControl = () => {setIsOpen(!isOpen)}

  return (
    <div>
      {!isOpen ? (
      <div className="fixed items-center justify-between z-50">
        <motion.div 
        className="text-white font-bold bg-dark-500 rounded-2xl p-[1px] ml-6 mt-4"
        onClick={buttonControl}>
          <button className="gap-4 font-serif font-semibold text-3xl py-2 px-4 text-light-100">Fatih</button>
        </motion.div>
      </div>
      ) : 
        <div className="relative">
          <div className="absolute inset-0 m-10">
            <motion.div
              className="w-full h-full bg-black rounded-xl"
              onClick={buttonControl}
            />
          </div>
          {/* This invisible div ensures the container respects the full height including margins */}
          <div className="h-screen" />
        </div>
    }
    </div>
  )
}

export default Header