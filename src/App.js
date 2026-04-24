import { useEffect } from 'react';
import Home from './components/home'
import About from './components/about'
import Education from './components/education'
import Skills from './components/skills'
import Projects from './components/projects'
import Certificates from './components/certificates'
import Resume from './components/resume'
import Contact from './components/contact'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
    </>
  )
}

export default App