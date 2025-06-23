
import { useState, useEffect } from 'react';
import api from '../lib/axios';

export const useAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAgents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/agents');
      setAgents(response.data);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch agents';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const createAgent = async (agentData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/agents', agentData);
      const newAgent = response.data;
      setAgents(prev => [...prev, newAgent]);
      return { success: true, data: newAgent };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to create agent';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const fetchAgent = async (agentId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/agents/${agentId}`);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch agent';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateAgent = async (agentId, agentData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.put(`/agents/${agentId}`, agentData);
      const updatedAgent = response.data;
      setAgents(prev => prev.map(agent => 
        agent.id === agentId ? updatedAgent : agent
      ));
      return { success: true, data: updatedAgent };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to update agent';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const deleteAgent = async (agentId) => {
    setLoading(true);
    setError(null);
    try {
      await api.delete(`/agents/${agentId}`);
      setAgents(prev => prev.filter(agent => agent.id !== agentId));
      return { success: true };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to delete agent';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return {
    agents,
    loading,
    error,
    fetchAgents,
    createAgent,
    fetchAgent,
    updateAgent,
    deleteAgent,
  };
};
