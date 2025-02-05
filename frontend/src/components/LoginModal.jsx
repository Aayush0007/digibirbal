import React, { useState } from 'react';

const LoginModal = ({ isVisible, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(email, data.token);
        onClose();
      } else {
        alert(data.message); // Handle login error
      }
    } catch (error) {
      console.error('Login Error:', error); // Log the error details
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(email, data.token); // Automatically log in the user after registration
        onClose();
      } else {
        alert(data.message); // Handle registration error
      }
    } catch (error) {
      console.error('Register Error:', error); // Log the error details
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 ${isLogin ? 'bg-green-600 text-white' : 'bg-white text-green-600'} rounded-tl-lg rounded-bl-lg`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 ${!isLogin ? 'bg-green-600 text-white' : 'bg-white text-green-600'} rounded-tr-lg rounded-br-lg`}
          >
            Register
          </button>
        </div>
        {isLogin ? (
          <>
            <p className="text-center mb-4">Already have an account? Login to access your account.</p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 text-white p-3 rounded-lg mt-4 hover:bg-green-700 transition-all duration-200"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <p className="text-center mb-4">New here? Register to create an account.</p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleRegister}
              className="w-full bg-green-600 text-white p-3 rounded-lg mt-4 hover:bg-green-700 transition-all duration-200"
            >
              Register
            </button>
          </>
        )}
        <button
          onClick={onClose}
          className="w-full bg-red-600 text-white p-3 rounded-lg mt-4 hover:bg-red-700 transition-all duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
