import { useState, useRef, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickedOpen, setIsClickedOpen] = useState(false);
  // Ref to the container div for detecting clicks outside
  const menuRef = useRef(null);

  const showLinks = isHovered || isClickedOpen;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (isHovered || isClickedOpen)
      ) {
        setIsClickedOpen(false);
        setIsHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, isHovered, isClickedOpen]);

  const handleMouseEnter = () => {
    if (!isClickedOpen) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClickedOpen) {
      setIsHovered(false);
    }
  };

  const handleClickToggle = (event) => {
    event.preventDefault();

    setIsClickedOpen((prev) => !prev);
    setIsHovered(false);
  };

  return (
    <div
      className="webring-container"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="#"
        className={`webring-toggle ${
          isClickedOpen ? "webring-toggle-clicked" : ""
        }`}
        onClick={handleClickToggle}
      >
        Wander
      </a>
      <div className={`webring-links ${showLinks ? "show-links" : ""}`}>
        <a
          href="https://ringdt.rapid.workers.dev/prev?from=https://jibram.net"
          className="webring-link"
        >
          Backtrack
        </a>
        <a
          href="https://ringdt.rapid.workers.dev/next?from=https://jibram.net"
          className="webring-link"
        >
          Onwards
        </a>
      </div>
    </div>
  );
};

export default NavBar;
