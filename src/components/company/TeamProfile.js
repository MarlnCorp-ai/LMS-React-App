import React, { useState } from 'react';
import team1 from '../../images/team/IMG_3195_enhanced.png';
import team2 from '../../images/team/Nathan Profile picture 2.jpg';
import team3 from '../../images/team/Shadia Zaineddeen_Photo.jpg';

const teamMembers = [
  {
    name: 'Medhat Elsayed',
    title: 'FOUNDER • CEO • STRATEGIST',
    bio: `Medhat Elsayed is a seasoned Business Development Director with over 25 years of expertise spanning ICT, telecommunications, satellite systems, and digital transformation. Known for his strategic acumen and leadership, he has spearheaded major initiatives across the MENA region, forging multinational partnerships and securing high-value contracts. Medhat has held executive roles at top-tier organizations including Informatique, Kyndryl, IBM, and the Egyptian MOD, driving growth, innovation, and operational excellence. His background includes directing Egypt’s national satellite programs, contributing to defense modernization, and leading transformative consulting engagements. Fluent in English, Arabic, and intermediate French, Medhat blends deep technical knowledge with visionary business strategy.`,
    photo: team1,
  },
  {
    name: 'Nathan Maart',
    title: 'CO-FOUNDER • CTO • ARCHITECT',
    bio: `Nathan Maart is a dynamic and results-driven professional with a strong academic foundation, holding both a Bachelor’s and Honours degree from the Cape Peninsula University of Technology. He combines academic excellence with hands-on experience to deliver strategic, high-impact solutions across diverse environments. With a proven track record in leadership, Nathan excels at building strong relationships, fostering collaboration, and navigating complex challenges with clarity and confidence. His passion for innovation and continuous growth positions him as a valuable asset in any venture. Guided by vision, integrity, and dedication, Nathan consistently drives success in every project he undertakes.`,
    photo: team2,
  },
  {
    name: 'Shadia Zaineddeen',
    title: 'CREATIVE DIRECTOR • DESIGNER • UX STRATEGIST',
    bio: `Shadia Zaineddeen is the Executive Director and Consultant at Marln Corp, offering strategic solutions across the GCC market. With over 20 years of global experience in Education, Government Relations, Aerospace, and Defense, she has held key roles with the U.S. Department of Defense and Raytheon Technologies. Shadia specializes in leadership, operations, and business development, and is known for her results-driven approach. She holds degrees in Social Studies and Organizational Leadership and Management. Her work has earned her multiple Meritorious Honor Awards, reflecting her commitment to excellence and impact.`,
    photo: team3,
  },
];

const TeamProfilePage = () => {
  const [expanded, setExpanded] = useState(Array(teamMembers.length).fill(false));

  const toggleBio = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">Meet</p>
      <h1 className="text-5xl font-semibold text-gray-800 mb-20">The Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-left">
        {teamMembers.map((member, index) => {
          const isExpanded = expanded[index];
          const preview = member.bio.slice(0, 240) + '...';

          return (
            <div key={index}>
              <img
                src={member.photo}
                alt={member.name}
                className="w-full aspect-[3/4] object-cover filter grayscale hover:grayscale-0 transition duration-300 mb-6"
              />
              <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-900">
                {member.name}
              </h2>
              <p className="text-sm uppercase tracking-wider text-gray-600 mt-1 mb-4">
                {member.title}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line mb-3">
                {isExpanded ? member.bio : preview}
              </p>
              <button
                onClick={() => toggleBio(index)}
                className="text-blue-600 text-sm font-medium hover:underline focus:outline-none"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamProfilePage;
