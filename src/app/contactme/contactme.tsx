"use client"
import React from 'react'
import { motion, easeInOut } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fatihzamzami',
    icon: faLinkedin,
    bgColor: 'bg-blue-400',
  },
  {
    name: 'Line',
    url: 'https://line.me/ti/p/haiinifatih',
    icon: faLine,
    bgColor: 'bg-green-400',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/fthzami',
    icon: faInstagram,
    bgColor: 'bg-pink-400',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/enclaire1443',
    icon: faGithub,
    bgColor: 'bg-blue-800',
  },
]

function ContactMe() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-7xl font-poppins font-superbold text-gray-900">Get in Touch</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${social.name}`}
            className={`${social.bgColor} h-24 sm:h-32 md:h-40 rounded-lg flex justify-center items-center`}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3, ease: easeInOut }}
          >
            <FontAwesomeIcon icon={social.icon} className="text-white text-4xl sm:text-6xl md:text-8xl" />
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default ContactMe