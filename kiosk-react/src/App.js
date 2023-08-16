import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import './button.css'
import Login from './login/login';
import Signin from './signin/signin';
import Main from './main/main';
import Stamp from './stamp/stamp';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/main" element={<Main />} />
      <Route path="/stamp" element={<Stamp />} />
    </Routes>
  );
}


export default App;
