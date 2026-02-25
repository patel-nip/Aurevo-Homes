import { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        q: 'How much does a house clearance cost?',
        a: 'The costs depend on the scope of work, volume and any additional services such as disposal. You will receive a transparent fixed-price quote before any work begins — no hidden costs, no surprises.',
    },
    {
        q: 'Do you handle complete apartment clearances?',
        a: 'Yes — we handle complete apartment and house clearances from start to finish. This includes dismantling furniture, removing all items, professional disposal and handing over the property broom-clean.',
    },
    {
        q: 'Is the disposal being carried out professionally?',
        a: 'Yes. We dispose of all waste in accordance with applicable regulations. Bulky waste, electronics and other materials are separated and disposed of correctly.',
    },
    {
        q: 'Will I receive a fixed-price quote?',
        a: 'Absolutely. After discussing the scope of work, you will receive a clear fixed-price offer. This means you always know what you will pay — no surprise invoices afterwards.',
    },
    {
        q: 'Do you also work on short notice?',
        a: 'Yes. Depending on our current availability, short-notice appointments are possible. Contact us directly and we will do our best to accommodate your schedule.',
    },
    {
        q: 'Will the apartment be handed over in a clean and tidy condition?',
        a: "Yes — a broom-clean handover is part of our standard service. We don't consider the job done until everything is clean, tidy and to your satisfaction.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="faq" id="faq">
            <div className="faq__inner">

                {/* Left — Image + Intro */}
                <div className="faq__left">
                    <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
                    <h2>Do you have any more questions?</h2>
                    <p className="faq__desc">
                        Transparency builds trust. That's why we're answering the
                        most frequently asked questions here in advance.
                    </p>
                    <div className="faq__image-wrapper">
                        <img
                            src="/assets/man_with_drilling_machine_in_FAQ_section.jpg"
                            alt="Professional working on cabinet installation"
                        />
                    </div>
                </div>

                {/* Right — Accordion */}
                <div className="faq__list">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                            >
                                <button
                                    className="faq__question"
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.q}</span>

                                    {/* Single chevron that rotates — no swap needed */}
                                    <span className="faq__icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16" height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </button>

                                {/*
                  grid-template-rows trick:
                  0fr  → collapsed (no height)
                  1fr  → expanded (exact content height)
                  Smoother than max-height — no snap or delay
                */}
                                <div className="faq__answer-wrapper">
                                    <div className="faq__answer">
                                        <p>{faq.a}</p>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
