import './Education.css';

import content from '../content';
import { useTheme } from '../../contexts/ThemeContext';

const School = ({ school }) => {
  return (
    <div className="School">
      <div className="Left">
        <img className="Logo" src={school.LOGO} />
      </div>
      <div className="Right">
        <div className="Name">{school.NAME}</div>
        <div className="Degree">{school.DEGREE}</div>
        <div className="Extra">{school.EXTRA}</div>
        <div className="Date">
          {school.START}
          {' - '}
          {school.END}
        </div>
        <ul className="Coursework">
          {school.CLASSES.map((val) => {
            return <li key={crypto.randomUUID()}>{val}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

const Education = () => {
  const { theme } = useTheme();
  return (
    <div className={`Schools ${theme}-theme-alt`}>
      <h2 style={{ textAlign: 'center' }}>Education</h2>
      {content.SCHOOLS.map((school) => {
        return <School school={school} key={school.NAME} />;
      })}
    </div>
  );
};

export default Education;
