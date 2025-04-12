import React from "react";
import image1 from '../../images/UniversityImages/test.png'

const CourseHome = () => {
  return (
    <div className="p-4 bg-white">
      <h1 className="text-2xl font-bold mb-1 text-blue-900">Welcome to Your Course!</h1>
      <h2 className="text-lg text-gray-600 mb-4">Course Overview</h2>

      {/* Banner Image */}
      <img
        src={image1}
        alt="Course Banner"
        className="w-full h-64 object-cover rounded shadow mb-6"
      />

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <a
          href="#"
          className="block text-center bg-[#8B1C2D] text-white py-6 rounded text-lg font-semibold hover:bg-[#6b1522] transition"
        >
          📘 Course Content
        </a>
        <a
          href="#"
          className="block text-center bg-[#8B1C2D] text-white py-6 rounded text-lg font-semibold hover:bg-[#6b1522] transition"
        >
          🧑‍💻 Student Support
        </a>
      </div>

      {/* Info Footer */}
      <div className="text-sm text-gray-700 space-y-2">
        <p>
          All NexusHive courses are supported by the{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Division of Your University
          </a>.
        </p>
        <p>
          Questions about course content should be directed to the instructor.
        </p>
        <p>
          Read the{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            accessibility statements and privacy policies
          </a>{" "}
          for technology used in this course.
        </p>
      </div>
    </div>
  );
};

export default CourseHome;
