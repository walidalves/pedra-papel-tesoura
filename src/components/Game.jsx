// Imports and Declarations
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Game = ({ setScore }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { playerChoice } = location.state || {};
  
  // States
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  // Computer Choice
  useEffect(() => {
    if (playerChoice) {
      const choices = ['Pedra', 'Papel', 'Tesoura'];
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);
      determineWinner(playerChoice, randomChoice);
    }
  }, [playerChoice]);
  
  // Winner Function
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
      setPlayerWins(prevWins => {
        const newWins = prevWins + 1;
        console.log(`Player Wins: ${newWins}`);
        setScore(prevScore => {
          const newScore = prevScore + 1;
          console.log(`Score: ${newScore}`);
          return newScore;
        });
        return newWins;
      });
    } else {
      setResult('Você perdeu!');
      setComputerWins(prevWins => {
        const newWins = prevWins + 1;
        console.log(`Computer Wins: ${newWins}`);
        return newWins;
      });
    }
  };

  // Win Check
  useEffect(() => {
    console.log(`Player Wins: ${playerWins}, Computer Wins: ${computerWins}`);
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
    console.log('Resetando o jogo...');
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
  
  // Rendering
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
