import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="about-text" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '3rem' }}>
          Discover <span className="gradient-text">My Story</span>
        </h2>
        
        <div ref={cardRef} className="glass-card" style={{ padding: '3rem' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            I am a Full Stack Developer with a deep passion for building modern, high-performance web applications. 
            My journey began at <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Jet Academy</span>, where I honed my skills in both frontend and backend development.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            I thrive on the intersection of design and functionality, always aiming to create digital experiences that are not only beautiful but also intuitive and efficient.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Whether it's interactive 3D elements, smooth animations, or robust backend logic, I love the challenge of turning complex problems into elegant solutions. 
            My goal is to continue pushing the boundaries of what's possible in the web ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
