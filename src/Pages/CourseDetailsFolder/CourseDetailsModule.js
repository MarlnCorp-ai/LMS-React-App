import { useParams } from "react-router-dom";
import { useState } from "react";

const CourseModules = () => {
  const { courseId } = useParams();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Course Modules</h2>

      <main className="flex-1 p-6 overflow-y-auto bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Course: {courseId} Contents
        </h1>

        {/* Section: Syllabus */}
        <div className="mb-4">
          <button
            className="w-full text-left bg-gray-200 px-4 py-2 font-semibold rounded hover:bg-gray-300 transition"
            onClick={() => toggleSection("syllabus")}
          >
            Syllabus
          </button>
          {openSections["syllabus"] && (
            <ul className="pl-6 mt-2 list-disc text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  📄 Syllabus_CS583A_S25.pdf
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  📄 TA / CA Office Hours
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Section: Week 1 */}
        <div className="mb-4">
          <button
            className="w-full text-left bg-gray-200 px-4 py-2 font-semibold rounded hover:bg-gray-300 transition"
            onClick={() => toggleSection("week1")}
          >
            Week 1
          </button>
          {openSections["week1"] && (
            <ul className="pl-6 mt-2 list-disc text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  📄 lecture 1.pdf
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Section: Useful Files */}
        <div className="mb-4">
          <button
            className="w-full text-left bg-gray-200 px-4 py-2 font-semibold rounded hover:bg-gray-300 transition"
            onClick={() => toggleSection("useful")}
          >
            Useful Files
          </button>
          {openSections["useful"] && (
            <ul className="pl-6 mt-2 list-disc text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  📄 CS583-Prep.pdf
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Section: Week 2 */}
        <div className="mb-4">
          <button
            className="w-full text-left bg-gray-200 px-4 py-2 font-semibold rounded hover:bg-gray-300 transition"
            onClick={() => toggleSection("week2")}
          >
            Week 2
          </button>
          {openSections["week2"] && (
            <ul className="pl-6 mt-2 list-disc text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  📄 lecture 2.pdf
                </a>
              </li>
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default CourseModules;
