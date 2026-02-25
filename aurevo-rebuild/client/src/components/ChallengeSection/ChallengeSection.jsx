import './ChallengeSection.css';

const challenges = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        text: 'No time for furniture assembly or renovation work?',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0
          l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0
          01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
            </svg>
        ),
        text: 'Unsure about disposal or dismantling?',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        text: 'Stressful about clearing out apartments or moving house?',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        ),
        text: 'Coordinating multiple tradespeople can be nerve-wracking?',
    },
];

export default function ChallengeSection() {
    return (
        <section className="challenge" id="challenge">
            <div className="challenge__inner">

                {/* Left — Text Content */}
                <div className="challenge__content">
                    <span className="section-tag">CHALLENGE</span>
                    <h2>Does this sound familiar?</h2>
                    <p className="challenge__desc">
                        You know these situations: The wardrobe is still disassembled
                        in the hallway. The kitchen installation is due, the apartment
                        needs to be emptied, and at the same time, there's no time.
                    </p>

                    <div className="challenge__items">
                        {challenges.map((c, i) => (
                            <div key={i} className="challenge__item">
                                <span className="challenge__icon">{c.icon}</span>
                                <strong>{c.text}</strong>
                            </div>
                        ))}
                    </div>

                    <p className="challenge__closing">
                        This is exactly where we come in: We are your structured,
                        reliable partner – so you can breathe easy again.
                    </p>
                </div>

                {/* Right — CTA Block */}
                <div className="challenge__cta">
                    <p>Ready to hand over the stress?</p>
                    <a href="#contact" className="challenge__cta-btn">
                        Book your appointment now
                    </a>
                </div>

            </div>
        </section>
    );
}
