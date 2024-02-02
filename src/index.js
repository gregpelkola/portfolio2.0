import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/index.css";

// Creates a root for the app using ReactDOM.createRoot() and selects the root element with document.getElementById('root').
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root using the root.render() method.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);