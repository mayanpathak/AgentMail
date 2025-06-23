
import { useState, useEffect } from 'react';
import { X, Reply, Forward, Archive } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import { useEmails } from '../../hooks/useEmails';

const EmailViewer = ({ email, isOpen, onClose }) => {
  const [emailDetails, setEmailDetails] = useState(null);
  const [showReply, setShowReply] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const { fetchEmail, sendEmail, loading } = useEmails();

  useEffect(() => {
    if (email && isOpen) {
      loadEmailDetails();
    }
  }, [email, isOpen]);

  const loadEmailDetails = async () => {
    const result = await fetchEmail(email.id);
    if (result.success) {
      setEmailDetails(result.data);
    }
  };

  const handleReply = async () => {
    if (!replyMessage.trim()) return;

    const result = await sendEmail({
      to: emailDetails.from_email,
      subject: `Re: ${emailDetails.subject}`,
      body: replyMessage,
      agent_id: emailDetails.agent_id,
    });

    if (result.success) {
      setReplyMessage('');
      setShowReply(false);
      // Show success message or update UI
    }
  };

  if (!email) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Email Details"
      size="xl"
    >
      {loading && !emailDetails ? (
        <div className="flex justify-center py-8">
          <Loader size="lg" />
        </div>
      ) : emailDetails ? (
        <div className="space-y-6">
          {/* Email Header */}
          <div className="border-b pb-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {emailDetails.subject}
                </h3>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">From:</span> {emailDetails.from_email}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">To:</span> {emailDetails.to_email}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Date:</span>{' '}
                    {new Date(emailDetails.received_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Parsed Data */}
          {emailDetails.ai_parsed_data && (
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">AI Analysis</h4>
              <div className="space-y-2 text-sm">
                {emailDetails.ai_parsed_data.intent && (
                  <p><span className="font-medium">Intent:</span> {emailDetails.ai_parsed_data.intent}</p>
                )}
                {emailDetails.ai_parsed_data.sentiment && (
                  <p><span className="font-medium">Sentiment:</span> {emailDetails.ai_parsed_data.sentiment}</p>
                )}
                {emailDetails.ai_parsed_data.action_required && (
                  <p><span className="font-medium">Action Required:</span> {emailDetails.ai_parsed_data.action_required}</p>
                )}
              </div>
            </div>
          )}

          {/* Email Body */}
          <div className="prose max-w-none">
            <div 
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: emailDetails.body_html || emailDetails.body_text }}
            />
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4 border-t">
            <Button onClick={() => setShowReply(!showReply)}>
              <Reply className="w-4 h-4 mr-2" />
              Reply
            </Button>
            <Button variant="secondary">
              <Forward className="w-4 h-4 mr-2" />
              Forward
            </Button>
            <Button variant="secondary">
              <Archive className="w-4 h-4 mr-2" />
              Archive
            </Button>
          </div>

          {/* Reply Form */}
          {showReply && (
            <div className="border-t pt-4">
              <h4 className="font-medium mb-3">Reply to {emailDetails.from_email}</h4>
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Type your reply..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="flex space-x-3 mt-3">
                <Button onClick={handleReply} disabled={loading || !replyMessage.trim()}>
                  {loading ? 'Sending...' : 'Send Reply'}
                </Button>
                <Button variant="secondary" onClick={() => setShowReply(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-8">Failed to load email details</p>
      )}
    </Modal>
  );
};

export default EmailViewer;
