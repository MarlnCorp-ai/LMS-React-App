import React from "react";
import { motion } from "framer-motion";

const PathCard = ({ icon, title, courses, hours }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    whileHover={{ scale: 1.03 }}
    className="bg-white shadow rounded-xl p-4 w-full max-w-sm cursor-pointer transform transition"
  >
    <div className="mb-4">
      <img src={icon} alt="icon" className="h-10 w-10" />
    </div>
    <h3 className="font-bold text-lg text-gray-800">{title}</h3>
    <p className="text-sm text-gray-500">{courses} Courses · {hours} Hours</p>
    <button className="mt-4 text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Skills</button>
  </motion.div>
);

export default PathCard;
