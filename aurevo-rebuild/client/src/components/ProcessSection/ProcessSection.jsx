import './ProcessSection.css';

const steps = [
    {
        number: '01',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0
          01-8.63-3.07A19.5 19.5 0 013.9 10.8a19.79 19.79 0
          01-3.07-8.67A2 2 0 012.81 0h3a2 2 0 012 1.72
          c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09
          7.91a16 16 0 006 6l.91-.91a2 2 0 012.11-.45
          c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
        ),
        title: 'Initial contact',
        desc: 'You reach out to us by phone, WhatsApp or via our contact form — quickly and without any obligation.',
    },
    {
        number: '02',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2
          0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        title: 'Free quote',
        desc: 'We assess your requirements and provide you with a transparent, fixed-price quote — no hidden costs, no surprises.',
    },
    {
        number: '03',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        title: 'Appointment scheduling',
        desc: 'We arrange a convenient appointment together – flexibly and, if required, also at short notice.',
    },
    {
        number: '04',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0
          001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91
          6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0
          017.94-7.94l-3.76 3.76z"/>
            </svg>
        ),
        title: 'Professional execution',
        desc: 'Our team carries out the work precisely, cleanly and on time – with full respect for your home.',
    },
    {
        number: '05',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        ),
        title: 'Acceptance & completion',
        desc: 'After completion, we carry out an acceptance check together. Only when you are satisfied is the job done.',
    },
];

export default function ProcessSection() {
    return (
        <section className="process" id="process">
            <div className="process__inner">

                {/* Header */}
                <div className="process__header">
                    <span className="section-tag">PROCESS</span>
                    <h2>How it works – simple, fast &amp; transparent</h2>
                    <p className="process__subtitle">
                        From initial contact to successful completion – your project is
                        in reliable hands at every stage.
                    </p>
                </div>

                {/* Steps Row */}
                <div className="process__steps">
                    {steps.map((step, i) => (
                        <div key={i} className="process__step-wrapper">

                            {/* Step */}
                            <div className="process__step">
                                <div className="process__step-icon">
                                    {step.icon}
                                </div>
                                <span className="process__step-number">{step.number}</span>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>

                            {/* Divider line between steps — not after last */}
                            {i < steps.length - 1 && (
                                <div className="process__divider">
                                    <div className="process__divider-line" />
                                    <svg
                                        className="process__divider-arrow"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16"
                                        viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2.5"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="process__cta">
                    <p>Ready to get started?</p>
                    <a href="#contact" className="process__cta-btn">
                        Book your appointment now
                    </a>
                </div>

            </div>
        </section>
    );
}
