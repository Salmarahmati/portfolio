import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components//Footer/Footer";
import ProjectCards from "./Components//Projects/ProjectCards";
import { projects } from "./Components/Projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <div className="App">
      <Header ></Header>
      <About ></About>
      <Education></Education>
      <Skills></Skills>
      <ProjectCards projects={projects} ></ProjectCards>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App;
