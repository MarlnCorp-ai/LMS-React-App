import React, { useState } from "react";

const students = [
  { name: "Amir Ali", section: "2025S CS 584-A", role: "Student", avatar: "🧑🏽" },
  { name: "Adam Anikiej", section: "2025S CS 584-A", role: "Student", avatar: "🧑🏼" },
  { name: "Aishwarya Bhethanabotla", section: "2025S CS 584-A", role: "Student", avatar: "👩🏽" },
  { name: "Rohi DINESH Bindal", section: "2025S CS 584-A", role: "Student", avatar: "👩🏻" },
  { name: "Jason Casper", section: "2025S CS 584-A", role: "Student", avatar: "🧑🏼" },
  { name: "Bryan Chan", section: "2025S CS 584-A", role: "Student", avatar: "🧑🏻" },
  { name: "Nitin Sunil Chaube", section: "2025S CS 584-A", role: "Student", avatar: "🧑🏽" },
  { name: "Shravan Doda", section: "2025S CS 584-A", role: "Student", avatar: "🧑🏾" },
  { name: "Prudhvinath Dokuparthi", section: "2025S CS 584-A", role: "Student", avatar: "🧑🏿" },
  { name: "Dean Filippone", section: "2025S CS 584-A", role: "Student", avatar: "🧔🏻" },
  { name: "Arjun Gore", section: "2025S CS 584-A", role: "Student", avatar: "🧑🏽" },
];

const CourseDetailsPeople = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">People</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="border px-3 py-1.5 rounded bg-gray-100">Everyone</button>
          <button className="border px-3 py-1.5 rounded">Groups</button>
          <input
            type="text"
            placeholder="Search people..."
            className="border px-3 py-1.5 rounded w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className="border px-3 py-1.5 rounded">
            <option>All Roles</option>
            <option>Student</option>
            <option>Teacher</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Section</th>
              <th className="px-6 py-3">Role</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map((student, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td className="px-6 py-3 flex items-center gap-3">
                  <div className="text-xl">{student.avatar}</div>
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    {student.name}
                  </span>
                </td>
                <td className="px-6 py-3">{student.section}</td>
                <td className="px-6 py-3">{student.role}</td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                  No people found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseDetailsPeople;
