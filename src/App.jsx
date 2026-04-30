import './App.css';

import NavBar from './components/NavBar/NavBar';
import Resume from './pages/Resume';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Resume />
      <footer className="footer">
        <p>{`© ${new Date().getFullYear()} Jibram. All rights reserved.`}</p>
      </footer>
    </div>
  );
};

export default App;
