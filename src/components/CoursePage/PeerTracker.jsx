import React, { useState, useEffect } from 'react';

const data = {
  totalPeers: 145_798,
  exams: [
    { name: 'ICAgile Certified Professional - Agile...', count: 26_095 },
    { name: 'CISSP® (Certified Information Systems...', count: 14_257 },
    { name: 'CompTIA Security+ (SY0-701)', count: 14_108 },
    { name: 'Cisco CCNA: Cisco Certified Network...', count: 12_241 },
    { name: 'CompTIA A+ Core 1 (220-1101)', count: 11_460 },
  ],
};

export default function PeerTracker() {
  const [displayCount, setDisplayCount] = useState(0);
  const [examCounts, setExamCounts] = useState(data.exams.map(() => 0));
  const [barPercents, setBarPercents] = useState(data.exams.map(() => 0));

  // Animate the big total
  useEffect(() => {
    let startTime= null;
    const duration = 2000;
    const start = 0;
    const end = data.totalPeers;

    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }, []);

  // Animate each exam count
  useEffect(() => {
    data.exams.forEach((exam, i) => {
      let startTime: number | null = null;
      const duration = 1500;
      const start = 0;
      const end = exam.count;

      function step(timestamp: number) {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setExamCounts(prev => {
          const next = [...prev];
          next[i] = Math.floor(progress * (end - start) + start);
          return next;
        });
        if (progress < 1) window.requestAnimationFrame(step);
      }

      // stagger slightly if you like:
      setTimeout(() => window.requestAnimationFrame(step), i * 100);
    });
  }, []);

  // Animate bars filling to their relative widths
  useEffect(() => {
    const counts = data.exams.map(e => e.count);
    const max = Math.max(...counts);
    data.exams.forEach((exam, i) => {
      setTimeout(() => {
        setBarPercents(prev => {
          const next = [...prev];
          next[i] = Math.round((exam.count / max) * 100);
          return next;
        });
      }, i * 200 + 300);
    });
  }, []);

  return (
    <div className="bg-gray-200 bg-opacity-60 p-5 rounded-xl w-full max-w-sm mx-auto
                    transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-lg">
      {/* Header */}
      <h2 className="font-bold uppercase">Peer Tracker</h2>
      <div className="border-t border-gray-400/40 my-2" />
      <div className="text-4xl font-bold text-gray-800">
        {displayCount.toLocaleString()}
      </div>
      <p className="text-sm text-gray-700">
        of your peers are preparing for certifications
      </p>
      <div className="border-t border-gray-400/40 my-2" />

      {/* Subheader */}
      <p className="text-sm text-gray-600 mb-3">
        Top exams pursued by your peers in the past 90 days.
      </p>

      {/* Exam List */}
      <div className="space-y-4">
        {data.exams.map((exam, i) => (
          <div key={i}>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 truncate max-w-[60%]">
                {exam.name}
              </span>
              <span className="text-sm font-medium text-gray-800">
                {examCounts[i].toLocaleString()}
              </span>
            </div>
            <div className="h-1 bg-gray-300 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue-300 to-blue-900 animate-pulse"
                style={{ width: `${barPercents[i]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
