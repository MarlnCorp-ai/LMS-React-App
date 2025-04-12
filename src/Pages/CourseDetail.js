import { useParams,useNavigate, Outlet, Link  } from "react-router-dom";
import { useState } from "react";

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-blue-700">Course: {courseId}</h2>
        <ul className="space-y-3 text-sm text-blue-800">
        <li
          onClick={() => navigate("/my-university")}
          className="flex items-center space-x-1 hover:underline cursor-pointer text-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </li>
          {/* <li onClick={() => navigate("/my-university")}  className="hover:underline cursor-pointer">◀️  Back</li> */}
          <li><Link to={`/courses/${courseId}/home`} className="hover:underline">Home</Link></li>
          <li><Link to={`/courses/${courseId}/announcements`} className="hover:underline">Announcements</Link></li>
          <li><Link to={`/courses/${courseId}/zoom`} className="hover:underline">Zoom</Link></li>
          <li><Link to={`/courses/${courseId}/attendance`} className="hover:underline">Attendance</Link></li>
          <li><Link to={`/courses/${courseId}/modules`} className="hover:underline">Modules</Link></li>
          {/* <li><Link to={`/courses/${courseId}/modules`}>Modules</Link></li> */}
          <li><Link to={`/courses/${courseId}/assignment`} className="hover:underline">Assignments</Link></li>
          {/* <li className="hover:underline cursor-pointer">Assignments</li> */}
          <li><Link to={`/courses/${courseId}/quizzes`} className="hover:underline">Quizzes</Link></li>
          {/* <li className="hover:underline cursor-pointer">Quizzes</li> */}
          <li className="hover:underline cursor-pointer">Discussions</li>
          <li className="hover:underline cursor-pointer">Grades</li>
          <li className="hover:underline cursor-pointer">People</li>
          <li className="hover:underline cursor-pointer">Digital Materials</li>
          <li className="hover:underline cursor-pointer">AEFIS Tools</li>
          <li className="hover:underline cursor-pointer">Search</li>
          <li className="hover:underline cursor-pointer">Course Survey</li>
          <li className="hover:underline cursor-pointer">Library Resources</li>
        </ul>
      </aside>

      {/* Content */}
      <div className="flex-1 p-4">
        <Outlet /> {/* This renders nested route  */}
      </div>
      
    </div>
  );
};

export default CourseDetails;
