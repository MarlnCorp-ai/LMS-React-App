import React, { useState } from "react";

// Sample data for quizzes
const quizzesData = [
  {
    id: 1,
    title: "Quiz 1 - NLP basics",
    availability: "Available until May 6 at 5pm",
    dueDate: "Due Jan 28 at 3:30pm",
    points: "20 pts",
    questions: "11 Questions",
  },
  {
    id: 2,
    title: "Quiz 2 - ML basics",
    availability: "Available until May 6 at 5pm",
    dueDate: "Due Feb 4 at 3:30pm",
    points: "20 pts",
    questions: "10 Questions",
  },
  {
    id: 3,
    title: "Quiz 3 - ML, Neural Networks, and Word2vec",
    availability: "Available until May 6 at 5pm",
    dueDate: "Due Feb 25 at 3:30pm",
    points: "20 pts",
    questions: "10 Questions",
  },
  {
    id: 4,
    title: "Quiz 4 - Language modeling and RNN",
    availability: "Available until May 6 at 5pm",
    dueDate: "Due Mar 11 at 3:30pm",
    points: "20 pts",
    questions: "10 Questions",
  },
  {
    id: 5,
    title: "Quiz 5 - Machine translation and Seq2seq",
    availability: "Available until May 6 at 5pm",
    dueDate: "Due Apr 8 at 3:30pm",
    points: "20 pts",
    questions: "",
  },
  {
    id: 6,
    title: "Quiz 6 - attention and transformer",
    availability: "Available until May 6 at 5:59pm",
    dueDate: "Due Apr 15 at 3:30pm",
    points: "20 pts",
    questions: "",
  },
  {
    id: 7,
    title: "Quiz for Attendance - Feb. 25",
    availability: "",
    dueDate: "",
    points: "1 pt",
    questions: "1 Question",
  },
];

const CourseQuizzes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and search logic
  const filteredQuizzes = quizzesData.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search for Quiz..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Placeholder for additional filters or buttons */}
        <div></div>
      </div>

      {/* Quiz List */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM12 8a2 2 0 11-4 0 2 2 0 014 0zM16 8a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Assignment Quizzes
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left mt-4">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Availability</th>
                <th className="px-4 py-2">Due Date</th>
                <th className="px-4 py-2">Points</th>
                <th className="px-4 py-2">Questions</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuizzes.map((quiz) => (
                <tr
                  key={quiz.id}
                  className="hover:bg-gray-100 transition duration-300 cursor-pointer"
                >
                  <td className="px-4 py-2">{quiz.title}</td>
                  <td className="px-4 py-2">{quiz.availability}</td>
                  <td className="px-4 py-2">{quiz.dueDate}</td>
                  <td className="px-4 py-2">{quiz.points}</td>
                  <td className="px-4 py-2">{quiz.questions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseQuizzes;