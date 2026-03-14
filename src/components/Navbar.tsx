import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import cv from '../assets/FrontEndCV (1).pdf';
import './Navbar.css';

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          SANAN<span className="gradient-text">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={cv} 
            download="Sanan_Asgarov_CV.pdf"
            className="btn-primary cv-btn"
          >
            <Download size={16} /> CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={cv} 
            download="Sanan_Asgarov_CV.pdf"
            className="btn-primary cv-btn mobile-cv-btn"
            style={{ marginTop: '1rem' }}
          >
           <Download size={16} /> Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
