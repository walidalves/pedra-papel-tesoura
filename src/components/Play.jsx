import React from 'react';
import { useNavigate } from 'react-router-dom';

const Play = () => {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    navigate('/game', { state: { playerChoice: choice } });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="header">Escolha Pedra, Papel ou Tesoura</h1>
      <div className="flex space-x-4 choice-buttons">
        <button onClick={() => handleChoice('rock')}>
          Pedra
        </button>
        <button onClick={() => handleChoice('paper')}>
          Papel
        </button>
        <button onClick={() => handleChoice('scissors')}>
          Tesoura
        </button>
      </div>
    </div>
  );
};

export default Play;
