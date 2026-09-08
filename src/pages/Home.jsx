import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Zap, TrendingUp, Package, Monitor, Globe, Code, FileText, GraduationCap, BarChart2, Palette, Star, ExternalLink } from 'lucide-react';
import './Home.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
});

function Reveal({ children, delay = 0, className }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp(delay)} className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  { num: '01', title: 'Physical Counts', desc: 'Dual-verified inventory audits with detailed variance reporting.' },
  { num: '02', title: 'Warehouse Organization', desc: 'FIFO implementation and ABC analysis for optimal efficiency.' },
  { num: '03', title: 'Bookkeeping Services', desc: 'Financial records aligned precisely with inventory movements.' },
  { num: '04', title: 'Custom ERP Systems', desc: 'Real-time tracking, analytics, and full business integration.' },
];

const techHighlights = [
  { icon: <Globe size={20} />, title: 'Websites & Apps', desc: 'Custom websites, web apps, and mobile applications built to your spec.' },
  { icon: <GraduationCap size={20} />, title: 'Academic Writing', desc: 'Research proposals, dissertations, internship reports, and university projects.' },
  { icon: <BarChart2 size={20} />, title: 'Data Analysis', desc: 'Excel, SPSS, R & Python for qualitative and quantitative analysis and reports.' },
  { icon: <FileText size={20} />, title: 'CVs & Documents', desc: 'ATS-ready CVs, resumes, cover letters, and professional document writing.' },
  { icon: <Palette size={20} />, title: 'Graphic Design', desc: 'Logos, branding, flyers, social media graphics, and pitch deck design.' },
  { icon: <Code size={20} />, title: 'Custom Software', desc: 'Bespoke ERP systems, management tools, and enterprise software solutions.' },
];

const reasons = [
  { icon: <CheckCircle size={20} />, title: 'High Accuracy', desc: 'We ensure your records are correct, minimizing losses with 99.9% precision.' },
  { icon: <Clock size={20} />, title: 'Fast Deployment', desc: 'Our teams deploy quickly across East Africa with minimum disruption and maximum results.' },
  { icon: <Zap size={20} />, title: 'Smart Technology', desc: 'Cloud systems giving you real-time stock visibility from anywhere.' },
  { icon: <TrendingUp size={20} />, title: 'Real Value', desc: 'We help organize your business to reduce waste and improve profitability.' },
];

