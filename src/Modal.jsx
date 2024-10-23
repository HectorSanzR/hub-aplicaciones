import React from 'react';
import './Modal.css';

const Modal = ({ app, closeModal }) => {
    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>×</span>
                <h2>{app.title}</h2>
                <p>{app.description}</p>
                <div className="image-container">
                    {app.images.map((image, index) => (
                        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={`Imagen ${index + 1}`} className="image" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
