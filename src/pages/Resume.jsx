import Me from '../components/Me';
import Contacts from '../components/Resume/Contacts';
import ResumeButton from '../components/Resume/ResumeButton';
import Intro from '../components/Resume/Intro';
import Experiences from '../components/Resume/Experiences';
import Education from '../components/Resume/Education';
import Skills from '../components/Resume/Skills';

const Resume = () => {
  return (
    <div>
      <Me />
      <Contacts />
      <ResumeButton />
      <Intro />
      <Experiences />
      <Education />
      <Skills />
    </div>
  );
};

export default Resume;
