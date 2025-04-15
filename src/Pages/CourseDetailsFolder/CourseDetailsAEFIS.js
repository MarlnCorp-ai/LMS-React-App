import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

const surveys = [
  {
    title: "Stevens' Mid-Semester Student Feedback Survey - Spring 2025",
    startDate: "Mar 5th, 2025",
    endDate: "Mar 14th, 2025",
    completed: true,
    completedDate: "Mar 14th, 2025",
  },
];

const CourseDetailsAEFISTools = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        CS 584 A Surveys and Survey Results
      </h2>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 font-semibold">Survey</th>
              <th className="px-4 py-2 font-semibold flex items-center gap-1">
                <FaRegCalendarAlt /> Start
              </th>
              <th className="px-4 py-2 font-semibold flex items-center gap-1">
                <FaRegCalendarAlt /> End
              </th>
              <th className="px-4 py-2 font-semibold">Completed?</th>
              <th className="px-4 py-2 font-semibold">Completed Date</th>
              <th className="px-4 py-2 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {surveys.map((survey, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{survey.title}</td>
                <td className="px-4 py-3">{survey.startDate}</td>
                <td className="px-4 py-3">{survey.endDate}</td>
                <td className="px-4 py-3">
                  {survey.completed && (
                    <FiCheckCircle className="text-green-600 text-lg" />
                  )}
                </td>
                <td className="px-4 py-3">{survey.completedDate}</td>
                <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 text-sm text-gray-500">
          Showing 1 to {surveys.length} of {surveys.length} records
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsAEFISTools;
