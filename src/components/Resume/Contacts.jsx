import './Contacts.css';

import content from '../content';
import { useTheme } from '../../contexts/ThemeContext';

const Contacts = () => {
  const { theme } = useTheme();
  return (
    <div className="Contacts">
      {content.CONTACT.map((contact) => {
        return (
          <a href={contact.HREF} key={`exp-${contact.ALT}`}>
            <img
              className="Contact"
              src={
                theme === 'dark' && contact.SRCDARK
                  ? contact.SRCDARK
                  : contact.SRC
              }
              alt={contact.ALT}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Contacts;
