import React, { useState } from 'react';

const LoginForm = ({ onSwitch, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake auth check
    if (email === 'user@example.com' && password === 'password123') {
      localStorage.setItem('authToken', 'fake-jwt-token');
      localStorage.setItem('userEmail', email);
      onSuccess(email);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <div className="text-red-500 text-sm">{error}</div>}

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

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md shadow hover:from-indigo-600 hover:to-purple-600 transition"
        >
          Login
        </button>
        <button
          type="button"
          onClick={onSwitch}
          className="text-sm text-blue-600 hover:underline"
        >
          Need an account?
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
