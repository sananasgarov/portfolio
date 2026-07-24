import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';

gsap.registerPlugin(ScrollTrigger);

// The mobile URL bar collapsing on scroll fires a resize, which would otherwise
// make ScrollTrigger recalculate and visibly jump mid-scroll.
ScrollTrigger.config({ ignoreMobileResize: true });

export default function App() {
  // Trigger positions for the sections after the pinned Projects rail depend on
  // the pin spacer and on image/font sizes, none of which are final on first
  // paint. Re-measure once everything has settled.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    const raf = requestAnimationFrame(refresh);
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', refresh);
    };
  }, []);

  return (
    <div className="portfolio-root">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
