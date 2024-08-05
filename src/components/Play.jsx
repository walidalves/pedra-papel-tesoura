import React from 'react';
import { useNavigate } from 'react-router-dom';

const Play = () => {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    navigate('/game', { state: { playerChoice: choice } });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="header">Choose Rock, Paper, or Scissors</h1>
      <div className="flex space-x-4 choice-buttons">
        <button onClick={() => handleChoice('Rock')} className="button">
          Rock
        </button>
        <button onClick={() => handleChoice('Paper')} className="button">
          Paper
        </button>
        <button onClick={() => handleChoice('Scissors')} className="button">
          Scissors
        </button>
      </div>
    </div>
  );
};

export default Play;