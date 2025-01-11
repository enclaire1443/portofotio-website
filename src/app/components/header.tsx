"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { id: 1, title: "Home", size: "small" },
  { id: 2, title: "About Me", size: "medium" },
  { id: 3, title: "Portfolio", size: "large" },
  { id: 4, title: "Contact Me", size: "small" },
  { id: 5, title: "Experience", size: "medium" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed items-center justify-between z-50">
        <motion.div
          className="text-white font-bold bg-dark-500 rounded-2xl p-[1px] ml-6 mt-4"
          onClick={toggleMenu}
        >
          <button className="gap-4 font-serif font-semibold text-3xl py-2 px-4 text-light-100">
            Fatih
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-6xl w-full"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 flex items-center justify-center text-center ${
                    item.size === "large" ? "md:col-span-2" : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(250, 204, 21, 0.15)" }} // Yellow hover effect
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h2 className="text-2xl font-poppins font-extrabold text-white">
                    {item.title}
                  </h2>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;