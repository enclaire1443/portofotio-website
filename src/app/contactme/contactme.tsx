"use client";
import React from 'react';
import { Reveal } from '../animations/reveal';

const HardSkill = [
  { id: 1, name: "Python, C++", color: "Yellow" },
  { id: 2, name: "JavaScript, React", color: "Black" },
  { id: 3, name: "Word, Excel", color: "Yellow" },
];

const SoftSkill = [
  { id: 1, name: "Problem Solving", color: "Black" },
  { id: 2, name: "Adaptive", color: "Yellow" },
  { id: 3, name: "Team Management", color: "Black" },
];

function Skills() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-center items-center py-16">
      <div className="text-center mb-12">
        <Reveal>
          <h1 className="font-poppins text-6xl font-extrabold">
            My <span className="text-yellow-400">Skills</span>
          </h1>
        </Reveal>
      </div>

      <div className="w-full max-w-6xl px-4">
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
              <Reveal key={skill.id}>
                <div
                  className={`p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 ${
                    skill.color === 'Yellow'
                      ? 'bg-yellow-400 text-black'
                      : 'bg-black text-white'
                  }`}
                >
                  <p className="font-poppins text-2xl font-semibold">
                    {skill.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

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
              <Reveal key={skill.id}>
                <div
                  className={`p-8 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 ${
                    skill.color === 'Yellow'
                      ? 'bg-yellow-400 text-black'
                      : 'bg-black text-white'
                  }`}
                >
                  <p className="font-poppins text-2xl font-semibold">
                    {skill.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;