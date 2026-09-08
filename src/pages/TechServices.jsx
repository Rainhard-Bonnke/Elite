import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Globe, FileText, GraduationCap, BarChart2,
  UserCheck, Palette, Code, Smartphone, Database, CheckCircle
} from 'lucide-react';
import './TechServices.css';

function Reveal({ children, delay = 0, className }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const techServices = [
  {
    icon: <Globe size={26} />,
    num: '01',
    cat: 'Web & Software',
    title: 'Website Design & Development',
    desc: 'Professional, responsive websites built from scratch for business sites, portfolios, e-commerce, and landing pages. Built for speed, SEO, and conversions.',
    features: ['Custom UI/UX design', 'Mobile-first responsive', 'SEO optimization', 'CMS integration'],
    color: '#3b82f6',
  },
  {
    icon: <Code size={26} />,
    num: '02',
    cat: 'Software Systems',
    title: 'Custom Software & ERP Systems',
    desc: 'Bespoke software solutions tailored to your business workflow, from internal management tools to full enterprise resource planning systems.',
    features: ['Requirements analysis', 'Full-stack development', 'API integrations', 'Deployment & support'],
    color: '#2457d6',
  },
  {
    icon: <Smartphone size={26} />,
    num: '03',
    cat: 'Mobile Development',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile applications for Android and iOS. We build apps that are fast, intuitive, and built to scale with your business.',
    features: ['React Native / Flutter', 'Android & iOS', 'Push notifications', 'App Store submission'],
    color: '#06b6d4',
  },
  {
    icon: <Database size={26} />,
    num: '04',
    cat: 'Data & Analytics',
    title: 'Data Analysis & Interpretation',
    desc: 'Turn your raw data into clear insights. We use Excel, SPSS, R, and Python for statistical analysis, reporting, and data visualization.',
    features: ['Statistical analysis (SPSS, R)', 'Python & Excel modeling', 'Data visualization', 'Report writing'],
    color: '#f59e0b',
  },
  {
    icon: <GraduationCap size={26} />,
    num: '05',
    cat: 'Academic Writing',
    title: 'Academic & Research Writing',
    desc: 'Expert academic writing support for research proposals, university projects, dissertations, literature reviews, and internship and industrial attachment reports.',
    features: ['Research proposals', 'University projects', 'Internship reports', 'Literature reviews & dissertations'],
    color: '#10b981',
  },
  {
    icon: <FileText size={26} />,
    num: '06',
    cat: 'Professional Documents',
    title: 'CV, Resume & Cover Letters',
    desc: 'Professionally crafted CVs, resumes, and cover letters that get noticed. Tailored for specific roles, industries, and levels from entry to executive.',
    features: ['ATS-optimised CVs', 'Executive resumes', 'Cover letters', 'LinkedIn profile writing'],
    color: '#ef4444',
  },
  {
    icon: <Palette size={26} />,
    num: '07',
    cat: 'Graphic Design',
    title: 'Graphic & Visual Design',
    desc: 'Creative visual designs for brands, marketing, and print. Logos, flyers, social media graphics, and branding kits help your brand look professional.',
    features: ['Logo & brand identity', 'Social media graphics', 'Flyers & posters', 'Pitch deck design'],
    color: '#ec4899',
  },
  {
    icon: <UserCheck size={26} />,
    num: '08',
    cat: 'Consulting',
    title: 'IT Consulting & Tech Support',
    desc: 'Expert guidance on technology decisions, including software selection, system architecture, digital transformation strategy, and ongoing technical support.',
    features: ['Tech stack consulting', 'System architecture', 'Digital transformation', 'Ongoing IT support'],
    color: '#64748b',
  },
];

const process = [
  { step: '01', title: 'Consultation', desc: 'We discuss your needs, goals, and timeline in a free discovery call.' },
  { step: '02', title: 'Proposal', desc: 'You receive a detailed proposal with scope, timeline, and fixed pricing.' },
  { step: '03', title: 'Delivery', desc: 'We build, review, and iterate with you until you\'re fully satisfied.' },
  { step: '04', title: 'Support', desc: 'Post-delivery support and maintenance to keep things running smoothly.' },
];

export default function TechServices() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="tech-hero">
        <div className="tech-hero__bg" />
        <div className="container tech-hero__inner">
          <motion.h1 className="tech-hero__heading"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
            Digital Services<br /><em>That Deliver.</em>
          </motion.h1>
          <motion.p className="tech-hero__sub"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
            From custom software and websites to academic writing and data analysis,
            Elites' Tech Division gives you access to expert digital services under one roof.
          </motion.p>
          <motion.div className="tech-hero__actions"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}>
            <Link to="/quote" className="btn btn--primary btn--lg">Request a Service <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn btn--outline btn--lg">Talk to Us</Link>
          </motion.div>

        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <Reveal className="tech-sec__header">
            <span className="eyebrow">What We Offer</span>
            <h2 className="tech-sec__heading">All Our Tech & Digital Services.</h2>
            <p className="tech-sec__sub">
              Professional, affordable, and delivered on time, everything your business or academic journey needs.
            </p>
          </Reveal>

          <div className="tech-grid">
            {techServices.map((s, i) => (
              <motion.div key={s.num} className="tech-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.09 }}
                whileHover={{ y: -7, transition: { duration: 0.25 } }}>
                <div className="tech-card__top">
                  <div className="tech-card__icon" style={{ background: `${s.color}18`, color: s.color }}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="tech-card__num" style={{ color: s.color }}>{s.num}</div>
                    <div className="tech-card__cat">{s.cat}</div>
                  </div>
                </div>
                <h3 className="tech-card__title">{s.title}</h3>
                <p className="tech-card__desc">{s.desc}</p>
                <ul className="tech-card__features">
                  {s.features.map(f => (
                    <li key={f} className="tech-card__feat">
                      <span className="tech-card__dot" style={{ background: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="tech-card__bar" style={{ background: s.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section tech-process">
        <div className="container">
          <Reveal className="tech-sec__header">
            <span className="eyebrow eyebrow--light">How It Works</span>
            <h2 className="tech-sec__heading tech-sec__heading--light">Simple. Fast. Guaranteed.</h2>
          </Reveal>
          <div className="process-grid">
            {process.map((p, i) => (
              <motion.div key={p.step} className="process-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="process-card__step">{p.step}</div>
                <h3 className="process-card__title">{p.title}</h3>
                <p className="process-card__desc">{p.desc}</p>
                {i < process.length - 1 && <div className="process-card__line" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE STRIP ── */}
      <section className="section--sm tech-guarantee">
        <div className="container">
          <motion.div className="tech-guarantee__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}>
            <div className="tech-guarantee__left">
              <h3 className="tech-guarantee__heading">Your Service is Guaranteed.</h3>
              <p className="tech-guarantee__text">
                Every project comes with a satisfaction guarantee. If you're not happy with the deliverable,
                we revise until you are at no extra cost.
              </p>
            </div>
            <div className="tech-guarantee__actions">
              <Link to="/quote" className="btn btn--primary btn--lg">
                Get Started <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn--outline-dark btn--lg">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}