import React from 'react';
import ReactDOM from 'react-dom/client'; // *** IMPORTANT: Notice the '/client' suffix ***
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App.jsx'; // Make sure the extension matches your App file, e.g., './App.jsx' or './App.js'
import './main.css'; // Or './main.css' if that's what you named it and want it global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
