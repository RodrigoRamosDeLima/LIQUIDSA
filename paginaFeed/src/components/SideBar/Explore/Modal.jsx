import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h3>{content.name}</h3>
        <img src={content.image} alt={content.name} className="drink-image" />
        <a href={content.link} target="_blank" rel="noopener noreferrer">
          Ver Receita
        </a>
      </div>
    </div>
  );
};

export default Modal;
