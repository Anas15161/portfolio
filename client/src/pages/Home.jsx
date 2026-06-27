import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Blog from '../components/sections/Blog';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import Services from '../components/sections/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Blog />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
