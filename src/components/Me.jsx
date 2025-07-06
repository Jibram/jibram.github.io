import './Me.css';

import content from './content';

const Me = () => {
  return (
    <div className="AboutMe">
      <div className="Greeting">
        <img className="Me" src={content.ME.PHOTO} alt={'Me'} />
        <h1 className="Name">{content.ME.FIRSTNAME}</h1>
      </div>
    </div>
  );
};

export default Me;
