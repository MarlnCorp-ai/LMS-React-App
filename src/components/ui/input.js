import React from "react";

export default function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className="border border-gray-300 rounded px-2 py-1 text-sm"
      {...props}
    />
  );
}
