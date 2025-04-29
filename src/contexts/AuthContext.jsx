import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const s = localStorage.getItem('authUser');
    return s ? JSON.parse(s) : null;
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const s = localStorage.getItem('registeredUsers');
    return s ? JSON.parse(s) : [];
  });

  
  useEffect(() => {
    if (user) localStorage.setItem('authUser', JSON.stringify(user));
    else localStorage.removeItem('authUser');
  }, [user]);

  
  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  
  const register = ({ email, password, firstName, lastName, role }) => {
    email = email.toLowerCase();
    if (registeredUsers.some(u => u.email.toLowerCase() === email)) {
      return false; 
    }
    const newUser = {
      email,
      password,
      firstName,
      lastName,
      role,
    };
    setRegisteredUsers(prev => [...prev, newUser]);
    setUser(newUser);
    return true;
  };

  
  const login = ({ email, password }) => {
    email = email.toLowerCase();
    const found = registeredUsers.find(
      u => u.email.toLowerCase() === email && u.password === password
    );
    if (!found) return false;
    
    setUser({ ...found });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, registeredUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
