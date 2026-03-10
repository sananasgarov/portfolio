import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ 
      padding: '4rem 0 2rem', 
      borderTop: '1px solid var(--card-border)',
      background: 'rgba(5, 5, 5, 0.8)',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '2rem'
        }}>
          <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
            SANAN<span className="gradient-text">.</span>
          </a>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/sananasgarov" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sanan-asgarov-b30281328/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
          </div>

          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: 'max(0.8rem, 12px)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px' 
          }}>
            Designed & Built with <Heart size={14} style={{ color: '#ef4444' }} /> by Sanan Asgarov &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <style>{`
        .social-link {
          color: var(--text-secondary);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--card-border);
        }
        .social-link:hover {
          color: var(--accent-primary);
          background: rgba(59, 130, 246, 0.1);
          border-color: var(--accent-primary);
          transform: translateY(-3px);
          opacity: 1;
        }
      `}</style>
    </footer>
  );
}
