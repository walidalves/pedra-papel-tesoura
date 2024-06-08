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
        <button onClick={() => handleChoice('Pedra')} className="button">
          Pedra
        </button>
        <button onClick={() => handleChoice('Papel')} className="button">
          Papel
        </button>
        <button onClick={() => handleChoice('Tesoura')} className="button">
          Tesoura
        </button>
      </div>
    </div>
  );
};

export default Play;