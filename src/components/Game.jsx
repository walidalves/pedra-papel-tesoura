import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Game = ({ setScore }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { playerChoice } = location.state || {};

  // States
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [roundWins, setRoundWins] = useState({ player: 0, computer: 0 });

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
      setRoundWins(prevWins => {
        const newWins = { ...prevWins, player: prevWins.player + 1 };
        console.log(`Updated Round Wins (Player): ${JSON.stringify(newWins)}`);
        return newWins;
      });
    } else {
      setResult('Você perdeu!');
      setRoundWins(prevWins => {
        const newWins = { ...prevWins, computer: prevWins.computer + 1 };
        console.log(`Updated Round Wins (Computer): ${JSON.stringify(newWins)}`);
        return newWins;
      });
    }
  };

  // Win Check
  useEffect(() => {
    console.log(`Player Wins: ${roundWins.player}, Computer Wins: ${roundWins.computer}`);
    if (roundWins.player >= 2) {
      alert('Parabéns! Você ganhou a melhor de três!');
      setScore(prevScore => prevScore + 1);
      resetGame();
    } else if (roundWins.computer >= 2) {
      alert('Que pena! Você perdeu a melhor de três.');
      resetGame();
    }
  }, [roundWins, setScore]);

  // General Reset
  const resetGame = () => {
    console.log('Resetando o jogo...');
    setRoundWins({ player: 0, computer: 0 });
    setResult('');
    setComputerChoice(null);
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
      <button onClick={playAgain} className="button">
        Jogar Novamente
      </button>
    </div>
  );
};

export default Game;
