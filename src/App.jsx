import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing';
import Resume from './pages/Resume';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resume" element={<Resume />} />
          {/* Add more routes here as needed */}
          {/* Example: <Route path="/about" element={<About />} /> */}
        </Routes>
        <footer className="footer">
          <p>{`© ${new Date().getFullYear()} Jibram. All rights reserved.`}</p>
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
