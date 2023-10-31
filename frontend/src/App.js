import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import RegisteredVoters from './components/RegisteredVoters';
import VoteResult from './components/VoterResult';
import Candidates from './components/Candidates';
import Details from './components/Details';


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
        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
