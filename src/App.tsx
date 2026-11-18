
import Navbar from "./components/navigation/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";
import Contributions from "./sections/Contributions";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Achievements />
        <Contributions />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
