import React, { useState } from "react";

// Sample data for assignments
const assignmentsData = {
  upcoming: [
    {
      id: 1,
      title: "Quiz 6 - attention and transformer",
      availability: "Available until May 6 at 5:59 pm",
      dueDate: "Due Apr 15 at 3:30pm",
      points: "-/20 pts",
    },
    {
      id: 2,
      title: "Assignment 4 - Machine Translation",
      availability: "Available until May 6 at 5:59 pm",
      dueDate: "Due Apr 29 at 3:30pm",
      points: "-/100 pts",
    },
    {
      id: 3,
      title: "Course Project - Final Report and Presentation (with Code)",
      availability: "Available until May 6 at 5:59 pm",
      dueDate: "Due May 6 at 3:30pm",
      points: "-/25 pts",
    },
  ],
  undated: [
    {
      id: 4,
      title: "Quiz for Attendance - Feb. 25",
      points: "1/1 pts",
    },
  ],
  past: [
    {
      id: 5,
      title: "Assignment 3 - Language Modeling",
      availability: "Available until May 6 at 5pm",
      dueDate: "Due Apr 8 at 3:30pm",
      points: "-/100 pts",
      status: "Not Yet Graded",
    },
    {
      id: 6,
      title: "Quiz 5 - Machine translation and Seq2seq",
      availability: "Available until May 6 at 5pm",
      dueDate: "Due Apr 8 at 3:30pm",
      points: "-/20 pts",
      status: "Not Yet Graded",
    },
  ],
};

const CourseAssignment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [collapsedSections, setCollapsedSections] = useState({
    upcoming: false,
    undated: false,
    past: false,
  });

  // Filter and search logic
  const filteredAssignments = (section) => {
    return section.filter((assignment) =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Toggle collapsible sections
  const toggleSection = (sectionName) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div
        className="p-6 mb-6 rounded-lg text-white"
        style={{
          background:
            "linear-gradient(90deg, rgba(79,70,229,1) 0%, rgba(124,58,237,1) 100%)",
        }}
      >
        <h1 className="text-2xl font-bold mb-4">Assignments</h1>
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search assignments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full lg:w-auto px-6 py-3 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Filter Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => setFilterBy("date")}
              className={`px-6 py-2 rounded-full ${
                filterBy === "date"
                  ? "bg-white text-purple-600 shadow-md"
                  : "bg-transparent text-white border border-white hover:bg-white hover:text-purple-600"
              } transition duration-300`}
            >
              Show by Date
            </button>
            <button
              onClick={() => setFilterBy("type")}
              className={`px-6 py-2 rounded-full ${
                filterBy === "type"
                  ? "bg-white text-purple-600 shadow-md"
                  : "bg-transparent text-white border border-white hover:bg-white hover:text-purple-600"
              } transition duration-300`}
            >
              Show by Type
            </button>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {/* Upcoming Assignments */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("upcoming")}
          >
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-purple-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM12 8a2 2 0 11-4 0 2 2 0 014 0zM16 8a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Upcoming Assignments
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-gray-500 transform transition-transform ${
                collapsedSections.upcoming ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {!collapsedSections.upcoming && (
            <ul className="mt-4 space-y-4">
              {filteredAssignments(assignmentsData.upcoming).map((assignment) => (
                <li
                  key={assignment.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600 mr-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {assignment.availability} | {assignment.dueDate} |{" "}
                        {assignment.points}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Undated Assignments */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("undated")}
          >
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-purple-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM12 8a2 2 0 11-4 0 2 2 0 014 0zM16 8a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Undated Assignments
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-gray-500 transform transition-transform ${
                collapsedSections.undated ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {!collapsedSections.undated && (
            <ul className="mt-4 space-y-4">
              {filteredAssignments(assignmentsData.undated).map((assignment) => (
                <li
                  key={assignment.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600 mr-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-gray-500">{assignment.points}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Past Assignments */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("past")}
          >
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-purple-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM12 8a2 2 0 11-4 0 2 2 0 014 0zM16 8a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Past Assignments
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-gray-500 transform transition-transform ${
                collapsedSections.past ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {!collapsedSections.past && (
            <ul className="mt-4 space-y-4">
              {filteredAssignments(assignmentsData.past).map((assignment) => (
                <li
                  key={assignment.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600 mr-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {assignment.availability} | {assignment.dueDate} |{" "}
                        {assignment.points}
                      </p>
                      {assignment.status && (
                        <p className="text-sm text-gray-500 mt-1">{assignment.status}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseAssignment;