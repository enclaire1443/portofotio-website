"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { id: 1, title: "Home", size: "", href: "/mainpage" },
  { id: 2, title: "About Me", size: "large", href: "/about" },
  { id: 3, title: "Portfolio", size: "large", href: "/portfolio" },
  { id: 4, title: "Contact Me", size: "2row", href: "/contactme" },
  { id: 5, title: "Card 1", size: "", href: "/card1" },
  { id: 6, title: "Card 2", size: "", href: "/card2" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="fatih-button"
            className="fixed items-center justify-between z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="text-white font-bold bg-dark-500 rounded-2xl p-[1px] ml-6 mt-4"
              onClick={toggleMenu}
            >
              <button className="gap-4 font-serif font-semibold text-3xl py-2 px-4 text-light-100">
                Fatih
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="expanded-menu"
            className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={toggleMenu}
          >
            <motion.div
              className="absolute top-20 sm:top-40 w-full text-center z-50"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold text-white">
                Where do you want to go?
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-6xl w-full mt-24"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item) => (
                <Link key={item.id} href={item.href}>
                  <motion.div
                    className={`bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 flex items-center justify-center text-center ${
                      item.size === "large"
                        ? "md:col-span-2"
                        : item.size === "2row"
                        ? "md:row-span-2"
                        : "md:col-span-1"
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(250, 204, 21, 0.15)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h2 className="text-2xl font-poppins font-extrabold text-white cursor-pointer">
                      {item.title}
                    </h2>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;