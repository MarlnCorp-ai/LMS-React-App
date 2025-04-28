import React from "react";

export default function Progress({ value = 0, className = "" }) {
  return (
    <div className={`w-full bg-gray-300 rounded-full h-2.5 ${className}`}>
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
