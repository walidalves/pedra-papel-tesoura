//Imports and Declarations
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Game = ({ setScore }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { playerChoice } = location.state || {};
  //States
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  //Computer Choice
  useEffect(() => {
    if (playerChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);
      determineWinner(playerChoice, randomChoice);
    }
  }, [playerChoice]);
  
  //Winner Function
  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult('Empate!');
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      setResult('Você venceu!');
      setScore((score) => score + 1);
      setPlayerWins((wins) => wins + 1);
    } else {
      setResult('Você perdeu!');
      setComputerWins((wins) => wins + 1);
    }
  };

  // Win Check
  useEffect(() => {
    if (playerWins === 3) {
      alert('Parabéns! Você ganhou o jogo!');
      resetGame();
    } else if (computerWins === 3) {
      alert('Que pena! Você perdeu o jogo.');
      resetGame();
    }
  }, [playerWins, computerWins]);

  // General Reset
  const resetGame = () => {
    setPlayerWins(0);
    setComputerWins(0);
    setScore(0);
    navigate('/');
  };

  // General Play Again
  const playAgain = () => {
    setComputerChoice(null);
    setResult('');
    navigate('/');
  };
  
  //Rendering
  return (
    <div className="result">
      <p>Você escolheu: {playerChoice}</p>
      <p>O computador escolheu: {computerChoice}</p>
      <p>Resultado: {result}</p>
      <p>Vitórias do Jogador: {playerWins}</p>
      <p>Vitórias do Computador: {computerWins}</p>
      <button onClick={playAgain} className="button">
        Jogar Novamente
      </button>
    </div>
  );
};

export default Game;