import React from 'react';
import { useNavigate } from 'react-router-dom';

const Play = () => {
  const navigate = useNavigate();

  const handleClick = (choice) => {
    navigate('/game', { state: { playerChoice: choice } });
  };

  return (
    <div className="choices">
      {['rock', 'paper', 'scissors'].map((choice) => (
        <button key={choice} onClick={() => handleClick(choice)} className="hand">
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Play;
