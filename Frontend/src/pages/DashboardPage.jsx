
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Bot, Mail, Activity } from 'lucide-react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import AgentCard from '../components/agents/AgentCard';
import CreateAgentModal from '../components/agents/CreateAgentModal';
import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';
import { useAgents } from '../hooks/useAgents';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { agents, loading, deleteAgent } = useAgents();
  const navigate = useNavigate();

  const handleEditAgent = (agent) => {
    navigate(`/agents/${agent.id}`);
  };

  const handleDeleteAgent = async (agentId) => {
    if (window.confirm('Are you sure you want to delete this agent?')) {
      await deleteAgent(agentId);
    }
  };

  const handleViewEmails = (agent) => {
    navigate(`/agents/${agent.id}/emails`);
  };

  const stats = [
    {
      name: 'Total Agents',
      value: agents.length,
      icon: Bot,
      color: 'bg-blue-500',
    },
    {
      name: 'Active Agents',
      value: agents.filter(agent => agent.active).length,
      icon: Activity,
      color: 'bg-green-500',
    },
    {
      name: 'Total Emails',
      value: agents.reduce((sum, agent) => sum + (agent.email_count || 0), 0),
      icon: Mail,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Dashboard" />
        
        <main className="flex-1 overflow-auto p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Agents Section */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Agents</h2>
            <Button onClick={() => setShowCreateModal(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Agent
            </Button>
          </div>

          {/* Agents Grid */}
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader size="lg" />
            </div>
          ) : agents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Bot className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No agents yet
              </h3>
              <p className="text-gray-600 mb-6">
                Create your first AI agent to get started with automated email management.
              </p>
              <Button onClick={() => setShowCreateModal(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Agent
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AgentCard
                    agent={agent}
                    onEdit={handleEditAgent}
                    onDelete={handleDeleteAgent}
                    onViewEmails={handleViewEmails}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </main>
      </div>

      <CreateAgentModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default DashboardPage;
