import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    title: "Full Stack Development mentor",
    organization: "Jet Academy",
    date: "2025 - 2026",
    description: "In-depth training in modern web technologies including React, Node.js, and MongoDB."
  },
  {
    title: "Frontend Developer Team Lead",
    organization: "Nummix",
    date: "2025 - 2026",
    description: "Led a team of frontend developers to build scalable web applications using React and TypeScript."
  },
  {
    title: "Frontend Developer Intern",
    organization: "4SIM",
    date: "2026",
    description: "Contributed to the development of user interfaces for simulation software using React and Redux."
  },
  {
    title: "Python Backend Program(100% scholarship)",
    organization: "Holberton School Baku",
    date: "2026-present",
    description: "Intensive 4-month program covering Python, Flask, SQL, Docker, and cloud technologies."
  },
  {
    title: "Frontend Development Mentor",
    organization: "MİT Karyera Mərkəzi",
    date: "2026 - Present",
    description: "Mentoring students in modern frontend development, guiding them through React, TypeScript and real-world project work."
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // matchMedia already scopes selectors to the element passed as 3rd arg and
    // cleans up its own tweens — no nested gsap.context needed.
    const mm = gsap.matchMedia();

    const reveal = (from: gsap.TweenVars) =>
      gsap.fromTo(
        ".timeline-item-wrapper",
        from,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

    // Side-to-side entrance only makes sense while the timeline is two-column,
    // which Experience.css collapses at 900px.
    mm.add("(min-width: 901px)", () => {
      reveal({ opacity: 0, x: (index: number) => (index % 2 === 0 ? -50 : 50) });
    }, sectionRef);

    // Single-column timeline: fade up in place, no horizontal offset.
    mm.add("(max-width: 900px)", () => {
      reveal({ opacity: 0, y: 30 });
    }, sectionRef);

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="container">
      <h2 className="section-title">
        Experience &amp; <span className="gradient-text">Education</span>
      </h2>

      <div className="timeline-container">
        {/* Central Line */}
        <div className="timeline-line"></div>

        {timeline.map((item, index) => (
          <div key={index} className={`timeline-item-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}>
            {/* Dot */}
            <div className="timeline-dot"></div>

            <div className={`glass-card timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-org">{item.organization}</p>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
