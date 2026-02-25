import ContactForm from '../ContactForm/ContactForm';
import './CTASection.css';

const benefits = [
    'Free initial consultation – no obligation',
    'Fixed-price quote with no hidden costs',
    'Punctual, clean and reliable execution',
    'Quick appointment scheduling – even at short notice',
];

export default function CTASection() {
    return (
        <section className="cta" id="contact">
            <div className="cta__inner">

                {/* White Card */}
                <div className="cta__card">

                    {/* Left — Text Content */}
                    <div className="cta__left">
                        <span className="section-tag">CONTACT</span>
                        <h2>
                            Book your appointment now –
                            stress-free &amp; without obligation
                        </h2>
                        <p className="cta__desc">
                            Fill out the form and we'll get back to you as soon as
                            possible. No waiting, no hassle — just reliable service
                            from your local team.
                        </p>

                        <hr className="cta__divider" />

                        {/* Benefits List */}
                        <ul className="cta__benefits">
                            {benefits.map((b, i) => (
                                <li key={i} className="cta__benefit-item">
                                    <span className="check-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>

                        <hr className="cta__divider" />

                        {/* Contact Details */}
                        <div className="cta__contact-details">
                            <a href="tel:+4915202025811" className="cta__contact-item">
                                <span className="cta__contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2
                      19.79 19.79 0 01-8.63-3.07A19.5 19.5
                      0 013.9 10.8a19.79 19.79 0 01-3.07-8.67
                      A2 2 0 012.81 0h3a2 2 0 012 1.72
                      c.127.96.361 1.903.7 2.81a2 2 0 01-.45
                      2.11L7.09 7.91a16 16 0 006 6l.91-.91a2
                      2 0 012.11-.45c.907.339 1.85.573 2.81.7
                      A2 2 0 0122 16.92z"/>
                                    </svg>
                                </span>
                                <span>+49 1520 2025 811</span>
                            </a>
                            <a href="mailto:info@yourcompany.com" className="cta__contact-item">
                                <span className="cta__contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0
                      1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </span>
                                <span>info@yourcompany.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Right — Contact Form */}
                    <div className="cta__right">
                        <h3 className="cta__form-title">Send us a message</h3>
                        <ContactForm variant="cta" />
                    </div>

                </div>
            </div>
        </section>
    );
}
