import React from 'react';

const Header = ({ score }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl">Rock, Paper, Scissors</h1>
      <div className="score">Score: {score}</div>
    </header>
  );
};

export default Header;
