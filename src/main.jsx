import React from 'react';
import ReactDOM from 'react-dom/client'; // *** IMPORTANT: Notice the '/client' suffix ***
import App from './components/App.jsx'; // Make sure the extension matches your App file, e.g., './App.jsx' or './App.js'
import './main.css'; // Or './main.css' if that's what you named it and want it global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
