import { useState } from "react";
import avatar from "../../images/UniversityImages/man.png";

const LeftSidebar = ({ onSelect, activeIndex }) => {
  const icons = [
    { icon: "🏠", label: "Home" },
    { icon: "📚", label: "Courses" },
    { icon: "🕒", label: "Schedule" },
    { icon: "📅", label: "Calendar" },
    { icon: "📊", label: "Reports" },
    { icon: "❓", label: "Help" },
  ];

  return (
    <div className="w-16 bg-gray-800 text-white h-screen flex flex-col items-center py-4">
      <img src={avatar} alt="User" className="w-10 h-10 rounded-full mb-6" />

      {icons.map(({ icon, label }, index) => (
        <div
          key={index}
          onClick={() => onSelect(index)}
          className={`group relative flex justify-center my-3 w-full py-2 cursor-pointer ${
            activeIndex === index ? "bg-gray-700 border-l-4 border-white" : ""
          }`}
        >
          <span className="text-xl">{icon}</span>

          {/* Hover Label */}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};
export default LeftSidebar;