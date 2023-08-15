import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import './button.css'
import Login from './login/login';
import Signin from './signin/signin';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}




export default App;
