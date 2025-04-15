import React from "react";
import PathCard from "../components/LearningPath/PathCard";
import Header from "../components/LearningPath/SearchBar";
import paths from "../components/LearningPath/Paths";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const LearningPaths = () => (
  <>
    <Header />
    <main className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Paths</h2>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {paths.map((path, i) => (
            <PathCard key={i} {...path} />
          ))}
        </motion.div>
      </div>
    </main>
  </>
);

export default LearningPaths;