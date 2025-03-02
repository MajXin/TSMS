import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required.');
    } else {
      navigate('/dashboard');
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-center bg-white  text-black ">
      
      {/* Close Button */}
      <button
        className="absolute top-16 right-6 text-black  text-3xl rounded-full p-2 hover:bg-opacity-30 transition"
        onClick={handleClose}
      >
        &times;
      </button>
      
      {/* Login Card */}
      <div className="max-w-lg w-full p-8 bg-black text-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-8">LOGIN</h1>
        
        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Input */}
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-6 py-3 border border-gray-300  rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p>Don't have an account? <a href="/signup" className="text-white font-semibold hover:text-blue-800 transition">Sign Up</a></p>
        </div>

        {/* Forgot Password Link */}
        <div className="mt-6 text-center text-sm">
          <a href="/forgot" className="text-white font-semibold hover:text-blue-800 transition">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
