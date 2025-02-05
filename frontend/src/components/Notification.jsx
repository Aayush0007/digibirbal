import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

const Notification = ({ message, type, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!message) return; // Only set up the timer if the message is present

    const timer = setTimeout(onClose, 5000); // 5 seconds auto-close
    const interval = setInterval(() => {
      setProgress(prev => Math.max(prev - 2, 0)); // Decrease progress
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [message, onClose]);

  // If there's no message, do not render the notification
  if (!message) return null;

  // Set the background gradient color and icon based on the notification type
  let backgroundColor, icon;
  switch (type) {
    case 'error':
      backgroundColor = 'bg-gradient-to-r from-red-600 to-red-800';
      icon = <FaTimesCircle size={28} />;
      break;
    case 'success':
      backgroundColor = 'bg-gradient-to-r from-green-600 to-green-800';
      icon = <FaCheckCircle size={28} />;
      break;
    case 'info':
      backgroundColor = 'bg-gradient-to-r from-blue-600 to-blue-800';
      icon = <FaInfoCircle size={28} />;
      break;
    case 'warning':
      backgroundColor = 'bg-gradient-to-r from-yellow-600 to-yellow-800';
      icon = <FaExclamationTriangle size={28} />;
      break;
    default:
      backgroundColor = 'bg-gradient-to-r from-gray-600 to-gray-800';
      icon = <FaInfoCircle size={28} />;
  }

  return (
    <div
      className={`fixed top-4 right-4 transform ${backgroundColor} text-white rounded-lg shadow-lg z-50 flex items-center space-x-6 p-6 transition-all duration-500 ease-in-out`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{ animation: 'slideInRight 0.5s ease-out' }}
    >
      <div className="flex items-center">
        {icon}
        <span className="ml-4 text-lg font-semibold">{message}</span>
      </div>
      <button
        onClick={onClose}
        className="ml-6 text-gray-200 hover:text-white transition-colors duration-300"
      >
        ×
      </button>
      <div className="absolute bottom-0 left-0 h-1 bg-white" style={{ width: `${progress}%` }}></div>
      <style >{`
        @keyframes slideInRight {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Notification;
