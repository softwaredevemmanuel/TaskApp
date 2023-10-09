import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Index from './components/Index'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/index" element={<Index />}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
