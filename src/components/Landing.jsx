import Contacts from "./Contacts";
import content from "./content";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Greeting">
        <img className="Me" src={content.ME.PHOTO} alt={"Me"} />
        <h1 className="Name">
          {content.ME.FIRSTNAME}
          <nobr>{content.ME.LASTNAME}</nobr>
        </h1>
      </div>
      <Contacts />
    </div>
  );
};

export default Landing;
