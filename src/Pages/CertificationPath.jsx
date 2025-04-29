// CertificationMap.jsx
import React from 'react';
import { Tab } from '@headlessui/react';
import { ReactComponent as CertIcon } from './icons/cert-icon.svg'; // your icon
import sc900Img from './icons/sc-900.svg';
import sc200Img from './icons/sc-200.svg';
import sc300Img from './icons/sc-300.svg';
import sc400Img from './icons/sc-400.svg';
import pl900Img from './icons/pl-900.svg';
import pl100Img from './icons/pl-100.svg';
import pl200Img from './icons/pl-200.svg';
import winHybridImg from './icons/windows-hybrid.svg';

import ms900Img from './icons/ms-900.svg';
import md102Img from './icons/md-102.svg';
import ms203Img from './icons/ms-203.svg';
import ms700Img from './icons/ms-700.svg';
import ms102Img from './icons/ms-102.svg';

export default function CertificationMap() {
  return (
    <div className="bg-gray-200 bg-opacity-60 min-h-screen p-8 font-sans text-gray-800">
      {/* Header */}
      <header className="flex items-center space-x-3 mb-8">
        <CertIcon className="w-10 h-10 text-blue-600" />
        <div>
          <h1 className="text-2xl font-semibold">Microsoft Certification Prep</h1>
          <p className="text-sm text-gray-600">Prep for 17 certification exams below.</p>
        </div>
      </header>

      {/* Tabs */}
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex space-x-4 border-b border-gray-300 mb-8">
          {['Certification overview map', 'Certification prep content'].map((label, i) => (
            <Tab
              key={i}
              className={({ selected }) =>
                `pb-2 font-medium ${
                  selected
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`
              }
            >
              {label}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      {/* Security Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Microsoft Security</h2>
        <div className="relative">
          {/* Top row */}
          <div className="flex justify-between">
            <Card title="Microsoft Security" subtitle="Security, Compliance, and Identity Fundamentals (SC-900)" icon={sc900Img} />
            <Card title="Microsoft Power Platform" subtitle="Power Platform Fundamentals (PL-900)" icon={pl900Img} />
            <Card title="Microsoft Windows Server Hybrid" subtitle="" icon={winHybridImg} />
          </div>

          {/* Bottom row */}
          <div className="flex justify-between mt-12">
            <div className="flex-1 flex justify-center">
              <Card title="Security Ops Analyst (SC-200)" icon={sc200Img} small />
              <Card title="Identity & Access Admin (SC-300)" icon={sc300Img} small className="ml-8" />
              <Card title="Information Protection Admin (SC-400)" icon={sc400Img} small className="ml-8" />
            </div>
            <div className="flex-1 flex justify-center">
              <Card title="Power Platform App Maker (PL-100)" icon={pl100Img} small />
              <Card title="Functional Consultant (PL-200)" icon={pl200Img} small className="ml-8" />
            </div>
            <div className="flex-1" />
          </div>

          {/* SVG connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* SC-900 → SC-200,300,400 */}
            <line x1="20%" y1="12%" x2="12%" y2="38%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />
            <line x1="20%" y1="12%" x2="28%" y2="38%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />
            <line x1="20%" y1="12%" x2="44%" y2="38%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />

            {/* PL-900 → PL-100,200 */}
            <line x1="50%" y1="12%" x2="60%" y2="38%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />
            <line x1="50%" y1="12%" x2="68%" y2="38%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />
          </svg>
        </div>
      </section>

      {/* Microsoft 365 Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Microsoft 365</h2>
        <div className="relative">
          {/* Top */}
          <div className="flex justify-start">
            <Card title="Microsoft 365 Services" subtitle="Microsoft 365 Fundamentals (MS-900)" icon={ms900Img} />
          </div>

          {/* Middle row */}
          <div className="flex justify-around mt-12">
            <Card title="Desktop MD-102" icon={md102Img} small />
            <Card title="Messaging MS-203" icon={ms203Img} small />
            <Card title="Teams MS-700" icon={ms700Img} small />
          </div>

          {/* Bottom */}
          <div className="flex justify-center mt-12">
            <Card title="Enterprise Administration MS-102" subtitle="Microsoft 365 Admin (MS-102)" icon={ms102Img} />
          </div>

          {/* SVG connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* MS-900 → MD-102,MS-203,MS-700 */}
            <line x1="15%" y1="12%" x2="15%" y2="38%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />
            <line x1="15%" y1="12%" x2="50%" y2="38%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />
            <line x1="15%" y1="12%" x2="85%" y2="38%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />

            {/* OR nodes */}
            <circle cx="35%" cy="60%" r="8" fill="#6B7280" opacity="0.5" />
            <circle cx="50%" cy="60%" r="8" fill="#6B7280" opacity="0.5" />
            <circle cx="65%" cy="60%" r="8" fill="#6B7280" opacity="0.5" />

            {/* MD-102,MS-203,MS-700 → MS-102 */}
            <line x1="15%" y1="49%" x2="50%" y2="75%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />
            <line x1="50%" y1="49%" x2="50%" y2="75%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />
            <line x1="85%" y1="49%" x2="50%" y2="75%" stroke="#6B7280" strokeWidth="2" strokeDasharray="4" />
          </svg>
        </div>
      </section>
    </div>
  );
}

/** Card Component **/
function Card({ title, subtitle, icon: Icon, small = false, className = '' }) {
  return (
    <div
      className={`flex flex-col items-center text-center 
                  ${small ? 'w-40 p-4' : 'w-60 p-6'} 
                  bg-white bg-opacity-80 rounded-lg shadow-md ${className}`}
    >
      <img src={Icon} alt="" className={`${small ? 'h-8 w-8' : 'h-12 w-12'} mb-3`} />
      <h3 className={`${small ? 'text-sm font-semibold' : 'text-lg font-bold'}`}>
        {title}
      </h3>
      {subtitle && (
        <p className={`${small ? 'text-xs text-gray-600' : 'text-sm text-gray-700'} mt-1`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
