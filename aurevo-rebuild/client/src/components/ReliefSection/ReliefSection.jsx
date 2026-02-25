import './ReliefSection.css';

const points = [
    'Free initial consultation – no obligation',
    'Transparent pricing with no hidden costs',
    'Punctuality, reliability & respect in dealing with your home',
    'Quick appointment scheduling – even at short notice',
];

export default function ReliefSection() {
    return (
        <section className="relief">
            <div className="relief__inner">

                {/* Left — Text Content */}
                <div className="relief__content">
                    <span className="section-tag">RELIEF</span>
                    <h2>Your local home service in [Your City]</h2>
                    <p className="relief__desc">
                        Whether it's a small repair or a complete cleanout — we work
                        in a structured, respectful and reliable manner.
                    </p>

                    <ul className="relief__list">
                        {points.map((point, i) => (
                            <li key={i} className="relief__item">
                                <span className="check-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <a href="#contact" className="relief__cta">
                        Book your appointment now
                    </a>
                </div>

                {/* Right — Image */}
                <div className="relief__image-wrapper">
                    <img
                        src="/assets/man_carrying_box_filled_with_things.png"
                        alt="Team member carrying items during house clearance"
                        className="relief__image"
                    />
                </div>

            </div>
        </section>
    );
}
