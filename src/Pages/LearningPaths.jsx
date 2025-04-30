import React from "react";
import PathCard from "../components/LearningPath/PathCard";
import paths from "../components/LearningPath/Paths";
import SearchBar from "../components/CourseDashboard/SearchBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import poster from "../images/Learning Paths/poster.png";
import banner from "../images/Banners/Banner.png";
import SideBar from "../components/common/SideBar";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const LearningPaths = () => (
  <div className="relative">
    <aside className="fixed top-0 left-0 bg-white">
      <SideBar />
    </aside>
    <main className="ml-40">
      <div
        className="h-96 text-white flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        <h1 className="text-5xl text-center font-bold">Learning Paths</h1>
      </div>
      {/* <div className="flex justify-center pt-32 bg-gray-100/20">
      <SearchBar />
    </div>

    <main className="bg-gray-100/20 py-28 h-screen ">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paths.map((path, i) => (
            <Link to={`/courses?search=${path.category}`}>
              <PathCard key={i} {...path} />
            </Link>
          ))}
        </motion.div>
      </div>
    </main> */}

      <div className="bg-[#EAEAEA] p-0 flex items-center justify-center ml-40 py-40">
        <Link to="/courses">
            <img src={poster} alt="Poster" className="" />
        </Link>
      </div>
    </main>
  </div>
);

export default LearningPaths;
