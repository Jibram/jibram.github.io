import content from "./content";

const Skills = () => (
  <div className="Skills">
    <div className="Skill">
      <div className="Type">{"Languages"}</div>
      <ul className="List">
        {content.SKILLS.LANGUAGES.map((language) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>
    </div>
    <div className="Skill">
      <div className="Type">{"Technologies"}</div>
      <ul className="List" style={{columnCount: 2}}>
        {content.SKILLS.TECHNOLOGIES.map((technology) => {
          return <li key={technology}>{technology}</li>;
        })}
      </ul>
    </div>
    <div className="Skill">
      <div className="Type">{"Spoken Languages"}</div>
      <ul className="List">
        {content.SKILLS.MISC.map((spokenLanguage) => {
          return <li key={spokenLanguage}>{spokenLanguage}</li>;
        })}
      </ul>
    </div>
  </div>
);
export default Skills;
