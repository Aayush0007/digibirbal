import React, { useState } from 'react';

const Login = ({ onLogin, showNotification }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
        onLogin(data.user.first_name, data.token);
        showNotification('Login successful!', 'success');
      } else {
        showNotification(data.message, 'error');
      }
    } catch (error) {
      console.error('Login Error:', error); // Log the error details
      showNotification('Error logging in!', 'error');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Login</h2>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition-colors transform hover:scale-105"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
