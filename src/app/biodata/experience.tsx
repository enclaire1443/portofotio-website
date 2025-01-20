"use client";
import React from 'react';
import { Reveal } from '../animations/reveal';

const experiences = [
  {
    id: 1,
    title: "Exercise FTUI Intern 2024",
    role: "Software Frontend Developer",
    description: "Practiced and contributed on real web application frontend development using React and TailwindCSS",
  },
  {
    id: 2,
    title: "Indonesian Delegate at 2023 World Scout Jamboree",
    role: "Team Leader",
    description: "Led a team of delegates at the World Scout Jamboree in SaeManGeum, Korea, fostering teamwork and cultural exchange.",
  },
  {
    id: 3,
    title: "Hong Kong International Mathematics Olympiad 2019",
    role: "Bronze Medalist",
    description: "Achieved a bronze medal in the Hong Kong International Mathematics Olympiad, showcasing problem-solving and analytical skills.",
  },
];

function Experience() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-center items-center py-16">
      <div className="text-center mb-12">
        <Reveal>
          <h1 className="font-poppins text-6xl font-extrabold">
            My <span className="text-yellow-400">Experiences</span>
          </h1>
        </Reveal>
      </div>

      <div className="w-full max-w-6xl px-4">
        <div className="space-y-8">
          {experiences.map((experience) => (
            <Reveal key={experience.id}>
              <div className="p-8 rounded-xl shadow-lg bg-white">
                <h2 className="font-poppins text-3xl font-bold text-yellow-400 mb-2">
                  {experience.title}
                </h2>
                <p className="font-poppins text-xl font-semibold text-black mb-4">
                  {experience.role}
                </p>
                <p className="font-poppins text-lg text-gray-700">
                  {experience.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;