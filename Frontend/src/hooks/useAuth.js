
import { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import api from '../lib/axios';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login: contextLogin, logout: contextLogout } = useAuthContext();

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/register', userData);
      const { user, token } = response.data;
      contextLogin(user, token);
      return { success: true, user, token };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/login', credentials);
      const { user, token } = response.data;
      contextLogin(user, token);
      return { success: true, user, token };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await api.post('/auth/logout');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      contextLogout();
      setLoading(false);
    }
  };

  const fetchCurrentUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/auth/me');
      return { success: true, user: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch user';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    login,
    logout,
    fetchCurrentUser,
    loading,
    error,
  };
};
