import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import RegisteredVoters from './components/RegisteredVoters';
import VoteResult from './components/VoterResult';
import Candidates from './components/Candidates';
import Details from './components/Details';
import VoteAnalysis from './components/VoteAnalysis';
import Register from './components/Register';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/registered-voters" element={<RegisteredVoters />}/>
          <Route path="/vote-result" element={<VoteResult />}/>
          <Route path="/candidates" element={<Candidates />}/>
          <Route path="/candidates/:email" element={<Details />}/>
          <Route path="/vote-analysis" element={<VoteAnalysis />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
