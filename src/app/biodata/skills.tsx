"use client"
import React, { useEffect } from 'react';
import { motion, useAnimate, stagger } from 'framer-motion';
import { Reveal } from '../animations/reveal';

const HardSkill = [
  { id: 1, name: 'Python, C++', color: 'Yellow' },
  { id: 2, name: 'JavaScript, React', color: 'Black' },
  { id: 3, name: 'Word, Excel', color: 'Yellow' },
];

const SoftSkill = [
  { id: 1, name: 'Problem Solving', color: 'Black' },
  { id: 2, name: 'Adaptive', color: 'Yellow' },
  { id: 3, name: 'Team Management', color: 'Black' },
];

function Skills() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // Animate the cards in sequence
    animate(
      '.skill-card',
      { opacity: 1, y: 0 },
      { delay: stagger(0.2), duration: 0.8 }
    );
  }, [animate]);

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-center items-center py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <Reveal>
          <h1 className="font-poppins text-6xl font-extrabold">
            My <span className="text-yellow-400">Skills</span>
          </h1>
        </Reveal>
      </div>

      {/* Skills Grid */}
      <div ref={scope} className="w-full max-w-6xl px-4">
        {/* Hard Skills Section */}
        <div className="mb-12">
          <div className="flex justify-center">
            <Reveal>
              <h2 className="font-poppins text-4xl font-bold text-center mb-8">
                Hard Skills
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HardSkill.map((skill) => (
              <motion.div
                key={skill.id}
                className={`skill-card p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 opacity-0 translate-y-10 ${
                  skill.color === 'Yellow'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-black text-white'
                }`}
              >
                <p className="font-poppins text-2xl font-semibold">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <div className="flex justify-center">
            <Reveal>
              <h2 className="font-poppins text-4xl font-bold text-center mb-8">
                Soft Skills
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SoftSkill.map((skill) => (
              <motion.div
                key={skill.id}
                className={`skill-card p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 opacity-0 translate-y-10 ${
                  skill.color === 'Yellow'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-black text-white'
                }`}
              >
                <p className="font-poppins text-2xl font-semibold">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;