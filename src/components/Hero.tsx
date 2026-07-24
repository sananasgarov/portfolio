import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';

const words = [
  "I build modern web apps",
  "I create digital experiences",
  "I love coding"
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const fullText = words[currentWordIndex];

    if (isDeleting) {
      if (currentText === "") {
        // Finished deleting, move to next word
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 500);
      } else {
        // Continue deleting
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 50);
      }
    } else {
      if (currentText === fullText) {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      } else {
        // Continue typing
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // fromTo (not from) with clearProps: the end state is explicit and the
      // inline opacity is removed afterwards, so nothing can leave the hero
      // stuck at opacity 0 if a ScrollTrigger.refresh() re-renders the tween.
      gsap.fromTo(
        ".hero-animate",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power4.out",
          clearProps: "opacity,transform"
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} id="home" className="hero">
      <div className="container hero-inner">
        <h2 className="hero-animate hero-eyebrow">
          Welcome to my portfolio
        </h2>
        <h1 className="hero-animate hero-title">
          Hi, I'm <span className="gradient-text">Sanan Asgarov</span>
        </h1>
        <p className="hero-animate hero-typed">
          {currentText}<span className="hero-cursor"></span>
        </p>

        <div className="hero-animate hero-actions">
          <button className="btn-primary" onClick={scrollToProjects}>
            View My Work <MousePointer2 size={18} />
          </button>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
