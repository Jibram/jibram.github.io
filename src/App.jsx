import "./App.css";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Intro from "./components/Intro";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => (
  <div className="App">
    <NavBar />
    <Landing />
    <Intro />
    <Experiences />
    <Education />
    <Skills />
  </div>
);

export default App;
