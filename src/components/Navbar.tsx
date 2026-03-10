import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import cv from '../assets/FrontEndCV (1).pdf';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 100, 
      transition: 'all 0.3s ease',
      padding: scrolled ? '0.8rem 0' : '1.2rem 0',
      background: scrolled || isOpen ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
      backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
      borderBottom: scrolled || isOpen ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', zIndex: 101 }}>
          SANAN<span className="gradient-text">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{ 
                fontSize: '0.9rem', 
                fontWeight: 500, 
                color: scrolled ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? 'var(--text-primary)' : 'var(--text-secondary)'}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={cv} 
            download="Sanan_Asgarov_CV.pdf"
            className="btn-primary" 
            style={{ 
              padding: '8px 20px', 
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Download size={16} /> CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            zIndex: 101,
            display: 'none' // Hidden by default, shown via CSS
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(5, 5, 5, 0.98)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 100
        }} className="mobile-menu">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: 600, 
                color: 'var(--text-primary)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={cv} 
            download="Sanan_Asgarov_CV.pdf"
            className="btn-primary" 
            style={{ 
              padding: '12px 30px', 
              fontSize: '1.1rem',
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Download size={20} /> Download CV
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
