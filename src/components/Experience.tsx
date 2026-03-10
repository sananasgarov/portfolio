import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
    date: "2025 - Present",
    description: "Leading a team of frontend developers to build scalable web applications using React and TypeScript."
  },
  {
    title: "Frontend Developer Intern",
    organization: "4SIM",
    date: "2026-present",
    description: "Contributing to the development of user interfaces for simulation software using React and Redux."
  },
  {
    title: "Python Backend Program(100% scholarship)",
    organization: "Holberton School Baku",
    date: "2026-present",
    description: "Intensive 4-month program covering Python, Flask, SQL, Docker, and cloud technologies."
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
          // Only animate if not mobile (simplified check)
    if (window.innerWidth > 768) {
      const ctx = gsap.context(() => {
        gsap.from(".timeline-item-wrapper", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          opacity: 0,
          x: (index) => index % 2 === 0 ? -50 : 50,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out"
        });
      }, sectionRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="container">
      <br /><br />
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '4rem', textAlign: 'center' }}>
        Experience & <span className="gradient-text">Education</span>
      </h2>
      
      <div className="timeline-container" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Central Line */}
        <div className="timeline-line"></div>

        {timeline.map((item, index) => (
          <div key={index} className="timeline-item-wrapper" style={{ 
            display: 'flex', 
            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
            paddingBottom: '3rem',
            position: 'relative',
            width: '100%'
          }}>
            {/* Dot */}
            <div className="timeline-dot"></div>

            <div className={`glass-card timeline-content ${index % 2 === 0 ? 'left' : 'right'}`} style={{ 
              width: '45%', 
              padding: '1.5rem',
              textAlign: index % 2 === 0 ? 'right' : 'left'
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{item.date}</span>
              <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{item.title}</h3>
              <p style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.organization}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-line {
          position: absolute; 
          left: 50%; 
          top: 0; 
          bottom: 0; 
          width: 2px; 
          background: rgba(255,255,255,0.1);
          transform: translateX(-50%);
        }
        .timeline-dot {
          position: absolute; 
          left: 50%; 
          top: 0; 
          width: 12px; 
          height: 12px; 
          border-radius: 50%; 
          background: var(--accent-primary);
          box-shadow: 0 0 10px var(--accent-primary);
          transform: translateX(-50%);
          z-index: 2;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
            transform: none;
          }
          .timeline-item-wrapper {
            justify-content: flex-start !important;
            padding-left: 45px;
          }
          .timeline-dot {
            left: 20px;
            transform: none;
            top: 25px; /* Adjust to match card top slightly */
          }
          .timeline-content {
            width: 100% !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
