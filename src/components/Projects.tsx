import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import rentacar from '../assets/rentcar.png'
import shop from '../assets/shop.png'
import todoapp from '../assets/todoapp.png'
import game from '../assets/game.png'

gsap.registerPlugin(ScrollTrigger);

const projects = [
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
    
    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
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
                  <img src={project.image} alt={project.title} className="project-img" />
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                      <Github size={20} />
                      <span>Source</span>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
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
