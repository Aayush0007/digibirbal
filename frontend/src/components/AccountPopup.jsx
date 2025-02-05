import React, { useState } from 'react';
import { X } from 'lucide-react';
import Login from './Login';
import Register from './Register';

const AccountPopup = ({ isVisible, onClose, onLogin, onRegister, showNotification }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fadeIn">
      <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-md w-full animate-slideUp">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-red-500 focus:outline-none">
          <X size={24} />
        </button>
        <div className="text-center mb-4">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`transition-all duration-300 px-6 py-3 rounded-md text-lg font-semibold ${isLogin ? 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg' : 'bg-gray-100 text-gray-800'}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`transition-all duration-300 px-6 py-3 rounded-md text-lg font-semibold ${!isLogin ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg' : 'bg-gray-100 text-gray-800'}`}
            >
              Register
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            {isLogin ? 'Already have an account? Login to access your account.' : 'New user? Register to create an account.'}
          </p>
        </div>
        <div className="overflow-y-auto max-h-[70vh] px-4"> {/* Scrollable container with padding */}
          {isLogin ? (
            <Login onLogin={onLogin} showNotification={showNotification} />
          ) : (
            <Register onRegister={onRegister} showNotification={showNotification} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPopup;
