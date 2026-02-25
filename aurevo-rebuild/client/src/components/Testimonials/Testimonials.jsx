import './Testimonials.css';

const reviews = [
    {
        stars: 5,
        text: 'I regularly work with [Company] Hausservice for apartment clear-outs. They are absolutely reliable, punctual, and always do a clean job. This is invaluable, especially when handing things over to new owners.',
        name: 'Michael K.',
        role: 'Real estate agent from [Your City]',
        hasAvatar: false,
    },
    {
        stars: 5,
        text: 'We had neither the time nor the energy for furniture assembly and decluttering. The team was punctual, organized, and very respectful. Everything went smoothly – a huge relief!',
        name: 'Sabine W.',
        role: 'Working mother & moving customer',
        hasAvatar: false,
    },
    {
        stars: 4,
        text: 'Professional service, transparent pricing, and fast communication. Especially reliable for short-notice assignments. Highly recommended.',
        name: 'Thomas R.',
        role: 'Property manager',
        hasAvatar: true,
    },
    {
        stars: 4,
        text: 'The clearing out of my apartment was carried out discreetly and respectfully. Everything was organized and stress-free for me.',
        name: 'Peter M.',
        role: 'Accountant',
        hasAvatar: false,
    },
    {
        stars: 5,
        text: 'My kitchen was installed perfectly, including the adjustment of the worktop. The work was done very precisely, and everything was left clean.',
        name: 'Anna L.',
        role: 'Healthcare worker',
        hasAvatar: false,
    },
    {
        stars: 4,
        text: 'From the initial inquiry to the execution, everything was transparent and reliable. No hidden costs, no surprises.',
        name: 'Erik K.',
        role: 'Project manager',
        hasAvatar: true,
    },
];

// Renders filled + empty stars
function Stars({ count }) {
    return (
        <div className="stars">
            {[1, 2, 3, 4, 5].map((i) => (
                <svg
                    key={i}
                    className={`star ${i <= count ? 'star--filled' : 'star--empty'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18" height="18"
                    viewBox="0 0 24 24"
                    fill={i <= count ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14
            18.18 21.02 12 17.77 5.82 21.02 7 14.14
            2 9.27 8.91 8.26 12 2"/>
                </svg>
            ))}
        </div>
    );
}

// Avatar — photo placeholder or initials
function Avatar({ name, hasAvatar }) {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    return (
        <div className={`review-avatar ${hasAvatar ? 'review-avatar--photo' : ''}`}>
            {hasAvatar ? (
                <div className="review-avatar__photo">
                    <span>{initials}</span>
                </div>
            ) : (
                <span>{initials}</span>
            )}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonials__inner">

                {/* Header */}
                <div className="testimonials__header">
                    <h2>
                        Here's what our customers from{' '}
                        <span className="testimonials__city">[Your City]</span>{' '}
                        and the surrounding area are saying
                    </h2>
                    <p>Honest feedback from people who have entrusted us with their homes.</p>
                </div>

                {/* 3×2 Grid */}
                <div className="testimonials__grid">
                    {reviews.map((review, i) => (
                        <div key={i} className="review-card">

                            {/* Stars */}
                            <Stars count={review.stars} />

                            {/* Review Text */}
                            <p className="review-card__text">{review.text}</p>

                            {/* Author */}
                            <div className="review-card__author">
                                <Avatar name={review.name} hasAvatar={review.hasAvatar} />
                                <div className="review-card__author-info">
                                    <strong>{review.name}</strong>
                                    <span>{review.role}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
