
import { motion } from 'framer-motion';
import { Mail, Clock, User } from 'lucide-react';
import Card from '../ui/Card';

const EmailList = ({ emails, onEmailSelect }) => {
  if (!emails || emails.length === 0) {
    return (
      <div className="text-center py-12">
        <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No emails found</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {emails.map((email, index) => (
        <motion.div
          key={email.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card
            onClick={() => onEmailSelect(email)}
            className="p-4 hover:bg-gray-50"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-gray-900 trunc">
                    {email.from_email}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {new Date(email.received_at).toLocaleDateString()}
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1 truncate">
                  {email.subject}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {email.preview || 'No preview available'}
                </p>
                {email.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default EmailList;
