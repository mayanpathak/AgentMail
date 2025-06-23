
import { useState } from 'react';
import api from '../lib/axios';

export const useEmails = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAgentEmails = async (agentId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/agents/${agentId}/emails`);
      setEmails(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch emails';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const fetchEmail = async (emailId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/emails/${emailId}`);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch email';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const sendEmail = async (emailData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/emails/send', emailData);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to send email';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    emails,
    loading,
    error,
    fetchAgentEmails,
    fetchEmail,
    sendEmail,
  };
};
