import './Interests.css';
import { Link } from 'react-router-dom';

const Interests = () => {
  return (
    <div className="Interests">
      <p>Here are some things I like</p>
      <ul>
        <li>{'PC Games (+ Mario games)'}</li>
        <ul className="column-list">
          <li>League of Legends</li>
          <li>Escape from Tarkov</li>
          <li>World of Warcraft</li>
          <li>Starcraft 2</li>
          <li>Among Us</li>
          <li>Super Smash Bros</li>
          <li>Mario Kart</li>
          <li>Mario Party</li>
        </ul>
        <li>Language Learning</li>
        <ul>
          <li>🇲🇽🇺🇸🇰🇷</li>
        </ul>
        <li>Traveling</li>
        <ul>
          <li>🇺🇸🇰🇷🇯🇵🇭🇰🇲🇽🇨🇦🇵🇪🇬🇧🇫🇷🇮🇹🇻🇦🇸🇬🇲🇾</li>
        </ul>
        <li>Sports</li>
        <ul className="column-list">
          <li>Table Tennis</li>
          <li>Archery</li>
          <li>Baseball</li>
          <li>Swimming</li>
          <li>UFC</li>
        </ul>
        <li>Tech</li>
        <ul>
          <li>
            Check out <Link to="/resume">Hire Me</Link>
          </li>
        </ul>
        <li>Music</li>
        <ul>
          <li>Genres</li>
          <ul className="column-list">
            <li>Jazz Rap</li>
            <li>Hip Hop</li>
            <li>Lo-Fi</li>
            <li>Pop Rock</li>
          </ul>
        </ul>
        <ul>
          <li>Artists</li>
          <ul className="column-list">
            <li>Nujabes</li>
            <li>Lil Nas X</li>
            <li>Kendrick Lamar</li>
            <li>Soriheda</li>
            <li>Good Kid</li>
            <li>Bo Burnham</li>
          </ul>
        </ul>
      </ul>
      <p>
        These days, I am on break in Seoul and occassionally visiting other
        countries nearby. I am thinking about what to add to this website.
      </p>
      <p>
        Got any suggestions? <a href="mailto:jibramswe@gmail.com">Email me</a>
      </p>
    </div>
  );
};
export default Interests;
