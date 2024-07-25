import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Game = ({ setScore }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { playerChoice } = location.state || {};

  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [winnerDetermined, setWinnerDetermined] = useState(false);
  const [previousComputerChoice, setPreviousComputerChoice] = useState(null);

  useEffect(() => {
    if (playerChoice !== null && computerChoice === null) {
      console.log('Player Choice:', playerChoice);
      const choices = ['Pedra', 'Papel', 'Tesoura'];
      let randomChoice;

      // Verificar se a escolha anterior foi 'Pedra'
      if (previousComputerChoice === 'Pedra') {
        const newChoices = ['Papel', 'Tesoura'];
        randomChoice = newChoices[Math.floor(Math.random() * newChoices.length)];
      } else {
        randomChoice = choices[Math.floor(Math.random() * choices.length)];
      }

      console.log('Computer Choice:', randomChoice);
      setComputerChoice(randomChoice);
      setPreviousComputerChoice(randomChoice);
    }
  }, [playerChoice, computerChoice, previousComputerChoice]);

  useEffect(() => {
    if (computerChoice && !winnerDetermined) {
      determineWinner(playerChoice, computerChoice);
      setWinnerDetermined(true);
    }
  }, [computerChoice, winnerDetermined, playerChoice]);

  const determineWinner = (player, computer) => {
    console.log(`Determining Winner - Player Choice: ${player}, Computer Choice: ${computer}`);
    if (player === computer) {
      setResult('Empate!');
    } else if (
      (player === 'Pedra' && computer === 'Tesoura') ||
      (player === 'Tesoura' && computer === 'Papel') ||
      (player === 'Papel' && computer === 'Pedra')
    ) {
      setResult('Você venceu!');
      setScore(prevScore => {
        console.log('Incrementing Score');
        return prevScore + 1;
      });
    } else {
      setResult('Você perdeu!');
    }
  };

  const playAgain = () => {
    setComputerChoice(null);
    setResult('');
    setWinnerDetermined(false);
    navigate('/');
  };

  if (playerChoice === undefined) {
    return <div>Carregando...</div>;
  }

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
