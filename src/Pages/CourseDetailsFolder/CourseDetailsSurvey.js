import React from "react";
import { FiRefreshCw, FiMoreVertical, FiClipboard, FiSmile, FiAlertCircle } from "react-icons/fi";

const Tile = ({ title, icon, children }) => (
  <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between h-48">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2 text-gray-700 font-semibold">
        {icon}
        {title}
      </div>
      <div className="flex gap-2 text-gray-400 text-lg">
        <FiRefreshCw className="cursor-pointer" />
        <FiMoreVertical className="cursor-pointer" />
      </div>
    </div>
    <div className="text-center text-gray-500">{children}</div>
  </div>
);

const CourseDetailsSurvey = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Course Survey</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Tile title="My Document Requests" icon={<FiClipboard />}>
          <FiAlertCircle className="mx-auto text-2xl text-gray-400" />
          <p className="font-semibold">No Requests</p>
          <p className="text-sm">We could not find any document requests</p>
        </Tile>

        <Tile title="My Data Collection Forms" icon={<FiClipboard />}>
          <FiAlertCircle className="mx-auto text-2xl text-gray-400" />
          <p className="font-semibold">No Forms</p>
          <p className="text-sm">We could not find any forms to complete</p>
        </Tile>

        <Tile title="My Surveys" icon={<FiClipboard />}>
          <FiSmile className="mx-auto text-2xl text-gray-400" />
          <p className="font-semibold">Congratulations!</p>
          <p className="text-sm">You have no surveys to complete at this time.</p>
        </Tile>

        <Tile title="Available Forms" icon={<FiClipboard />}>
          <FiAlertCircle className="mx-auto text-2xl text-gray-400" />
          <p className="font-semibold">No Forms</p>
          <p className="text-sm">We could not find any forms to complete</p>
        </Tile>

        <Tile title="My Assignments" icon={<FiClipboard />}>
          <FiSmile className="mx-auto text-2xl text-gray-400" />
          <p className="font-semibold">Congratulations!</p>
          <p className="text-sm">You have submitted all your assignments.</p>
        </Tile>

        <Tile title="My Course Sections & Syllabi" icon={<FiClipboard />}>
          <div className="text-left text-sm space-y-2">
            <p className="font-semibold">📅 2025 Spring Semester</p>
            <div className="bg-gray-100 rounded p-2">
              <p className="font-medium">CS 583 A - Deep Learning</p>
              <p className="text-xs">Director: Han, Tian</p>
            </div>
            <div className="bg-gray-100 rounded p-2">
              <p className="font-medium">CS 546 C - Web Programming</p>
              <p className="text-xs">Director: Hill, Patrick</p>
            </div>
            <div className="bg-gray-100 rounded p-2">
              <p className="font-medium">CS 584 A - NLP</p>
              <p className="text-xs">Director: Ning, Yue</p>
            </div>
          </div>
        </Tile>
      </div>
    </div>
  );
};

export default CourseDetailsSurvey;
