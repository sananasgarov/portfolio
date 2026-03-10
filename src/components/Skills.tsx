import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Code, 
  Palette, 
  SquareCode, 
  Atom, 
  Server, 
  Database, 
  Globe, 
  GitBranch, 
  Code2, 
  Box, 
  Zap, 
  Rocket, 
  Terminal, 
  Layers,
  Trello as TrelloIcon,
  Slack as SlackIcon,
  FileText,
  Send,
  Component
} from 'lucide-react';

const skills = [
  { name: "HTML5", icon: Code },
  { name: "CSS3", icon: Palette },
  { name: "JavaScript", icon: SquareCode },
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "REST API", icon: Globe },
  { name: "Git", icon: GitBranch },
  { name: "TypeScript", icon: Code2 },
  { name: "Webpack", icon: Box },
  { name: "SQL", icon: Database },
  { name: "TanStack Query", icon: Zap },
  { name: "Next.js", icon: Rocket },
  { name: "Python", icon: Terminal },
  { name: "Redux", icon: Layers },
  { name: "Trello", icon: TrelloIcon },
  { name: "Slack", icon: SlackIcon },
  { name: "Notion", icon: FileText },
  { name: "Postman", icon: Send },
  { name: "Shadcn UI", icon: Component },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="container">
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '3.5rem', textAlign: 'center' }}>
        Core <span className="gradient-text">Skills</span>
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
        gap: '1.5rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="skill-card glass-card" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '1.5rem 1rem',
              textAlign: 'center',
              width: '100%',
              height: '160px',
              flexShrink: 0
            }}>
              <Icon size={40} style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
