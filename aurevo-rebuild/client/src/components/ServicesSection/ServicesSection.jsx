import './ServicesSection.css';

const gridItems = [
    {
        type: 'card',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: 'Assembling & adapting kitchens',
        desc: 'Precise kitchen installation including professional fitting of worktops. Stable, clean and perfectly fitted – so your kitchen is ready for immediate use.',
    },
    {
        type: 'card',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0
          l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12
          0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
            </svg>
        ),
        title: 'Assembling and disassembling furniture',
        desc: 'Professional assembly of your furniture – quickly, carefully, and without stress. If required, we also handle disassembly, including preparation for transport or disposal.',
    },
    {
        type: 'image',
        src: '/assets/man_with_drilling_machine.jpg',
        alt: 'Professional using power drill for assembly work',
    },
    {
        type: 'image',
        src: '/assets/man_carrying_box_filled_with_things_in_service_section.png',
        alt: 'Team member carrying items during house clearance',
    },
    {
        type: 'card',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="21 8 21 21 3 21 3 8" />
                <rect x="1" y="3" width="22" height="5" />
                <line x1="10" y1="12" x2="14" y2="12" />
            </svg>
        ),
        title: 'House clearance & household clearance',
        desc: 'Structured and discreet decluttering – from the basement to the entire apartment. Including professional disposal and a broom-clean handover.',
    },
    {
        type: 'card',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4l3 5v3h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
        title: 'Safe transport of furniture & household appliances',
        desc: 'We transport furniture, washing machines, refrigerators & more safely and professionally – also as part of a relocation.',
    },
    {
        type: 'card',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Professional cleaning',
        desc: 'Thorough cleaning after decluttering, moving, or renovation. Clean rooms: Ready for handover or new occupancy.',
    },
    {
        type: 'card',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
            </svg>
        ),
        title: 'Interior assembly & household-related services',
        desc: 'Installation of lamps, curtains, shelves and other interior work. Reliably and cleanly executed.',
    },
    {
        type: 'image',
        src: '/assets/top_most_man_with_marker_but_service_section.jpg',
        alt: 'Professional measuring and installing flooring',
    },
];

export default function ServicesSection() {
    return (
        <section className="services" id="services">
            <div className="services__inner">

                {/* Header */}
                <div className="services__header">
                    <span className="section-tag">SERVICES</span>
                    <h2>
                        Our services – we take care of what costs
                        time, energy and nerves
                    </h2>
                    <p className="services__subtitle">
                        Whether it's a move, a new purchase, or a household clearance –
                        we ensure everything is handled smoothly, cleanly, and on time.
                        One point of contact. Clear communication. Impeccable execution.
                    </p>
                </div>

                {/* 3-column grid — 6 cards + 3 images = 9 items */}
                <div className="services__grid">
                    {gridItems.map((item, i) =>
                        item.type === 'image' ? (
                            <div key={i} className="service-image-slot">
                                <img src={item.src} alt={item.alt} />
                            </div>
                        ) : (
                            <div key={i} className="service-card">
                                <div className="service-card__icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        )
                    )}
                </div>

            </div>
        </section>
    );
}
