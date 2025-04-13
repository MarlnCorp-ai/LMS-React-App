import React, { useState } from 'react';

function Toggle({ id, defaultChecked = false, onChange }) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div className="relative w-12 h-6 transition duration-200 ease-in-out bg-gray-300 rounded-full cursor-pointer" onClick={handleChange}>
      <span className={`absolute top-0.5 left-1 w-5 h-5 rounded-full bg-white shadow-md transition duration-200 ease-in-out transform ${isChecked ? 'translate-x-6' : ''}`}></span>
    </div>
  );
}

export default Toggle;