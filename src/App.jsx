import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Play from './components/Play';
import Game from './components/Game';
import Footer from './components/Footer';
import RulesModal from './components/RulesModal';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    console.log("Modal State: ", modalIsOpen);
  }, [modalIsOpen]);

  const resetScore = () => {
    setScore(0);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Header score={score} />
        <Routes>
          <Route path="/" element={<Play />} />
          <Route path="/game" element={<Game setScore={setScore} />} />
          <Route path="/play-again" element={<Navigate to="/" />} />
        </Routes>
        <Footer setModalIsOpen={setModalIsOpen} resetScore={resetScore} />
        <RulesModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
