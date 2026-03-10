import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="container">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 className="contact-animate" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '4rem', textAlign: 'center' }}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '3rem'
        }}>
          {/* Info Side */}
          <div className="contact-animate">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Let's work together</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email</p>
                  <a href="mailto:senan594az@gmail.com" style={{ fontWeight: 600 }}>
                    senan594az@gmail.com
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)' }}>
                  <Github size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>GitHub</p>
                  <a href="https://github.com/sananasgarov" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                    https://github.com/sananasgarov
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                  <Linkedin size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sanan-asgarov-b30281328/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                    https://www.linkedin.com/in/sanan-asgarov-b30281328/
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
