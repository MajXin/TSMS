import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      setError('All fields are required.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      // Handle signup logic here
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-center bg-white text-black">      
      {/* Signup Card */}
      <div className="max-w-lg w-full p-8 bg-black text-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-8">SIGN UP</h1>
        
        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-6">
          {/* Username Input */}
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-black transition"
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

          {/* Confirm Password Input */}
          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm">
          <p>Already have an account? <a href="/login" className="text-white font-semibold hover:text-blue-800 transition">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
