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
      gsap.from(".hero-animate", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} id="home" className="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
        <h2 className="hero-animate" style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
          Welcome to my portfolio
        </h2>
        <h1 className="hero-animate" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Hi, I'm <span className="gradient-text">Sanan Asgarov</span>
        </h1>
        <p className="hero-animate" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', color: 'var(--text-secondary)', marginBottom: '3rem', minHeight: '1.5em', fontWeight: 300 }}>
          {currentText}<span className="cursor" style={{ borderRight: '2px solid var(--accent-primary)', marginLeft: '2px', animation: 'blink 1s infinite' }}></span>
        </p>
        
        <div className="hero-animate" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={scrollToProjects} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            View My Work <MousePointer2 size={18} />
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              color: 'white', 
              border: '1px solid var(--card-border)',
              padding: '12px 32px',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            Contact
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
