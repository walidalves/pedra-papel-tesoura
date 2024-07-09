import React from 'react';

const Footer = ({ setModalIsOpen, resetScore }) => {
  return (
    <footer className="bg-gray-200 text-center p-4 flex flex-col items-center space-y-2">
      <button onClick={() => setModalIsOpen(true)} className="bg-blue-500 text-white p-2 rounded">
        Regras
      </button>
      <button onClick={resetScore} className="bg-red-500 text-white p-2 rounded">
        Reset Game
      </button>
    </footer>
  );
};

export default Footer;
