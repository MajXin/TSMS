import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Please enter your email address.');
    } else {
      setError('');
      // Handle forgot password logic here (e.g., sending a reset link)
      setMessage('A password reset link has been sent to your email address.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-center bg-white text-black">
      {/* Forgot Password Card */}
      <div className="max-w-lg w-full p-8 bg-black text-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-8">FORGOT PASSWORD</h1>
        
        {/* Forgot Password Form */}
        <form onSubmit={handleForgotPassword} className="space-y-6">
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Success Message */}
          {message && <p className="text-green-500 text-sm">{message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            Submit
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="mt-6 text-center text-sm">
          <p>Remembered your password? <a href="/login" className="text-white font-semibold hover:text-blue-800 transition">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
