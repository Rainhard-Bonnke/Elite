import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Warehouse, BookOpen, Cpu, Scale, BarChart3 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import './About.css';
import './Services.css';

function Reveal({ children, delay=0, className }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return <motion.div ref={ref} initial={{ opacity:0, y:28 }} animate={inView?{ opacity:1, y:0 }:{ opacity:0, y:28 }}
    transition={{ duration:0.65, delay, ease:[0.22,1,0.36,1] }} className={className}>{children}</motion.div>;
}

const svcs = [
  { icon:<ClipboardList size={24}/>, num:'01', sub:'Audit & Count', title:'Physical Counts', desc:'Dual-verified inventory audits with detailed variance reporting and real-time reconciliation.', features:['Dual-verifier system','Real-time variance reports','POS reconciliation','Barcode & manual counting'] },
  { icon:<Warehouse size={24}/>, num:'02', sub:'Space Optimization', title:'Warehouse Organization', desc:'FIFO implementation and ABC analysis for optimal efficiency. We restructure your warehouse layout to minimize travel time.', features:['FIFO & LIFO implementation','ABC categorization','Shelf optimization','Pick path efficiency'] },
  { icon:<BookOpen size={24}/>, num:'03', sub:'Financial Records', title:'Bookkeeping Services', desc:'Financial record management aligned with inventory movements. Every stock movement becomes an accurate financial entry.', features:['Inventory-aligned accounting','Tax compliance records','Variance documentation','Monthly reconciliations'] },
  { icon:<Cpu size={24}/>, num:'04', sub:'Tech Integration', title:'Custom ERP Systems', desc:'Real-time tracking, analytics, and complete business integration. We build ERP systems tailored to your workflow.', features:['Cloud-based dashboards','Mobile access','Custom reporting','Multi-location support'] },
  { icon:<Scale size={24}/>, num:'05', sub:'Regulatory Support', title:'Tax Compliance', desc:'Ensuring all stock meets regulatory and internal standards. We keep you ready for KRA audits and reviews.', features:['KRA compliance docs','Import/export records','Duty calculation','Audit-ready files'] },
  { icon:<BarChart3 size={24}/>, num:'06', sub:'Data Intelligence', title:'Stock Analytics', desc:'Turning your inventory data into business intelligence with dashboards that show what\'s moving and where cash is tied up.', features:['Demand forecasting','Aging stock alerts','Reorder point setting','Supplier performance'] },
];

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.span className="eyebrow page-hero__eyebrow"
            initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }}>
            Our Services
          </motion.span>
          <motion.h1 className="page-hero__heading"
            initial={{ opacity:0,y:36 }} animate={{ opacity:1,y:0 }}
            transition={{ duration:0.8,delay:0.1,ease:[0.22,1,0.36,1] }}>
            What We Do.
          </motion.h1>
          <motion.p className="page-hero__sub"
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.6,delay:0.3 }}>
            Complete inventory management from physical audits to financial records, warehouse optimization, and advanced ERP systems.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-full-grid">
            {svcs.map((s, i) => (
              <motion.div key={s.num} className="svc-full-card"
                initial={{ opacity:0,y:36 }} whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }} transition={{ duration:0.55, delay:(i%3)*0.08 }}>
                <div className="svc-full-card__header">
                  <div className="svc-full-card__icon">{s.icon}</div>
                  <div>
                    <div className="svc-full-card__num">{s.num}</div>
                    <div className="svc-full-card__sub">{s.sub}</div>
                  </div>
                </div>
                <h3 className="svc-full-card__title">{s.title}</h3>
                <p className="svc-full-card__desc">{s.desc}</p>
                <ul className="svc-full-card__features">
                  {s.features.map(f => (
                    <li key={f} className="svc-full-card__feat"><span className="svc-full-card__dot"/>{f}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-cta section">
        <div className="container">
          <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.65 }}>
            <h2 className="svc-cta__heading">Ready to Get Started?</h2>
            <p className="svc-cta__sub">Talk to our team and get a customized plan for your business.</p>
            <Link to="/quote" className="btn btn--primary btn--lg">
              Request a Free Consultation <ArrowRight size={16}/>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
