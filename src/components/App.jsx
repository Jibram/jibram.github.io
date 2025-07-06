import './App.css';

import NavBar from './NavBar';
import Landing from './Landing';
import Intro from './Intro';
import Experiences from './Experiences';
import Education from './Education';
import Skills from './Skills';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Intro />
      <Experiences />
      <Education />
      <Skills />
    </div>
  );
};

export default App;
