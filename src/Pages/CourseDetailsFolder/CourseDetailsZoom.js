
import { useState } from "react";

const zoomSessions = [
  {
    title: "Week 10 - April 8 - Python Deep Dive",
    description: "Discussion on advanced Transformer models and their real-world applications.",
    date: "Apr 8, 2025",
    time: "2:00 PM",
    link: "#",
  },
  {
    title: "Week 9 - April 1 - Midterm Review + Translation",
    description: "Class recording covering midterm solutions and machine translation basics.",
    date: "Apr 1, 2025",
    time: "1:30 PM",
    link: "#",
  },
  {
    title: "Week 8 - March 25 - Midterm Day",
    description: "Zoom lecture review before the paper exam in class.",
    date: "Mar 25, 2025",
    time: "3:30 PM",
    link: "#",
  },
];

const CourseZoom = () => {
  const [filter, setFilter] = useState("");

  const filteredSessions = zoomSessions.filter((session) =>
    session.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex-1 p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Zoom Recordings</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Join Live Session
        </button>
      </div>

      <input
        type="text"
        placeholder="Search sessions..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-6"
      />

      <ul className="space-y-4">
        {filteredSessions.map((session, index) => (
          <li key={index} className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-semibold text-blue-700">{session.title}</h2>
              <p className="text-sm text-gray-500">{session.date} • {session.time}</p>
            </div>
            <p className="text-gray-700 mb-2">{session.description}</p>
            <a
              href={session.link}
              className="text-sm text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View Recording
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseZoom;
