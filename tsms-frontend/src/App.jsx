import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/home';
import Login from './Components/Pages/login';
import Signup from './Components/Pages/signUp';
import ForgotPassword from './Components/Pages/ForgotPassword';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot' element={<ForgotPassword />} />
        </Routes>
    </Router>
  );
};

export default App;
