import './Experiences.css';

import content from '../content';
import { useTheme } from '../../contexts/ThemeContext';

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const isHttpUrl = (url) => {
  try {
    return ['http:', 'https:'].includes(new URL(url).protocol);
  } catch {
    return false;
  }
};

// Only links substrings explicitly declared in `links` ({ text: absoluteUrl }).
// The href always comes from the map, never from the bullet text.
const linkify = (text, links) => {
  const entries = Object.entries(links || {}).filter(([, url]) =>
    isHttpUrl(url)
  );
  if (!entries.length) return text;
  const re = new RegExp(
    `(${entries.map(([k]) => escapeRe(k)).join('|')})`,
    'g'
  );
  return text.split(re).map((part, i) => {
    const match = entries.find(([k]) => k === part);
    if (i % 2 === 0 || !match) return part;
    return (
      <a
        key={i}
        className="Hyperlink BulletLink"
        href={match[1]}
        target="_blank"
        rel="noreferrer"
        referrerPolicy="no-referrer"
      >
        {part}
      </a>
    );
  });
};

const Experience = ({ exp }) => {
  return (
    <div className="Experience">
      <div className="ExpHeader">
        <a href={exp.LINK} className="LogoLink">
          {exp.LOGO ? (
            <img className="Logo" src={exp.LOGO} alt={exp.COMPANY} />
          ) : (
            <span className="Logo Monogram" role="img" aria-label={exp.COMPANY}>
              {exp.MONOGRAM}
            </span>
          )}
        </a>
        <div className="ExpMeta">
          <div className="Role">{exp.ROLE}</div>
          <div className="Company">
            <a className="Hyperlink" href={exp.LINK}>
              {exp.COMPANY}
            </a>
          </div>
          <div className="Location">{exp.LOCATION}</div>
          <div className="Date">
            {exp.START}
            {' - '}
            {exp.END}
          </div>
        </div>
      </div>
      <ul className="Bullets">
        {exp.INFO.map((bullet) => (
          <li className="Bullet" key={crypto.randomUUID()}>
            {linkify(bullet, exp.LINKS)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experiences = () => {
  const { theme } = useTheme();
  return (
    <div className={`Experiences ${theme}-theme`}>
      <h2 style={{ textAlign: 'center' }}>Experience</h2>
      {content.EXPERIENCES.map((experience) => (
        <Experience
          exp={experience}
          key={`exp-${experience.COMPANY}-${experience.START}`}
        />
      ))}
    </div>
  );
};

export default Experiences;
