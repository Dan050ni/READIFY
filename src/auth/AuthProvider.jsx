import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('loggedUser');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const found = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (found) {
      setUser(found);
      localStorage.setItem('loggedUser', JSON.stringify(found));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
