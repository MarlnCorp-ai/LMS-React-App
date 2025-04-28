import React from "react";

export default function Card({ children, className = "" }) {
  return <div className={`rounded-2xl shadow p-4 ${className}`}>{children}</div>;
}
