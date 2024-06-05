import React from 'react';

const Footer = ({ setModalIsOpen }) => {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <button onClick={() => setModalIsOpen(true)} className="bg-blue-500 text-white p-2 rounded">
        Regras
      </button>
    </footer>
  );
};

export default Footer;
