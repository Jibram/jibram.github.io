import './Intro.css';

import content from '../content';
import { useTheme } from '../../contexts/ThemeContext';

const Intro = () => {
  const { theme } = useTheme();

  return (
    <div className={`Intro ${theme}-theme-alt`}>
      <p className="About">{content.ABOUT}</p>
    </div>
  );
};

export default Intro;
