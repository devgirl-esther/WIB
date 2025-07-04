import React from 'react';
import './BtcModal.css'; 
import copyicon from "../../../assets/copyicongrey.svg"
import { toast } from 'react-toastify';

const BtcModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 

const walletAddress= "Bc1qr8fuhs2pt9z4eut2970znarxl2txapwl3meagehaxywad0ql6n8qhwngsp"

const handleCopyAddress = async ()=> {
      await navigator.clipboard.writeText(walletAddress)
    
     
        toast.success("copy succcessful")
    
}

    return (
        <div className="modal-overlay"  onClick={onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()}>
                <h2>Bitcoin</h2>
                <div className="btcaddress">
                    <p> Address: Bc1qr8fuhs2pt9z4eut2970znarxl2txapwl3meagehaxywad0ql6n8qhwngsp

                    </p>
                    <img onClick={()=>{
                        handleCopyAddress()
                    }} src={copyicon}/>
                </div>
                <div>
                    <p className='network'>Network:BTC</p>
                </div>
                
              
            </div>
        </div>
    );
};

export default BtcModal;
