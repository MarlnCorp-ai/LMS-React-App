import React from "react";

export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const base = "px-4 py-2 rounded-xl font-medium";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-gray-400 text-black hover:bg-gray-100",
    ghost: "bg-transparent text-white hover:bg-white hover:text-black",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
