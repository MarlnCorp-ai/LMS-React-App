import React from "react";

const Tooltip = ({ message, children }) => {
  return (
    <div className="group relative flex items-center">
      {children}
      <span className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
