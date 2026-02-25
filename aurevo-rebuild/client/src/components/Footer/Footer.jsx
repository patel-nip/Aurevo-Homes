import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner">

                {/* Column 1 — Logo + About */}
                <div className="footer__col footer__col--brand">
                    <a href="#home" className="footer__logo">
                        <img
                            src="/assets/the_logo.svg"
                            alt="Company Logo"
                            className="footer__logo-img"
                        />
                    </a>
                    <p className="footer__tagline">
                        Your reliable partner for assembly, transport and home
                        services in [Your City] and the surrounding area.
                    </p>
                    <div className="footer__social">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="footer__social-link"
                        >
                            {/* Facebook Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7
                  a1 1 0 011-1h3z"/>
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="footer__social-link"
                        >
                            {/* Instagram Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 2 — Navigation */}
                <div className="footer__col">
                    <span className="footer__heading">NAVIGATE</span>
                    <nav className="footer__nav">
                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#process">Process</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>

                {/* Column 3 — Legal */}
                <div className="footer__col">
                    <span className="footer__heading">LEGAL</span>
                    <nav className="footer__nav">
                        <a href="/imprint">Imprint</a>
                        <a href="/terms">Terms of Use</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/cookie-policy">Cookie Policy</a>
                    </nav>
                </div>

                {/* Column 4 — Contact */}
                <div className="footer__col">
                    <span className="footer__heading">CONTACT</span>
                    <div className="footer__contact">

                        <a href="tel:+4915202025811" className="footer__contact-item">
                            <span className="footer__contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0
                    01-8.63-3.07A19.5 19.5 0 013.9 10.8a19.79 19.79 0
                    01-3.07-8.67A2 2 0 012.81 0h3a2 2 0 012 1.72
                    c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09
                    7.91a16 16 0 006 6l.91-.91a2 2 0 012.11-.45
                    c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                </svg>
                            </span>
                            <span>+49 1520 2025 811</span>
                        </a>

                        <a href="mailto:info@yourcompany.com" className="footer__contact-item">
                            <span className="footer__contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2
                    2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </span>
                            <span>info@yourcompany.com</span>
                        </a>

                        <div className="footer__contact-item">
                            <span className="footer__contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </span>
                            <span>Your Street 1, 12345 [Your City]</span>
                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="footer__bottom-inner">
                    <p className="footer__copyright">
                        © {currentYear} [Company Name]. All rights reserved.
                    </p>
                    <div className="footer__bottom-links">
                        <a href="/privacy">Privacy Policy</a>
                        <span className="footer__dot">·</span>
                        <a href="/terms">Terms of Use</a>
                        <span className="footer__dot">·</span>
                        <a href="/imprint">Imprint</a>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="footer__disclaimer">
                <div className="footer__disclaimer-inner">
                    This website is not affiliated with Facebook, Google, or Meta
                    Platforms, Inc. Facebook and Google are registered trademarks of
                    their respective owners. We use cookies and remarketing pixels to
                    display relevant advertising and improve our website.
                    Use of this website is at your own risk.
                </div>
            </div>

        </footer>
    );
}
