import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './css/App.css';
import Home from './components/views/Home';
import IssuePermit from './components/views/IssuePermit';
import Holders from './components/views/Holders';
import PermitTypes from './components/views/PermitTypes';
import Garages from './components/views/Garages';
import Violations from './components/views/Violations';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__container">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issue" element={<IssuePermit />} />
            <Route path="/holders" element={<Holders />} />
            <Route path="/types" element={<PermitTypes />} />
            <Route path="/garages" element={<Garages />} />
            <Route path="/violations" element={<Violations />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
