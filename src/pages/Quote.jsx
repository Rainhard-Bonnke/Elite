import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';
import './Quote.css';

const WA_NUM = '254112706387';
const WA_MSG = encodeURIComponent(
  'Hello, I came across Elites and I am interested in your services. I would like to get more information and discuss how you can help my business. Please get back to me at your earliest convenience. Thank you.'
);

// const FORMSPREE_URL = 'https://formspree.io/f/xrewkapy';
const FORMSPREE_URL = 'https://formspree.io/f/mzdlgqqq';


export default function Quote() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: '', size: '', details: '',
  });
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
          company: form.company,
          service: form.service,
          size:    form.size,
          details: form.details,
          _subject: `New Quote Request: ${form.service} ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="quote-page">
      {/* Header band */}
      <section className="quote-hero">
        <div className="quote-hero__bg"/>
        <div className="container quote-hero__inner">
          <motion.h1 className="quote-hero__heading"
            initial={{ opacity:0,y:32 }} animate={{ opacity:1,y:0 }}
            transition={{ duration:0.75,ease:[0.22,1,0.36,1] }}>
            Request a Quote
          </motion.h1>
          <motion.p className="quote-hero__sub"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.6,delay:0.25 }}>
            Your Stock. Our Solution.
          </motion.p>
          <motion.p className="quote-hero__desc"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.6,delay:0.35 }}>
            Tell us about your business needs and we'll provide you with a customised quote.
          </motion.p>
        </div>
      </section>

      {/* Form area */}
      <section className="quote-body section">
        <div className="container">
          <motion.div className="quote-card"
            initial={{ opacity:0,y:40 }} animate={{ opacity:1,y:0 }}
            transition={{ duration:0.75,delay:0.15,ease:[0.22,1,0.36,1] }}>

            {status === 'success' ? (
              <div className="quote-success">
                <motion.div className="quote-success__icon"
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                  <CheckCircle size={44} />
                </motion.div>
                <h2 className="quote-success__heading">Quote Request Received!</h2>
                <p className="quote-success__text">
                  Thank you, <strong>{form.name}</strong>! We've received your request and will send
                  a personalised quote to <strong>{form.email}</strong> within 24 hours.
                </p>
                <div className="quote-success__actions">
                  <button className="btn btn--dark" onClick={() => {
                    setForm({ name: '', email: '', phone: '', company: '', service: '', size: '', details: '' });
                    setStatus('idle');
                  }}>
                    Submit Another
                  </button>
                  <button className="btn-whatsapp-sm"
                    onClick={() => window.open(`https://wa.me/${WA_NUM}?text=${WA_MSG}`, '_blank')}>
                    <MessageCircle size={16} />Chat on WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="quote-card__header">
                  <h2 className="quote-card__title">GET YOUR FREE QUOTE</h2>
                </div>
                <form className="quote-form" onSubmit={submit}>
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">Full Name *</label>
                      <input className="quote-form__input" name="name" placeholder="Your name"
                        value={form.name} onChange={ch} required disabled={status === 'sending'} />
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">Email *</label>
                      <input className="quote-form__input" name="email" type="email" placeholder="Your email"
                        value={form.email} onChange={ch} required disabled={status === 'sending'} />
                    </div>
                  </div>
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">Phone</label>
                      <input className="quote-form__input" name="phone" placeholder="Your phone number"
                        value={form.phone} onChange={ch} disabled={status === 'sending'} />
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">Company / Institution</label>
                      <input className="quote-form__input" name="company" placeholder="Your company or university"
                        value={form.company} onChange={ch} disabled={status === 'sending'} />
                    </div>
                  </div>
                  <div className="quote-form__row">
                    <div className="quote-form__field">
                      <label className="quote-form__label">Service Needed *</label>
                      <select className="quote-form__select" name="service" value={form.service}
                        onChange={ch} required disabled={status === 'sending'}>
                        <option value="">Select a service</option>
                        <optgroup label="Stock Solutions">
                          <option>Physical Counts / Inventory Audit</option>
                          <option>Warehouse Organization</option>
                          <option>Bookkeeping Services</option>
                          <option>Custom ERP System</option>
                          <option>Tax Compliance</option>
                          <option>Stock Analytics</option>
                        </optgroup>
                        <optgroup label="Tech & Digital">
                          <option>Website Design &amp; Development</option>
                          <option>Mobile App Development</option>
                          <option>Custom Software / System</option>
                          <option>Data Analysis (SPSS / R / Python)</option>
                          <option>Academic / Research Writing</option>
                          <option>CV, Resume &amp; Cover Letter</option>
                          <option>Graphic &amp; Visual Design</option>
                          <option>IT Consulting</option>
                        </optgroup>
                        <option>Full Package (Stock + Tech)</option>
                      </select>
                    </div>
                    <div className="quote-form__field">
                      <label className="quote-form__label">Business Size</label>
                      <select className="quote-form__select" name="size" value={form.size}
                        onChange={ch} disabled={status === 'sending'}>
                        <option value="">Select business size</option>
                        <option>Individual / Student</option>
                        <option>Small (1 to 20 employees)</option>
                        <option>Medium (21 to 100 employees)</option>
                        <option>Large (101 to 500 employees)</option>
                        <option>Enterprise (500+ employees)</option>
                      </select>
                    </div>
                  </div>
                  <div className="quote-form__field">
                    <label className="quote-form__label">Details About Your Needs</label>
                    <textarea className="quote-form__textarea" name="details" rows={4}
                      placeholder="Please describe your project, timeline, and any specific requirements"
                      value={form.details} onChange={ch} disabled={status === 'sending'} />
                  </div>

                  {status === 'error' && (
                    <div className="quote-form__error">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <button type="submit" className="quote-form__submit" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <><span className="quote-form__spinner" /> Sending…</>
                    ) : (
                      'Request Quote'
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* WhatsApp CTA */}
          {status !== 'success' && (
            <motion.div className="quote-wa"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <button className="btn-whatsapp-lg"
                onClick={() => window.open(`https://wa.me/${WA_NUM}?text=${WA_MSG}`, '_blank')}>
                <MessageCircle size={20} />Chat with us on WhatsApp
              </button>
              <p className="quote-wa__note">
                Need immediate assistance? Call us at{' '}
                <a href="tel:+254112706387">+254 112 706 387</a>
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}