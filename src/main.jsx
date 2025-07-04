// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App'; // Ensure the correct path to your App component
import "./index.css"
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ToastContainer/>
            <App />
        
    </React.StrictMode>
);
