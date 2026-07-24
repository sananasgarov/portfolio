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
  Component,
  Container,
  Triangle,
  TrainFront,
  CloudUpload,
  Cloud,
  Sparkles,
  SquareTerminal,
  Bot
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
  { name: "Docker", icon: Container },
  { name: "Vercel", icon: Triangle },
  { name: "Railway", icon: TrainFront },
  { name: "Render", icon: CloudUpload },
  { name: "AWS", icon: Cloud },
  { name: "ChatGPT", icon: Sparkles },
  { name: "Cursor", icon: SquareTerminal },
  { name: "GitHub Copilot", icon: Bot },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "back.out(1.7)",
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
    <section ref={sectionRef} id="skills" className="container">
      <h2 className="section-title">
        Core <span className="gradient-text">Skills</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="skill-card glass-card">
              <Icon size={40} aria-hidden="true" />
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
