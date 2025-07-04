import React from 'react';
import './BtcModal.css'; 

const BtcModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Give your donation</h2>
                <button>BTC</button>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BtcModal;
