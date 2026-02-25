import ContactForm from '../ContactForm/ContactForm';
import './Hero.css';

const usps = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        text: 'Short-notice appointments in [Your City] and the surrounding area',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
        text: 'Transparent pricing with no hidden costs',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        text: 'Dedicated contact person from initial contact to final acceptance',
    },
];

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__inner">

                {/* Left — Content */}
                <div className="hero__content">
                    <h1 className="hero__title">
                        Junk removal, assembly &amp; home services in [Your City] —
                        fast, reliable &amp; stress-free
                    </h1>
                    <p className="hero__subtitle">
                        We do the work for you. You save time, stress, and effort.
                    </p>
                    <p className="hero__desc">
                        Whether it's furniture assembly, apartment clearance or
                        decluttering – we take care of your request professionally,
                        cleanly and on time.
                    </p>
                    <ul className="hero__usps">
                        {usps.map((usp, i) => (
                            <li key={i} className="hero__usp-item">
                                <span className="hero__usp-icon">{usp.icon}</span>
                                <strong>{usp.text}</strong>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right — Contact Form Card */}
                <div className="hero__form-wrapper">
                    <ContactForm variant="hero" />
                </div>

            </div>
        </section>
    );
}