const ticker = ['Physical Counts', 'Warehouse Optimization', 'Bookkeeping', 'ERP Systems', 'Website Design', 'Academic Writing', 'Data Analysis', 'CV Writing', 'Graphic Design', 'Mobile Apps'];
const heroSlides = [
  {
    image: '/images/work-1.jpeg',
    eyebrow: 'Stock inventory',
    title: 'Warehouse accuracy you can trust.',
    text: 'From physical stock checks to real-time visibility, we help businesses keep every item accounted for.'
  },
  {
    image: '/images/work-2.jpeg',
    eyebrow: 'Operational clarity',
    title: 'Clean operations. Better decisions.',
    text: 'We organize inventory flow, improve reporting, and support smarter business decisions across the supply chain.'
  },
  {
    image: '/images/work-3.jpeg',
    eyebrow: 'Digital systems',
    title: 'Precision backed by technology.',
    text: 'Our ERP, reporting, and operational tools turn warehouse data into action and measurable growth.'
  },
  {
    image: '/images/work-4.jpeg',
    eyebrow: 'Data driven',
    title: 'From warehouse floor to smarter reporting.',
    text: 'We combine stock counts, systems, and process intelligence to keep growth measurable and efficient.'
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__slides" aria-label="Featured Elites services slideshow">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`hero__slide ${index === activeSlide ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className="hero__overlay" />
        </div>

        {/* Centered content */}
        <div className="hero__inner">
          <motion.div
            key={heroSlides[activeSlide].title}
            className="hero__copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="hero__eyebrow">{heroSlides[activeSlide].eyebrow}</span>
            <h1 className="hero__heading">{heroSlides[activeSlide].title}</h1>
            <p className="hero__sub">{heroSlides[activeSlide].text}</p>
          </motion.div>

          <motion.div className="hero__actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}>
            <Link to="/quote" className="btn btn--primary btn--lg">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn btn--outline btn--lg">View Services</Link>
          </motion.div>

          <div className="hero__dots" aria-label="Hero slide navigation">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                className={`hero__dot ${index === activeSlide ? 'is-active' : ''}`}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95 }}>
          {[['99.9%','Accuracy Rate'],['500+','Audits Completed'],['12+','Years Experience'],['50+','Active Clients']].map(([v, l]) => (
            <div className="hero__stat" key={l}>
              <span className="hero__stat-val">{v}</span>
              <span className="hero__stat-lbl">{l}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker">
        <div className="ticker__track">
          {[...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="ticker__item">
              <span className="ticker__dot" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── MISSION ── */}
      <section className="section">
        <div className="container">
          <div className="mission__grid">
            <div className="mission__images">
              <motion.div className="mission__img mission__img--a"
                initial={{ opacity: 0, x: -32, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75 }}
                whileHover={{ rotate: 0, transition: { duration: 0.3 } }}>
                <img src="/images/team-1.jpeg" alt="Elites team at work" />
              </motion.div>
              <motion.div className="mission__img mission__img--b"
                initial={{ opacity: 0, x: 32, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.12 }}
                whileHover={{ rotate: 0, transition: { duration: 0.3 } }}>
                <img src="/images/team-2.jpeg" alt="Stock audit process" />
              </motion.div>
            </div>

            <Reveal>
              <span className="eyebrow">Our Mission</span>
              <h2 className="mission__heading">
                More Than<br />Just <em>Counting.</em>
              </h2>
              <div className="divider" />
              <p className="mission__text">
                We're not just counters, we're your business partners. From inventory audits and ERP systems
                to website development, academic writing, and data analysis, Elites delivers precision across
                everything we touch.
              </p>
              <Link to="/about" className="link-arrow">
                Learn more about us <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TWO DIVISIONS ── */}
      <section className="divisions section--sm" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <Reveal className="divisions__header">
            <span className="eyebrow">Two Divisions. One Team.</span>
            <h2 className="divisions__heading">Everything Your Business Needs.</h2>
            <p className="divisions__sub">Elites operates two complementary service divisions, choose the one you need, or combine both for end-to-end support.</p>
          </Reveal>

          <div className="divisions__grid">
            {/* Division 1 */}
            <motion.div className="division-card division-card--stock"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}>
              <div className="division-card__icon division-card__icon--stock">
                <Package size={28} />
              </div>
              <h3 className="division-card__title">Stock Solutions</h3>
              <p className="division-card__desc">
                Physical inventory audits, warehouse organization, bookkeeping, tax compliance, and custom ERP systems.
                We keep your stock accurate and your business running cleanly.
              </p>
              <ul className="division-card__list">
                {['Physical Counts & Audits','Warehouse Organization','Bookkeeping Services','Custom ERP Systems','Tax Compliance'].map(i => (
                  <li key={i} className="division-card__item">
                    <CheckCircle size={14} className="division-card__check division-card__check--stock" />
                    {i}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="division-card__btn division-card__btn--stock">
                View Stock Services <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Division 2 */}
            <motion.div className="division-card division-card--tech"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}>
              <div className="division-card__icon division-card__icon--tech">
                <Monitor size={28} />
              </div>
              <h3 className="division-card__title">Tech & Digital</h3>
              <p className="division-card__desc">
                Website design, mobile apps, custom software, academic writing, data analysis, CV writing, and graphic design.
                Professional digital services delivered with guaranteed satisfaction.
              </p>
              <ul className="division-card__list">
                {['Website & App Development','Academic & Research Writing','Data Analysis (SPSS, R, Python)','CV, Resume & Cover Letters','Graphic & Visual Design'].map(i => (
                  <li key={i} className="division-card__item">
                    <CheckCircle size={14} className="division-card__check division-card__check--tech" />
                    {i}
                  </li>
                ))}
              </ul>
              <Link to="/tech-services" className="division-card__btn division-card__btn--tech">
                View Tech Services <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-preview section">
        <div className="container">
          <div className="services-preview__header">
            <div>
              <span className="eyebrow eyebrow--light">Our Services</span>
              <h2 className="services-preview__heading">What We Do.</h2>
            </div>
            <p className="services-preview__sub">
              Complete inventory management from physical audits to financial records, warehouse optimization, and advanced ERP systems.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div key={s.num} className="svc-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}>
                <div className="svc-card__num">{s.num}</div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
                <div className="svc-card__glow" />
              </motion.div>
            ))}
          </div>

          <div className="services-preview__cta">
            <Link to="/services" className="btn btn--outline">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="why__grid">
            <Reveal>
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="why__heading">Why Businesses Trust Us.</h2>
              <div className="divider" />
            </Reveal>
            <div className="why__cards">
              {reasons.map((r, i) => (
                <motion.div key={r.title} className="why-card"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <div className="why-card__num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="why-card__icon">{r.icon}</div>
                  <h3 className="why-card__title">{r.title}</h3>
                  <p className="why-card__desc">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section className="testimonial section--sm">
        <div className="container">
          <motion.div className="testimonial__card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}>
            <div className="google-review__header">
              <div className="google-review__brand"><span className="google-review__g">G</span> Google Reviews</div>
              <span className="google-review__verified">Google profile</span>
            </div>
            <div className="google-review__summary">
              <div className="google-review__score">5.0</div>
              <div>
                <div className="google-review__stars" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <div className="google-review__count">Based on client reviews</div>
              </div>
            </div>
            <blockquote className="testimonial__text">
              “Elites gave us clarity across our warehouse and the confidence to make better decisions. Thorough, responsive, and easy to work with.”
            </blockquote>
            <div className="testimonial__author">
              <div className="testimonial__avatar">S</div>
              <div>
                <div className="testimonial__name">Strategic Partner</div>
                <div className="testimonial__role">Retail client · Nairobi</div>
              </div>
              <a className="google-review__link" href="https://www.google.com/search?q=Elites+Stock+%26+Tech+Solutions" target="_blank" rel="noreferrer">
                Read on Google <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH HIGHLIGHTS ── */}
      <section className="section tech-highlights-home" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="tech-hl__header">
            <div>
              <span className="eyebrow eyebrow--light">Tech & Digital Division</span>
              <h2 className="tech-hl__heading">Need Digital Services?</h2>
            </div>
            <p className="tech-hl__sub">
              Beyond stock, our Tech Division delivers professional digital work with fast turnaround and guaranteed satisfaction.
            </p>
          </div>
          <div className="tech-hl__grid">
            {techHighlights.map((t, i) => (
              <motion.div key={t.title} className="tech-hl__card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}>
                <div className="tech-hl__icon">{t.icon}</div>
                <h3 className="tech-hl__title">{t.title}</h3>
                <p className="tech-hl__desc">{t.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/tech-services" className="btn btn--primary btn--lg">
              Explore All Tech Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band section">
        <div className="cta-band__orb cta-band__orb--1" />
        <div className="cta-band__orb cta-band__orb--2" />
        <div className="container">
          <motion.div className="cta-band__inner"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}>
            <h2 className="cta-band__heading">
              Ready to Work<br />With Elites?
            </h2>
            <div className="cta-band__actions">
              <Link to="/quote" className="btn btn--primary btn--lg">
                Request a Service <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn--outline btn--lg">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}