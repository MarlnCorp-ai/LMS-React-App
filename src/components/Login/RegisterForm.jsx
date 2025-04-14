import React, { useState } from 'react';

const RegisterForm = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return false;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Simulate storing user
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    localStorage.setItem('emailVerified', 'false');

    setSuccess(true);
    setError('');
    setTimeout(() => {
      onSwitch(); // back to login
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-500 text-sm">Registration successful! Please login.</div>}

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-4 py-2 rounded-md shadow hover:from-green-600 hover:to-emerald-600 transition"
        >
          Register
        </button>
        <button
          type="button"
          onClick={onSwitch}
          className="text-sm text-blue-600 hover:underline"
        >
          Already have an account?
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
