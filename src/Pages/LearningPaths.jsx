import React from "react";
import PathCard from "../components/LearningPath/PathCard";
import paths from "../components/LearningPath/Paths";
import SearchBar from "../components/CourseDashboard/SearchBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import poster from "../images/Learning Paths/poster.png";
import banner from "../images/Banners/Banner.png";
import SideBar from "../components/common/SideBar";
import image1 from "../images/Learning Paths/action-figures/figure-2.svg";
import MultiSegmentPath from "../components/LearningPath/LevelPath";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function LearningPaths() {

  const demoSegments = [
    {
      id: "seg-0",
      figure:
        "https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/locked/bf1a9ccba05390a74cf13a0f7c9a665d.svg",
      jumpColor: "#16a34a",
      levels: [
        { id: "l0-0", type: "star", status: "current", progress: 0.45 },
        { id: "l0-1", type: "book", status: "locked" },
        { id: "l0-2", type: "dumbbell", status: "locked" },
        { id: "l0-3", type: "jump" },
        { id: "l0-4", type: "shield", status: "locked" },
        { id: "l0-5", type: "trophy", status: "locked" },
      ],
    },

    {
      id: "seg-1",
      figure:
        "https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/locked/34443969dabd59f00795cc94457c1b3b.svg",
      jumpColor: "#8b5cf6",
      levels: [
        { id: "l1-0", type: "brain", status: "completed" },
        { id: "l1-1", type: "heart", status: "completed" },
        { id: "l1-2", type: "star", status: "completed" },
        { id: "l1-3", type: "jump" },
        { id: "l1-4", type: "book", status: "locked" },
        { id: "l1-5", type: "sparkles", status: "locked" },
        { id: "l1-6", type: "chest", status: "locked" },
      ],
    },

    {
      id: "seg-2",
      figure:
        "https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/locked/bf1a9ccba05390a74cf13a0f7c9a665d.svg",
      jumpColor: "#0d9488",
      levels: [
        { id: "l2-0", type: "music", status: "completed" },
        { id: "l2-1", type: "code", status: "completed" },
        { id: "l2-2", type: "hammer", status: "completed" },
        { id: "l2-3", type: "jump" },
        { id: "l2-4", type: "rocket", status: "locked" },
        { id: "l2-5", type: "trophy", status: "locked" },
      ],
    },

    {
      id: "seg-3",
      figure:
        "https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/locked/34443969dabd59f00795cc94457c1b3b.svg",
      jumpColor: "#ea580c",
      levels: [
        { id: "l3-0", type: "globe", status: "locked" },
        { id: "l3-1", type: "map", status: "locked" },
        { id: "l3-2", type: "star", status: "locked" },
        { id: "l3-3", type: "jump" },
        { id: "l3-4", type: "shield", status: "locked" },
        { id: "l3-5", type: "chest", status: "locked" },
      ],
    },

    {
      id: "seg-4",
      figure:
        "https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/locked/bf1a9ccba05390a74cf13a0f7c9a665d.svg",
      jumpColor: "#ef4444",
      levels: [
        { id: "l4-0", type: "rocket", status: "locked" },
        { id: "l4-1", type: "sparkles", status: "locked" },
        { id: "l4-2", type: "heart", status: "locked" },
        { id: "l4-3", type: "jump" },
        { id: "l4-4", type: "trophy", status: "locked" },
        { id: "l4-5", type: "trophy", status: "locked" },
      ],
    },
  ];

  return (
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

        {/* <div className="bg-[#EAEAEA] p-0 flex items-center justify-center ml-40 py-40">
        <Link to="/courses">
            <img src={poster} alt="Poster" className="" />
        </Link>
      </div> */}
        <div className="min-h-screen flex justify-center bg-white">
          <MultiSegmentPath segments={demoSegments} />
        </div>
      </main>
    </div>
  );
}

export default LearningPaths;
