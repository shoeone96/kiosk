import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import './button.css'
import Login from './login/login';
import Signin from './signin/signin';
import Main from './main/main';
import Stamp from './stamp/stamp';
import End from './end/end'
import Donation from './donation/donation'
import TimeReward from './timeReward/timeReward'
import DiscountReward from './discountReward/discountReward'
import Input from './input/input'
import Home from './home/home'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/main" element={<Main />} />
      <Route path="/stamp" element={<Stamp />} />
      <Route path="/end" element={<End />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/time-reward" element={<TimeReward />} />
      <Route path="/discount-reward" element={<DiscountReward />} />
      <Route path="/input" element={<Input />} />
    </Routes>
    
  );
}


export default App;
