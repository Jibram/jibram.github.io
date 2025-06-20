import content from "./content";

const Experience = ({ exp }) => (
  <div className="Experience">
    <div className="ExpLogo">
      <a className="LogoWrapper" href={exp.LINK}>
        <img className="Logo" src={exp.LOGO} />
      </a>
    </div>
    <div className="ExpDescription">
      <div className="Role"> {exp.ROLE} </div>
      <div className="Company">
        {" "}
        <a className="Hyperlink" href={exp.LINK}>
          {exp.COMPANY}
        </a>{" "}
      </div>
      <div className="Location"> {exp.LOCATION} </div>
      <div className="Date">
        {exp.START} {" - "} {exp.END}
      </div>
      <ul>
        {exp.INFO.map((bullet) => {
          return <li className="Bullet" key={crypto.randomUUID()}>{bullet}</li>;
        })}
      </ul>
    </div>
  </div>
);

const Experiences = () => (
  <div className="Experiences">
    <h2 style={{textAlign:'center'}}>Experience</h2>
    {content.EXPERIENCES.map((experience) => {
      return <Experience exp={experience} key={`exp-${experience.COMPANY}-${experience.START}`}/>;
    })}
  </div>
);

export default Experiences;
