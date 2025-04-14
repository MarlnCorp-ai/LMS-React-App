import React from 'react';

const ErrorAlert = ({ message }) => {
  return (
    <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
      {message}
    </div>
  );
};

export default ErrorAlert;
