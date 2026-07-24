import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import rentacar from '../assets/rentcar.png'
import shop from '../assets/shop.png'
import todoapp from '../assets/todoapp.png'
import game from '../assets/game.png'
import samiyya from '../assets/samiyya.png'
import mit from '../assets/mit.png'

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Samiyya Studio",
    category: "Client Work",
    description: "Marketing site for a beauty salon in Pittsburgh, PA — service catalog, booking flow and SEO-optimized pages.",
    tech: ["Next.js", "React", "TypeScript", "SEO"],
    github: null,
    live: "https://www.samiyyastudio.com/",
    image: samiyya,
    color: "#ec4899"
  },
  {
    title: "MİT Karyera Mərkəzi",
    category: "Client Work",
    description: "Corporate site for an IT career center, built multilingual to reach both local and international students.",
    tech: ["Next.js", "React", "TypeScript", "i18n"],
    github: null,
    live: "https://mitconsulting.tech/en",
    image: mit,
    color: "#0ea5e9"
  },
  {
    title: "Rent a Car App",
    category: "Full Stack",
    description: "A premium car rental experience with real-time fleet management and booking system.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/sananasgarov/JetAcademyFinalProyect",
    live: "https://rent-car-mu-ten.vercel.app/",
    image: rentacar,
    color: "#3b82f6"
  },
  {
    title: "EcoShop E-commerce",
    category: "E-Commerce",
    description: "Basic E-Commerce System",
    tech: ["React", "Redux", "Tailwind", "Firebase"],
    github: "https://github.com/sananasgarov/ReactProyects/tree/main/Shop",
    live: "https://shop-chi-beige.vercel.app/",
    image: shop,
    color: "#10b981"
  },
  {
    title: "TaskFlow Pro",
    category: "Productivity",
    description: "Basic TaskFlow System",
    tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    github: "https://github.com/sananasgarov/todos.git",
    live: "https://todos-iota-eight.vercel.app/",
    image: todoapp,
    color: "#f59e0b"
  },
  {
    title: "GameHub Nexus",
    category: "Gaming",
    description: "Discovery platform for gamers to explore new titles, news, and community trends.",
    tech: ["React", "API Integration", "Framer Motion"],
    github: "https://github.com/sananasgarov/GamingPlatform",
    live: "https://gaming-platform-alpha.vercel.app/",
    image: game,
    color: "#8b5cf6"
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Pinned horizontal scroll needs both room to move and room to breathe.
    // Below this, the CSS in index.css stacks the slides vertically instead —
    // keep the two queries in sync.
    mm.add("(min-width: 1025px) and (min-height: 600px)", () => {
      const track = sectionRef.current;
      if (!track) return;

      // Measured instead of hardcoded so adding a project doesn't break the scroll.
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.fromTo(
        track,
        { translateX: 0 },
        {
          translateX: () => -getDistance(),
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${getDistance()}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="projects-outer-container" ref={triggerRef} id="projects">
      <div className="projects-sticky-wrapper">
        <div className="projects-header">
          <h2 className="projects-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="projects-subtitle">A collection of projects that define my journey.</p>
        </div>
        
        <div ref={sectionRef} className="projects-horizontal-scroll">
          {projects.map((project, index) => (
            <div key={index} className="project-slide">
              <div className="project-card-v2 glass-card">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="project-overlay" style={{ background: `linear-gradient(to top, ${project.color}dd, transparent)` }}>
                    <div className="project-category">{project.category}</div>
                  </div>
                </div>
                
                <div className="project-content-v2">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  
                  <div className="project-tech-stack">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  
                  <div className="project-links-v2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                        <Github size={20} />
                        <span>Source</span>
                      </a>
                    )}
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                      <ExternalLink size={20} />
                      <span>{project.github ? "Live Demo" : "Visit Site"}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="project-slide final-slide">
            <div className="view-more-card glass-card">
              <h3>Let's build something <span className="gradient-text">amazing</span> together.</h3>
              <a href="#contact" className="btn-primary">Get In Touch <ArrowRight size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
