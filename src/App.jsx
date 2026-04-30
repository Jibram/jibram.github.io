import './App.css';

import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Resume from './pages/Resume';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Resume />} />
        {/* Add more routes here as needed */}
        {/* Example: <Route path="/about" element={<About />} /> */}
      </Routes>
      <footer className="footer">
        <p>{`© ${new Date().getFullYear()} Jibram. All rights reserved.`}</p>
      </footer>
    </div>
  );
};

export default App;
