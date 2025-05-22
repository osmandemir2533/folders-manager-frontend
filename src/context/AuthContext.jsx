import { createContext, useState, useContext, useEffect } from 'react';
import * as jwt_decode from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt_decode.jwtDecode(token);
        setUser(decoded);
        setUsername(decoded?.Username || decoded?.username || null);
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('https://localhost:7074/api/Auth/login', {
        username,
        password
      });
      
      const { token } = response.data;
      localStorage.setItem('token', token);
      
      const decoded = jwt_decode.jwtDecode(token);
      setUser(decoded);
      setUsername(username);
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const register = async (username, password) => {
    try {
      const response = await axios.post('https://localhost:7074/api/Auth/register', {
        username,
        password
      });
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setUsername(null);
  };

  const value = {
    user,
    username,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 