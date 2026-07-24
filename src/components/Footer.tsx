import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#home" className="footer-logo">
            SANAN<span className="gradient-text">.</span>
          </a>

          <div className="footer-socials">
            <a href="https://github.com/sananasgarov" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sanan-asgarov-b30281328/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>

          <p className="footer-note">
            Designed &amp; Built with <Heart size={14} style={{ color: '#ef4444' }} /> by Sanan Asgarov &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
