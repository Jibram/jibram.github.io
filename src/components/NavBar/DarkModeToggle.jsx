import './DarkModeToggle.css';

import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [fadeKey, setFadeKey] = useState(0);
  const handleClick = () => {
    setFadeKey((k) => k + 1);
    toggleTheme();
  };

  return (
    <button
      className="DarkModeToggleButton"
      onClick={handleClick}
      aria-label={
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
    >
      {theme === 'dark' ? (
        <div
          key={fadeKey}
          className={fadeKey > 0 ? 'fadeText' : ''}
          aria-label="Light Mode"
        >
          Light
        </div>
      ) : (
        <div
          key={fadeKey}
          className={fadeKey > 0 ? 'fadeText' : ''}
          aria-label="Dark Mode"
        >
          Dark
        </div>
      )}
    </button>
  );
};

export default DarkModeToggle;
