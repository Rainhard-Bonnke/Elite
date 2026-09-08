import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Award, ShieldCheck } from 'lucide-react';
import './About.css';

const fadeUp = (delay=0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22,1,0.36,1] } },
});
function Reveal({ children, delay=0, className }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return <motion.div ref={ref} initial="hidden" animate={inView?'visible':'hidden'} variants={fadeUp(delay)} className={className}>{children}</motion.div>;
}

const values = [
  { icon: <Award size={22}/>, title: 'Integrity', desc: 'Honest and transparent in every record we deliver.' },
  { icon: <Target size={22}/>, title: 'Precision', desc: 'We count everything carefully to eliminate costly errors.' },
  { icon: <ArrowRight size={22}/>, title: 'Innovation', desc: 'Using technology to work better, faster, and smarter.' },
  { icon: <ShieldCheck size={22}/>, title: 'Security', desc: 'Your assets and data handled with careful, strict oversight.' },
];

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.span className="eyebrow page-hero__eyebrow"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Our Story
          </motion.span>
          <motion.h1 className="page-hero__heading"
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}>
            Making Inventory<br /><em>Simple & Accurate.</em>
          </motion.h1>
          <motion.p className="page-hero__sub"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
            Founded to help businesses track their stock with precision and ease.
            Elites Stock Solutions is the future of logistics management in East Africa.
          </motion.p>
        </div>
      </section>

      {/* Origins */}
      <section className="section">
        <div className="container">
          <div className="origins__grid">
            <motion.div className="origins__img-frame"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.75 }}>
              <img src="/images/work-7.jpg" alt="Elites ERP Platform" />
              <div className="origins__img-label">Complete ERP Solution for Modern Businesses</div>
            </motion.div>

            <Reveal>
              <span className="eyebrow">Our Origins</span>
              <h2 className="origins__heading">
                Born from Experience.<br /><em>Driven by Results.</em>
              </h2>
              <div className="divider" />
              <p className="origins__text">
                Elites was created to solve a major problem: messy warehouses and inaccurate records.
                We understand both the physical work and the digital needs of modern business.
              </p>
              <blockquote className="origins__quote">
                "Our mission is to turn chaotic stockrooms into organized assets, ensuring every shilling is accounted for."
              </blockquote>
              <Link to="/contact" className="btn btn--dark">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section--sm" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="mv__grid">
            <motion.div className="mv-card mv-card--mission"
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <div className="mv-card__icon"><Target size={24}/></div>
              <h3 className="mv-card__title">Our Mission</h3>
              <p className="mv-card__text">To provide absolute clarity for businesses in East Africa through accurate inventory audits and reliable data systems.</p>
            </motion.div>
            <motion.div className="mv-card mv-card--vision"
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
              <div className="mv-card__icon"><Heart size={24}/></div>
              <h3 className="mv-card__title">Our Vision</h3>
              <p className="mv-card__text">To be the gold standard of logistics management in Kenya, helping businesses grow and succeed with confidence.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <Reveal className="values__header">
            <span className="eyebrow">Our Values</span>
            <h2 className="values__heading">The Elites Standard.</h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div key={v.title} className="val-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="val-card__icon">{v.icon}</div>
                <h3 className="val-card__title">{v.title}</h3>
                <p className="val-card__desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-sec section">
        <div className="container">
          <Reveal className="team__header">
            <span className="eyebrow eyebrow--light">Leadership</span>
            <h2 className="team__heading">Meet the Team.</h2>
            <p className="team__sub">Experts in logistics and systems.</p>
          </Reveal>
          <div className="team-grid">
            {[
              {
                dept: 'Executive Board',
                role: 'Chief Executive Officer (CEO)',
                name: 'Secton Ochieng',
                desc: 'Commanding a decade of high-stakes retail logistics across East Africa. Secton leads all field operations with an uncompromising focus on audit integrity and client satisfaction.',
                img: '/images/team-member-1.jpeg',
                init: 'M',
              },
              {
                dept: 'Executive Board',
                role: 'Chief Tech',
                name: 'James Wasonga',
                desc: "The software architect behind Elites' digital infrastructure. James builds and maintains the ERP systems, websites, and tools that power every client engagement.",
                img: '/images/team-member-2.jpg',
                init: 'J',
              },
            ].map((m, i) => (
              <motion.div key={m.role} className="team-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}>

                {/* Photo */}
                <div className="team-card__photo">
                  <img
                    src={m.img}
                    alt={m.name}
                    onError={e => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.classList.add('team-card__photo--fallback');
                      e.currentTarget.parentElement.setAttribute('data-init', m.init);
                    }}
                  />
                </div>

                {/* Text */}
                <div className="team-card__body">
                  <span className="team-card__dept">{m.dept}</span>
                  <h3 className="team-card__role">{m.role}</h3>
                  <p className="team-card__name">{m.name}</p>
                  <p className="team-card__desc">{m.desc}</p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section--sm">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <h2 className="about-cta__heading">Ready for Flawless Records?</h2>
            <Link to="/quote" className="btn btn--primary btn--lg">
              Begin Your Audit <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}