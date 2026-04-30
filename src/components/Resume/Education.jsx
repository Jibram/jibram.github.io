import './Education.css';

import content from '../content';
import { useTheme } from '../../contexts/ThemeContext';

const School = ({ school }) => {
  return (
    <div className="School">
      <div className="SchoolHeader">
        <img className="Logo" src={school.LOGO} alt={school.NAME} />
        <div className="SchoolMeta">
          <div className="Name">{school.NAME}</div>
          <div className="Degree">{school.DEGREE}</div>
          {school.EXTRA && <div className="Extra">{school.EXTRA}</div>}
          <div className="Date">{school.START}{' - '}{school.END}</div>
        </div>
      </div>
      <ul className="Coursework">
        {school.CLASSES.map((val) => (
          <li key={crypto.randomUUID()}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

const Education = () => {
  const { theme } = useTheme();
  return (
    <div className={`Schools ${theme}-theme-alt`}>
      <h2 style={{ textAlign: 'center' }}>Education</h2>
      {content.SCHOOLS.map((school) => (
        <School school={school} key={school.NAME} />
      ))}
    </div>
  );
};

export default Education;
