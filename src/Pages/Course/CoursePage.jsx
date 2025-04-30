import SideBar from "../../components/common/SideBar";
import SecondarySideBar from "../../components/CoursePage/SecondarySideBar";
import CourseContent from "../../components/CoursePage/CourseContent";
import { Link } from "react-router-dom";
import banner from "../../images/Courses/banner.png";

const CourseBanner = () => {
  const backgroundUrl =
    "../../images/Courses/banner.png"; // ← replace this

  return (
    <section
      className="relative bg-cover bg-center h-64 w-4/5"
      style={{ backgroundImage: `url('${banner}')` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* content */}
      <div className="relative container w-full h-full px-6 flex flex-col justify-center gap-8 text-white">
        {/* left side */}
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Python 3 Fundamentals</h1>
          <p className="text-lg text-gray-200">by Matthew McPartlon</p>
          <p className="text-base leading-relaxed text-gray-200">
            Python is a great programming language for beginners and experts
            alike. This course will teach you how to program in Python.
          </p>
        </div>

        <div>
          <div className="flex items-center space-x-6">
            {/* Resume Course button */}
            <Link to="/courses/1/player">
              <button className="flex items-center bg-purple-400 hover:bg-purple-500 p-2 rounded w-40">
                <svg
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
                <span className="ml-2 text-white font-medium">
                  Take Course
                </span>
              </button>
            </Link>

            {/* Bookmark */}
            <button className="flex items-center text-white hover:text-gray-300">
              <svg
                className="w-5 h-5 stroke-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5v14l7-7 7 7V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
                />
              </svg>
              <span className="ml-2 text-sm">Bookmark</span>
            </button>

            {/* Add to Channel */}
            <button className="flex items-center text-white hover:text-gray-300 w-38">
              <svg
                className="w-5 h-5 stroke-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.93 4.93a16 16 0 0114.14 14.14M4.93 10.07a10 10 0 0110.1 10.1M8.49 8.49a6 6 0 016.36 6.36M5 18a1 1 0 112 0 1 1 0 01-2 0z"
                />
              </svg>
              <span className="ml-2 text-sm">Add to Channel</span>
            </button>

            {/* Download Course */}
            <button className="flex items-center text-white hover:text-gray-300 w-38">
              <svg
                className="w-5 h-5 stroke-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              <span className="ml-2 text-sm">Download Course</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

function CoursePage() {
  return (
    <div>
      <aside className="fixed top-0 left-0">
        <SideBar />
      </aside>
      <main className="flex flex-col justify-start ml-80">
        <CourseBanner />

        <CourseContent />
      </main>
      <aside className="fixed top-0 right-0">
        <SecondarySideBar />
      </aside>
    </div>
  );
}

export default CoursePage;
