
import { useState } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useAgents } from '../../hooks/useAgents';

const CreateAgentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    github_repo: '',
    description: '',
  });
  const { createAgent, loading } = useAgents();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createAgent({
      name: formData.name,
      config: {
        github_repo: formData.github_repo,
        description: formData.description,
      }
    });

    if (result.success) {
      setFormData({ name: '', github_repo: '', description: '' });
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Agent"
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Agent Name
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter agent name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GitHub Repository (optional)
          </label>
          <Input
            name="github_repo"
            value={formData.github_repo}
            onChange={handleChange}
            placeholder="e.g., username/repository"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description (optional)
          </label>
          <Input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe what this agent does"
          />
        </div>

        <div className="flex space-x-3 pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading || !formData.name}
            className="flex-1"
          >
            {loading ? 'Creating...' : 'Create Agent'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateAgentModal;
