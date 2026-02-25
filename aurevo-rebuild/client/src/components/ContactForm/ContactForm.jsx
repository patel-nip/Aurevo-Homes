import { useState } from 'react';
import api from '../../api';
import './ContactForm.css';

const services = [
    'Kitchen assembly & adaptation',
    'Furniture assembly & disassembly',
    'House clearance & household clearance',
    'Transport of furniture & appliances',
    'Professional cleaning',
    'Interior assembly & household services',
    'Other service',
];

export default function ContactForm({ variant = 'default' }) {
    const [form, setForm] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
    });

    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await api.post('/contact', form);
            setStatus('success');
            setForm({ name: '', company: '', phone: '', email: '', service: '' });
        } catch (err) {
            setStatus('error');
        }
    };

    // Success State
    if (status === 'success') {
        return (
            <div className="form__success">
                <div className="form__success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>We've received your request and will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <form
            className={`contact-form contact-form--${variant}`}
            onSubmit={handleSubmit}
            noValidate
        >
            {/* Row 1 — Name + Company */}
            <div className="form__row">
                <div className="form__field">
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form__field">
                    <input
                        type="text"
                        name="company"
                        placeholder="company"
                        value={form.company}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Row 2 — Phone with flag */}
            <div className="form__field">
                <div className="form__phone-wrapper">
                    <span className="form__phone-flag">
                        {/* German flag inline SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14"
                            viewBox="0 0 5 3">
                            <rect width="5" height="1" y="0" fill="#000" />
                            <rect width="5" height="1" y="1" fill="#D00" />
                            <rect width="5" height="1" y="2" fill="#FFCE00" />
                        </svg>
                    </span>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+49 123 456 789 0"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="form__phone-input"
                    />
                </div>
            </div>

            {/* Row 3 — Email */}
            <div className="form__field">
                <input
                    type="email"
                    name="email"
                    placeholder="e-mail"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Row 4 — Service Dropdown */}
            <div className="form__field">
                <label className="form__label">
                    Which service are you interested in?
                </label>
                <div className="form__select-wrapper">
                    <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Choose an option</option>
                        {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                    {/* Custom chevron */}
                    <span className="form__select-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className={`form__submit ${status === 'loading' ? 'form__submit--loading' : ''}`}
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Sending...' : 'Book your appointment now'}
            </button>

            {/* Error Message */}
            {status === 'error' && (
                <p className="form__error">
                    Something went wrong. Please try again or call us directly.
                </p>
            )}

            {/* WhatsApp QR */}
            <div className="form__whatsapp">
                <span className="form__whatsapp-label">Or simply via WhatsApp:</span>
                <img
                    src="/assets/whatsapp-qr.png"
                    alt="Scan to contact us on WhatsApp"
                    className="form__qr"
                />
            </div>
        </form>
    );
}
