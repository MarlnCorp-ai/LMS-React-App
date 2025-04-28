import React from "react";

export default function ScrollArea({ children, className = "" }) {
  return (
    <div className={`overflow-auto max-h-96 ${className}`}>
      {children}
    </div>
  );
}
