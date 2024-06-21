import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Game = ({ setScore }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { playerChoice } = location.state || {};

  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (playerChoice) {
      const choices = ['Pedra', 'Papel', 'Tesoura'];
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);
      determineWinner(playerChoice, randomChoice);
    }
  }, [playerChoice]);

  const determineWinner = (player, computer) => {
    console.log(`Player Choice: ${player}, Computer Choice: ${computer}`);
    if (player === computer) {
      setResult('Empate!');
    } else if (
      (player === 'Pedra' && computer === 'Tesoura') ||
      (player === 'Tesoura' && computer === 'Papel') ||
      (player === 'Papel' && computer === 'Pedra')
    ) {
      setResult('Você venceu!');
      setScore(prevScore => prevScore + 1);
    } else {
      setResult('Você perdeu!');
    }
  };

  const playAgain = () => {
    setComputerChoice(null);
    setResult('');
    navigate('/');
  };

  return (
    <div className="result">
      <p>Você escolheu: {playerChoice}</p>
      <p>O computador escolheu: {computerChoice}</p>
      <p>Resultado: {result}</p>
      <button onClick={playAgain} className="button">
        Jogar Novamente
      </button>
    </div>
  );
};

export default Game;
