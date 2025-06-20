import content from "./content";

const Contacts = () => (
  <div className="Contacts">
    {content.CONTACT.map((contact) => {
      return (
        <a href={contact.HREF} key={`exp-${contact.ALT}`}>
          <img className="Contact" src={contact.SRC} alt={contact.ALT} />
        </a>
      );
    })}
  </div>
);

export default Contacts;
