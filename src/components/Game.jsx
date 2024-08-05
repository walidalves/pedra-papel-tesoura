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
      const choices = ['Rock', 'Paper', 'Scissors'];
      let randomChoice;
  
      // Check if the previous choice was 'Rock'
      if (previousComputerChoice === 'Rock') {
        const newChoices = ['Paper', 'Scissors'];
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
      setResult('Draw!');
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Scissors' && computer === 'Paper') ||
      (player === 'Paper' && computer === 'Rock')
    ) {
      setResult('You won!');
      setScore(prevScore => {
        console.log('Incrementing Score');
        return prevScore + 1;
      });
    } else {
      setResult('You lost!');
    }
  };  

  const playAgain = () => {
    setComputerChoice(null);
    setResult('');
    setWinnerDetermined(false);
    navigate('/');
  };

  if (playerChoice === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="result">
      <p>You chose: {playerChoice}</p>
      <p>The computer chose: {computerChoice}</p>
      <p>Result: {result}</p>
      <button onClick={playAgain} className="button">
        Play Again
      </button>
    </div>
  );
};

export default Game;
