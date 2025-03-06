// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // بررسی وجود توکن در localStorage هنگام لود اولیه
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ token });
    }
    setLoading(false);
  }, []);

  // ورود کاربر
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login/', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ token });
      return true;
    } catch (error) {
      console.error('ورود ناموفق:', error);
      return false;
    }
  };

  // ثبت‌نام کاربر
  const signup = async (name, email, password) => {
    try {
      await axios.post('http://localhost:8000/api/signup/', { name, email, password });
      return true;
    } catch (error) {
      console.error('ثبت‌نام ناموفق:', error);
      return false;
    }
  };

  // خروج کاربر
  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);