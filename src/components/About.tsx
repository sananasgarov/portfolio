import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="container">
      <div className="about-inner">
        <h2 className="about-text about-title">
          Discover <span className="gradient-text">My Story</span>
        </h2>

        <div ref={cardRef} className="glass-card about-card">
          <p className="about-paragraph">
            I am a Full Stack Developer with a deep passion for building modern, high-performance web applications.
            My journey began at <span className="about-highlight">Jet Academy</span>, where I honed my skills in both frontend and backend development.
          </p>
          <p className="about-paragraph">
            I thrive on the intersection of design and functionality, always aiming to create digital experiences that are not only beautiful but also intuitive and efficient.
          </p>
          <p className="about-paragraph">
            Whether it's interactive 3D elements, smooth animations, or robust backend logic, I love the challenge of turning complex problems into elegant solutions.
            My goal is to continue pushing the boundaries of what's possible in the web ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
