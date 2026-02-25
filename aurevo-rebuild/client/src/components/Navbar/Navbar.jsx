import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add shadow on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on nav link click (mobile)
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">

                {/* Logo */}
                <a href="#home" className="navbar__logo">
                    <img src="/assets/the_logo.svg" alt="Company Logo" />
                </a>

                <div className="navbar__divider" />

                {/* Center Nav Links */}
                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
                    <li><a href="#process" onClick={handleLinkClick}>Process</a></li>
                    <li><a href="#faq" onClick={handleLinkClick}>FAQ</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>

                {/* Right Side */}
                <div className="navbar__right">
                    <a href="tel:+4915202025811" className="navbar__phone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                A19.5 19.5 0 013.9 10.8a19.79 19.79 0 01-3.07-8.67
                A2 2 0 012.81 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81
                a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.91-.91
                a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7
                A2 2 0 0122 16.92z"/>
                        </svg>
                        +49 1520 2025 811
                    </a>
                    <a href="#contact" className="navbar__cta">Get in touch now</a>
                </div>

                {/* Burger Button (mobile only) */}
                <button
                    className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>

            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="navbar__mobile-menu">
                    <a href="#services" onClick={handleLinkClick}>Services</a>
                    <a href="#process" onClick={handleLinkClick}>Process</a>
                    <a href="#faq" onClick={handleLinkClick}>FAQ</a>
                    <a href="#contact" onClick={handleLinkClick}>Contact</a>
                    <a href="tel:+4915202025811" className="navbar__mobile-phone">
                        📞 +49 1520 2025 811
                    </a>
                    <a href="#contact" className="navbar__mobile-cta" onClick={handleLinkClick}>
                        Get in touch now
                    </a>
                </div>
            )}
        </nav>
    );
}
