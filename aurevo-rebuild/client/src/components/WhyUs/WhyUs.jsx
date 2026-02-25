import './WhyUs.css';

const points = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
        title: 'Transparent pricing',
        desc: 'No hidden costs. You receive a fixed-price quote before any work begins.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: 'Punctual & reliable',
        desc: 'We show up on time, every time. Your schedule is respected.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Clean and careful working methods',
        desc: 'We treat your home with respect. Every job is left spotless.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        title: 'Quick appointment scheduling – even at short notice',
        desc: 'We are flexible and available in [Your City] and the surrounding area.',
    },
];

export default function WhyUs() {
    return (
        <section className="whyus">
            <div className="whyus__inner">
                <div className="whyus__card">

                    {/* Left — Points */}
                    <div className="whyus__left">
                        {points.map((point, i) => (
                            <div key={i} className="whyus__item">
                                <div className="whyus__item-icon">
                                    <span className="check-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="whyus__item-text">
                                    <strong>{point.title}</strong>
                                    <p>{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right — Image */}
                    <div className="whyus__right">
                        <img
                            src="/assets/man_with_drilling_machine_after_service_section.jpg"
                            alt="Professional assembling furniture"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
