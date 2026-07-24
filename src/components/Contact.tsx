import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // immediateRender: false keeps the content in its natural, visible CSS
      // state until the trigger actually fires. With gsap.from() it was hidden
      // at load and stayed hidden forever if the trigger never fired.
      gsap.fromTo(
        ".contact-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="container">
      <div className="contact-inner">
        <h2 className="contact-animate section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-animate">
            <h3 className="contact-heading">Let's work together</h3>
            <p className="contact-lead">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon" style={{ color: 'var(--accent-primary)' }}>
                  <Mail size={24} />
                </div>
                <div className="contact-item-body">
                  <p className="contact-label">Email</p>
                  <a href="mailto:senan594az@gmail.com" className="contact-value">
                    senan594az@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon" style={{ color: 'var(--accent-secondary)' }}>
                  <Github size={24} />
                </div>
                <div className="contact-item-body">
                  <p className="contact-label">GitHub</p>
                  <a href="https://github.com/sananasgarov" target="_blank" rel="noopener noreferrer" className="contact-value">
                    https://github.com/sananasgarov
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon" style={{ color: 'var(--accent-primary)' }}>
                  <Linkedin size={24} />
                </div>
                <div className="contact-item-body">
                  <p className="contact-label">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sanan-asgarov-b30281328/" target="_blank" rel="noopener noreferrer" className="contact-value">
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
