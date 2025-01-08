import React, { useState }from "react"
import { motion } from 'framer-motion'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonControl = () => {setIsOpen(!isOpen)}

  return (
    <div>
      <div className="fixed w-full h-20 rounded-b-lg flex items-center justify-between px-8 z-50">
        <motion.div 
        className="text-white font-bold bg-dark-500 rounded-2xl"
        onClick={buttonControl}>
          <button className="gap-4 font-serif font-semibold text-3xl py-2 px-4 text-light-100">Fatih</button>
        </motion.div>
      </div>

      { isOpen && (
        <div className="absolute top-20 left-0 w-full h-screen bg-dark-500"></div>
      )
      }
    </div>
  )
}

export default Header