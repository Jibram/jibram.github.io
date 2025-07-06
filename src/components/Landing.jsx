import Contacts from './Contacts';
import ResumeButton from './ResumeButton';
import content from './content';

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Greeting">
        <img className="Me" src={content.ME.PHOTO} alt={'Me'} />
        <h1 className="Name">{content.ME.FIRSTNAME}</h1>
      </div>
      <Contacts />
      <ResumeButton />
    </div>
  );
};

export default Landing;
