import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const RulesModal = ({ isOpen, onClose }) => {
  console.log("RulesModal isOpen: ", isOpen);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Regras do Jogo"
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="text-2xl font-bold">Regras do Jogo</h2>
      <ul className="mt-4">
        <li>Pedra ganha da tesoura (amassando-a ou quebrando-a).</li>
        <li>Tesoura ganha do papel (cortando-o).</li>
        <li>Papel ganha da pedra (embrulhando-a).</li>
        <li>Não é permitido mostrar pedra duas vezes seguidas.</li>
      </ul>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
        Fechar
      </button>
    </Modal>
  );
};

export default RulesModal;