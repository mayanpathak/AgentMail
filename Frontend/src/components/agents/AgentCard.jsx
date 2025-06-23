
import { motion } from 'framer-motion';
import { Bot, Mail, Settings, Trash2 } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const AgentCard = ({ agent, onEdit, onDelete, onViewEmails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
              <p className="text-sm text-gray-500">{agent.email}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(agent)}
              className="p-2"
            >
              <Settings className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(agent.id)}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="text-sm">
            <span className="text-gray-500">Status:</span>
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              agent.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {agent.active ? 'Active' : 'Inactive'}
            </span>
          </div>
          {agent.config?.github_repo && (
            <div className="text-sm">
              <span className="text-gray-500">GitHub:</span>
              <span className="ml-2 text-blue-600">{agent.config.github_repo}</span>
            </div>
          )}
        </div>

        <div className="flex space-x-2">
          <Button
            onClick={() => onViewEmails(agent)}
            className="flex-1"
            size="sm"
          >
            <Mail className="w-4 h-4 mr-2" />
            View Emails
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default AgentCard;
