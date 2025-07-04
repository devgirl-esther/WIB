import React from 'react';
import './TransferModal.css'; // Import CSS for styling


const TransferModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Bank Transfer</h2>
                <button>Bank account Number: 0217867084 </button>
                <button>Bank Name:GTBANK</button>
                <button>Account name:Women Bitcoin Club</button>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default TransferModal;
