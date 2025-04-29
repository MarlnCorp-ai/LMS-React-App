import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const navItems = ["All", "Courses", "Labs", "Blog", "Resources", "Authors", "Events"];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="What do you want to learn?"
          className="w-full max-w-lg px-4 py-2 border rounded-full focus:outline-none focus:ring"
        />
      </div>
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex gap-6 overflow-x-auto">
          {navItems.map((item, idx) => (
            <button key={idx} className="text-gray-600 hover:text-purple-300 whitespace-nowrap">
              {item}
            </button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
