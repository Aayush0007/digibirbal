import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (username, token) => {
    setUser(username);
    Cookies.set('token', token, { expires: 7 }); // Set cookie to expire in 7 days
  };

  const handleLogout = () => {
    setUser(null);
    Cookies.remove('token');
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const fetchUserDetails = async () => {
        try {
          const response = await fetch('http://localhost:3001/auth/user-details', {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!response.ok) throw new Error('Invalid token');
          const data = await response.json();
          setUser(data.username);
        } catch (error) {
          console.error('Error fetching user details:', error);
          Cookies.remove('token');
        }
      };
      fetchUserDetails();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
