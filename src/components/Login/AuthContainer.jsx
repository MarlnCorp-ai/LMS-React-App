import React, { useState, useEffect } from 'react';
import { DEMO_USER } from '../Login/demoUser';
import LoginForm from '../Login/LoginForm';
import RegisterForm from './RegisterForm';
import ErrorAlert from './ErrorAlert';
import AccountPanel from '../Login/AccountPanel';

const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [userEmail, setUserEmail] = useState('');
  
    useEffect(() => {
      const token = localStorage.getItem('authToken');
      const email = localStorage.getItem('userEmail');
      if (token && email) {
        setIsAuthenticated(true);
        setUserEmail(email);
        setEmailVerified(localStorage.getItem('emailVerified') === 'true');
      }
    }, []);
  
    const handleLoginSuccess = (email) => {
      setIsAuthenticated(true);
      setUserEmail(email);
      setEmailVerified(localStorage.getItem('emailVerified') === 'true');
    };
  
    const handleLogout = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      setIsAuthenticated(false);
      setEmailVerified(false);
    };
  
    const handleEmailVerified = () => {
      localStorage.setItem('emailVerified', 'true');
      setEmailVerified(true);
    };
  
    return (
      <div className="w-full max-w-md p-8 bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl">
        {!isAuthenticated ? (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h2>
            {isLogin ? (
              <LoginForm
                onSwitch={() => setIsLogin(false)}
                onSuccess={handleLoginSuccess}
              />
            ) : (
              <RegisterForm onSwitch={() => setIsLogin(true)} />
            )}
          </>
        ) : (
          <AccountPanel
            email={userEmail}
            emailVerified={emailVerified}
            onVerify={handleEmailVerified}
            onLogout={handleLogout}
          />
        )}
      </div>
    );
  };
  
  export default AuthContainer;