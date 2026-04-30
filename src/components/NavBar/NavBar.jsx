import './NavBar.css';

import { useState } from 'react';
import { useEffect, useRef } from 'react';
import DarkModeToggle from './DarkModeToggle';
import WebRing from './WebRing';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navBar" ref={navRef}>
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      <div className={`navBar-links${menuOpen ? ' open' : ''}`}>
        <DarkModeToggle />
        <WebRing />
      </div>
    </nav>
  );
};

export default NavBar;
