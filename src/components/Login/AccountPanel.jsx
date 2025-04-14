import React from 'react';
import { DEMO_USER } from '../Login/demoUser';

const AccountPanel = ({ email, isVerified, onVerify, onLogout }) => {
  const isDemo = email === DEMO_USER.email;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={DEMO_USER.profilePic}
          alt="Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="text-xl font-bold">{DEMO_USER.name}</p>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>

      <p>
        <strong>Email Status:</strong>{' '}
        {isVerified ? (
          <span className="text-green-600">Verified ✓</span>
        ) : (
          <span className="text-yellow-600">Not Verified</span>
        )}
      </p>

      {!isVerified && (
        <button
          onClick={onVerify}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Verify Email (Demo)
        </button>
      )}

      <button
        onClick={onLogout}
        className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default AccountPanel;
