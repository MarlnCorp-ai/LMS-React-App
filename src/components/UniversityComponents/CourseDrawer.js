// components/UniversityComponents/CourseDrawer.js
import { useNavigate } from "react-router-dom";

const courses = [
  { id: "CS546-C", name: "CS 546-C", info: "Semester Info" },
  { id: "CS583-A", name: "CS 583-A", info: "Semester Info" },
  { id: "CS584-A", name: "CS 584-A", info: "Semester Info" },
  { id: "CS590-B", name: "CS 590-B", info: "Development Courses" },
];

const CourseDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 w-80 bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ height: "100vh" }}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h2 className="text-lg font-semibold">Courses</h2>
        <button onClick={onClose} className="text-xl">✖️</button>
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold mb-2">All Courses</h3>
        <hr className="mb-4" />
        {courses.map((course) => (
          <div
            key={course.id}
            className="mb-4 cursor-pointer"
            onClick={() => {
              navigate(`/courses/${course.id}`);
              onClose();
            }}
          >
            <p className="text-sm font-semibold text-gray-900">{course.name}</p>
            <p className="text-sm text-gray-600">{course.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDrawer;
