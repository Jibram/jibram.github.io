import './Skills.css';

import content from '../content';

const Skills = () => (
  <div className="Skills">
    <div className="Skill">
      <div className="Type">Languages</div>
      <div className="Pills">
        {content.SKILLS.LANGUAGES.map((language) => (
          <span className="Pill" key={language}>{language}</span>
        ))}
      </div>
    </div>
    <div className="Skill">
      <div className="Type">Technologies</div>
      <div className="Pills">
        {content.SKILLS.TECHNOLOGIES.map((technology) => (
          <span className="Pill" key={technology}>{technology}</span>
        ))}
      </div>
    </div>
    <div className="Skill">
      <div className="Type">Spoken Languages</div>
      <div className="Pills">
        {content.SKILLS.MISC.map((lang) => (
          <span className="Pill" key={lang}>{lang}</span>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
