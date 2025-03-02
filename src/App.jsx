import "./App.css";
import About from "./components/Abouts/About";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Service from "./components/Services/service";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project"
import Testimony from "./components/Testimonals/Testimony";
import Contacts from "./components/Contact/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Service />
      <Skills />
      <Projects />
      <Testimony />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
