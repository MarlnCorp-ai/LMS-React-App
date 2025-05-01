import React, { useState } from 'react';
import team1 from '../../images/team/IMG_3195_enhanced.png';
import team2 from '../../images/team/Nathan Profile picture 2.jpg';
import team3 from '../../images/team/Shadia Zaineddeen_Photo.jpg';
import team4 from '../../images/team/HariniSrinivasan_cover1.jpg';
import team5 from '../../images/team/lovita.png';
import team6 from '../../images/team/jason.jpeg';

const teamMembers = [
  {
    name: 'Medhat Elsayed',
    title: 'FOUNDER • CEO • STRATEGIST',
    bio: `Medhat Elsayed is a seasoned Business Development Director with over 25 years of expertise spanning ICT, telecommunications, satellite systems, and digital transformation. Known for his strategic acumen and leadership, he has spearheaded major initiatives across the MENA region, forging multinational partnerships and securing high-value contracts. Medhat has held executive roles at top-tier organizations including Informatique, Kyndryl, IBM, and the Egyptian MOD, driving growth, innovation, and operational excellence. His background includes directing Egypt’s national satellite programs, contributing to defense modernization, and leading transformative consulting engagements. Fluent in English, Arabic, and intermediate French, Medhat blends deep technical knowledge with visionary business strategy.`,
    photo: team1,
  },
  {
    name: 'Lovita Phukan',
    title: 'CO-FOUNDER ',
    bio: `Lovita Phukan is a visionary leader and the Founder & CEO of Marln Corp, a certified Minority-Owned (NMSDC-MBE) and Women-Owned (SBA WBENC) business. With a passion for innovation and a commitment to excellence, Lovita has spent over a decade helping organizations around the world navigate digital transformation through AI-driven consulting, compliance, and governance solutions.
Her expertise spans artificial intelligence, data privacy, biometric authentication technologies, learning management solutions, governance frameworks, and customer success strategies. Under her leadership, Marln Corp has proudly served Fortune 500 companies, federal clients, and startups across North America, EMEA, GCC, MENA, and Southeast Asia.
Lovita’s educational journey reflects her dedication to continuous learning and leadership. She holds an MBA from Delhi University, a Postgraduate Certificate in Business Administration from the University of California, Berkeley, and is currently pursuing her Juris Doctor (JD) at Northwestern California School of Law — blending business acumen with legal insight to better serve her clients.
Known for her empathetic leadership style, strategic vision, and unwavering drive to foster innovation, Lovita is passionate about building inclusive, secure, and future-ready business ecosystems. At Marln Corp, she continues to empower organizations to lead with confidence in today’s rapidly evolving digital world.`,
    photo: team5,
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
  {
    name: 'Jason Lau',
    title: 'Executive Consultant • APAC ',
    bio: `With over a decade of experience working in global teams at Fortune 500 companies including Microsoft and Siemens, I possess extensive expertise in IT software/hardware, networking, and project management. I have successfully built teams from zero to one with the founder. Currently serving as a Co-founder, I am leading an AI-driven healthcare innovation project, focusing on pioneering solutions that integrate cutting-edge artificial intelligence with health technologies.`,
    photo: team6,
  },
  {
    name: 'Harini',
    title: 'Director • Marketing',
    bio: `Harini Srinivasan is the author of two historical mysteries set in Ancient India, The Curse of Anuganga & Shadows and Secrets: the Pataliputra Conspiracy; the romantic comedies, the recently released Lovestruck and Confused; and The Ex Factor; novella, Death at Arcade Emporia;  a children’s book, The Wizard Tales- Adventures of Bun-Bun and several short stories.
She has been associated with Scholastic Writer’s Academy Programme since 2021 as a mentor/ coach  for children and adults and takes workshops about the nuances of creative writing.
Based on her vast professional experience and as a published author andeditor, Harini Srinivasan offers consultancy services to help individuals and organisations bring out professional and high-quality books (coffee table/ narrative) from concept to execution. The bouquet of services offered under Lekhana Ink Consultancy includes mentoring sessions on the nuances of creative writing, editing, proofreading, design and self-publishing`,
    photo: team4,
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
      <p className="uppercase text-base tracking-widest text-gray-500 mb-2">Meet</p>
      <h1 className="text-6xl font-bold text-gray-800 mb-20">The Team</h1>

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
              <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-900">
                {member.name}
              </h2>
              <p className="text-base uppercase tracking-wider text-gray-600 mt-1 mb-4">
                {member.title}
              </p>
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line mb-3">
                {isExpanded ? member.bio : preview}
              </p>
              <button
                onClick={() => toggleBio(index)}
                className="text-blue-600 text-base font-medium hover:underline focus:outline-none"
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
