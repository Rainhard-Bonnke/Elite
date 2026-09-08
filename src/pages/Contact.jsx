import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './About.css';
import './Contact.css';

const WA_NUM = '254112706387';
const WA_MSG = encodeURIComponent(
  'Hello, I came across Elites and I am interested in your services. I would like to get more information and discuss how you can help my business. Please get back to me at your earliest convenience. Thank you.'
);

// const FORMSPREE_URL = 'https://formspree.io/f/mbdvyalp';
const FORMSPREE_URL = 'https://formspree.io/f/xkolbaag';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const ch = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          phone:   form.phone,
          message: form.message,
          _subject: `New Contact Message from ${form.name} Elites`,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.span className="eyebrow page-hero__eyebrow"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Get in Touch
          </motion.span>
          <motion.h1 className="page-hero__heading"
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            Contact <em>Information.</em>
          </motion.h1>
          <motion.p className="page-hero__sub"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
            We are here to help. Reach out to us directly through any of these channels.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-body__grid">
            <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <h2 className="contact-info__heading">Let's Talk.</h2>
              <p className="contact-info__sub">Whether you need a full warehouse audit or have questions about ERP solutions, we're ready.</p>
              <div className="contact-info__items">
                <a href="tel:+254112706387" className="contact-info__item">
                  <div className="contact-info__icon"><Phone size={18} /></div>
                  <div><div className="contact-info__label">Phone Number</div><div className="contact-info__value">+254 112 706 387</div></div>
                </a>
                <a href="mailto:elitessolutions3@gmail.com" className="contact-info__item">
                  <div className="contact-info__icon"><Mail size={18} /></div>
                  <div><div className="contact-info__label">Email Address</div><div className="contact-info__value">elitessolutions3@gmail.com</div></div>
                </a>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><MapPin size={18} /></div>
                  <div><div className="contact-info__label">Location</div><div className="contact-info__value">Nairobi, Kenya</div></div>
                </div>
              </div>
              <div className="contact-wa">
                <div className="contact-wa__label"><MessageCircle size={14} />Fast Contact</div>
                <p className="contact-wa__sub">Connect instantly via WhatsApp.</p>
                <button className="btn-whatsapp"
                  onClick={() => window.open(`https://wa.me/${WA_NUM}?text=${WA_MSG}`, '_blank')}>
                  <MessageCircle size={18} />Chat on WhatsApp
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
              <div className="contact-form-wrap">

                {status === 'success' ? (
                  <div className="contact-success">
                    <div className="contact-success__icon"><CheckCircle size={36} /></div>
                    <h3 className="contact-success__heading">Message Sent!</h3>
                    <p className="contact-success__text">
                      Thank you, we received your message and will reply to <strong>{form.email || 'you'}</strong> within 24 hours.
                    </p>
                    <button className="btn btn--dark" onClick={() => setStatus('idle')}>Send Another</button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={submit}>
                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label className="contact-form__label">Full Name *</label>
                        <input className="contact-form__input" name="name" placeholder="John Doe"
                          value={form.name} onChange={ch} required disabled={status === 'sending'} />
                      </div>
                      <div className="contact-form__field">
                        <label className="contact-form__label">Email Address *</label>
                        <input className="contact-form__input" name="email" type="email" placeholder="you@company.com"
                          value={form.email} onChange={ch} required disabled={status === 'sending'} />
                      </div>
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Phone Number</label>
                      <input className="contact-form__input" name="phone" placeholder="+254 --- --- ---"
                        value={form.phone} onChange={ch} disabled={status === 'sending'} />
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Your Message *</label>
                      <textarea className="contact-form__textarea" name="message" rows={4}
                        placeholder="How can we help you?" value={form.message} onChange={ch}
                        required disabled={status === 'sending'} />
                    </div>

                    {status === 'error' && (
                      <div className="contact-form__error">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <button type="submit" className="contact-form__submit" disabled={status === 'sending'}>
                      {status === 'sending' ? (
                        <><span className="contact-form__spinner" /> Sending…</>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}