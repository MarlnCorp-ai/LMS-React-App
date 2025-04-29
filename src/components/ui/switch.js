import React from "react";

export default function Switch({ defaultChecked }) {
  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600"></div>
    </label>
  );
}
