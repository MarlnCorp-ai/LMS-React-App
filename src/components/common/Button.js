import React from 'react';

const Button = ({ children, onClick, className, variant = 'primary' }) => {
  const buttonStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-blue-300',
  };

  const classes = `${buttonStyles[variant]} ${className} px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
