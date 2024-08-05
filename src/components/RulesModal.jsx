import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const RulesModal = ({ isOpen, onClose }) => {
  console.log("RulesModal isOpen: ", isOpen);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Game Rules"
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="text-2xl font-bold">Game Rules</h2>
      <ul className="mt-4">
        <li>Rock beats scissors (by crushing or breaking them).</li>
        <li>Scissors beat paper (by cutting it).</li>
        <li>Paper beats rock (by wrapping it).</li>
        <li>Showing rock twice in a row is not allowed.</li>
      </ul>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
        Close
      </button>
    </Modal>
  );  
};

export default RulesModal;