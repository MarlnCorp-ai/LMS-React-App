import automation_anywhere from "../../images/LandingPage/automation-anywhere.png";
import aws_certification from "../../images/LandingPage/AWS-certification.png";
import azure_ai_certification from "../../images/LandingPage/azure-ai-certification.webp";
import cisco_certification from "../../images/LandingPage/cisco CCNA.jpg";
import google_partner from "../../images/LandingPage/google-partners.jpg";
import microsoft_partner from "../../images/LandingPage/microsoft-partner.png";
import oracle_partner from "../../images/LandingPage/Orcale-partner.png";
import pmi_logo from "../../images/LandingPage/pmi-logo.png";
import python_logo from "../../images/LandingPage/python logo.jpg";
import snowflake from "../../images/LandingPage/snowflake.png";
import aws_partner from "../../images/LandingPage/AWS-partner.png";
import databricks_partner from "../../images/LandingPage/Databricks-partner.png";
import googleCloud from "../../images/LandingPage/logos/1.png";
import comptiaA from "../../images/LandingPage/logos/2.png";
import comptiaCASP from "../../images/LandingPage/logos/3.png";
import comptiaCloud from "../../images/LandingPage/logos/4.png";
import ibm from "../../images/LandingPage/logos/5.png";
import kubernetes from "../../images/LandingPage/logos/6.png";
import azureDevOps from "../../images/LandingPage/logos/7.png";
import DevOps from "../../images/LandingPage/logos/8.png";
import github from "../../images/LandingPage/logos/9.png";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

  const courses = [
    {
      source: aws_certification,
      altText: "AWS Certification",
    },
    {
      source: azure_ai_certification,
      altText: "AZURE AI Certification",
    },
    {
      source: cisco_certification,
      altText: "Cisco Certification",
    },
    {
      source: pmi_logo,
      altText: "PMI Certification",
    },
    {
      source: snowflake,
      altText: "Snowflake certification",
    },
    {
      source: python_logo,
      altText: "Python Certification",
    },
    {
      source: googleCloud,
      altText: "Google Cloud",
    },
    {
      source: comptiaA,
      altText: "CompTIA A+",
    },
    {
      source: comptiaCASP,
      altText: "CompTIA CASP+",
    },
    {
      source: comptiaCloud,
      altText: "CompTIA Cloud+",
    },
    {
      source: ibm,
      altText: "IBM",
    },
    {
      source: kubernetes,
      altText: "Kubernetes",
    },
    {
      source: azureDevOps,
      altText: "Azure DevOps",
    },
    {
      source: DevOps,
      altText: "DevOps",
    },
    {
      source: github,
      altText: "GitHub",
    },
  ];

  const partners = [
    {
      source: automation_anywhere,
      altText: "AUTOMATION ANYWHERE",
    },
    {
      source: google_partner,
      altText: "Google",
    },
    {
      source: oracle_partner,
      altText: "ORACLE ",
    },
    {
      source: microsoft_partner,
      altText: "Microsoft",
    },
    {
      source: aws_partner,
      altText: "AWS",
    },
  ];

  const loopItems = [...courses, ...partners];
  
function RevolvingPosters() {
    const stripAnim = useAnimation();
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const [isPaused, setPaused] = useState(false);
  
    // 1) ENTRY pop-in
    useEffect(() => {
      stripAnim.start('entry');
    }, [stripAnim]);
  
    // 2) AUTO yoyo-scroll
    useEffect(() => {
      if (isPaused) return stripAnim.stop();
      stripAnim.start('yoyo');
    }, [isPaused, stripAnim]);
  
    // helpers
    const pause = () => setPaused(true);
    const resume = () => setPaused(false);
  
    // 3) manual arrow scroll by one card+gap
    const CARD_W = 180 + 24; // 180px + gap (24)
    const scrollBy = (dir) => {
      if (!containerRef.current) return;
      stripAnim.start({
        x: `+=${dir * CARD_W}`,
        transition: { type: 'spring', stiffness: 200, damping: 30 }
      });
    };
  
    return (
      <div
        className="relative bg-[rgba(244,247,250,0.9)] py-8 overflow-hidden"
        onMouseEnter={pause} onMouseLeave={resume}
      >
        <h2 className="text-center text-lg font-light font-mulish mb-6">
          Meet partners already using Nexus Hive
        </h2>
  
        {/* Arrows */}
        <button
          aria-label="Previous"
          onClick={() => scrollBy(1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full 
                     hover:bg-opacity-100 focus:outline-none focus:ring"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollBy(-1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full 
                     hover:bg-opacity-100 focus:outline-none focus:ring"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-700" />
        </button>
  
        {/* Scrollable strip */}
        <div
          ref={containerRef}
          className="overflow-x-hidden whitespace-nowrap"
          onPointerDown={pause}
          onPointerUp={resume}
        >
          <motion.div
            style={{ x }}
            className="flex gap-6 w-[200%] will-change-transform cursor-grab"
            initial="hidden"
            animate={stripAnim}
            drag="x"
            dragConstraints={{ left: -window.innerWidth, right: 0 }}
            dragTransition={{ bounceDamping: 20, bounceStiffness: 150 }}
            variants={{
              hidden: {},
              entry: {
                scale: 0.8,
                opacity: 0,
                transition: { duration: 0 }
              },
              yoyo: {
                x: ['0%','-50%','0%'],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'easeInOut'
                  },
                  scale: { duration: 0 } // freeze scale after entry
                }
              }
            }}
          >
            {loopItems.map((logo, i) => (
              <LogoCard key={i} src={logo.source} alt={logo.altText} />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
  
  // A single logo with tilt + spring hover
  function LogoCard({ src, alt }) {
    const imgRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
  
    const handleMove = (e) => {
      const rect = imgRef.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      // max tilt ±10°
      setRotateY((px - 0.5) * 20);
      setRotateX((0.5 - py) * 20);
    };
  
    const handleLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };
  
    return (
      <motion.div
        ref={imgRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="inline-block w-[180px] h-auto p-2 bg-white rounded-lg"
        style={{ perspective: 500 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg"
          style={{ rotateX, rotateY }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    );
  }
  

export default RevolvingPosters;
