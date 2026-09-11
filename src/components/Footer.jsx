import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div>
          <Link to="/" className="footer__logo">
            <div className="footer__logo-icon">
              <img src="/logo.svg" alt="Elites logo" width="34" height="34" />
            </div>
            <div>
              <div className="footer__logo-name">Elites</div>
              <span className="footer__logo-sub">SOLUTIONS</span>
            </div>
          </Link>
          <p className="footer__desc">
            Engineering operational clarity and delivering professional tech services for enterprises and individuals across East Africa.
          </p>
        </div>

        <div>
          <div className="footer__col-title">Navigation</div>
          <ul className="footer__links">
            {[['Home','/'],['About','/about'],['Our Work','/our-work'],['Contact','/contact'],['Get a Quote','/quote']].map(([l,p]) => (
              <li key={p}><Link to={p} className="footer__link">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Stock Solutions */}
        <div>
          <div className="footer__col-title">Stock Solutions</div>
          <ul className="footer__links">
            {['Audit & Count','Warehouse Org.','Bookkeeping','Custom ERP','Tax Compliance'].map(l => (
              <li key={l}><Link to="/services" className="footer__link">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Tech & Digital */}
        <div className="footer__col--tech">
          <div className="footer__col-title footer__col-title--tech">Tech &amp; Digital</div>
          <ul className="footer__links">
            {['Website Dev','Mobile Apps','Academic Writing','Data Analysis','CV & Resume','Graphic Design'].map(l => (
              <li key={l}><Link to="/tech-services" className="footer__link">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer__col-title">Operational Support</div>
          <ul className="footer__contact-list">
            <li><a href="tel:+254112706387" className="footer__contact-item"><Phone size={14}/>+254 112 706 387</a></li>
            <li><a href="mailto:elitessolutions3@gmail.com" className="footer__contact-item"><Mail size={14}/>elitessolutions3@gmail.com</a></li>
            <li><span className="footer__contact-item"><MapPin size={14}/>Nairobi, Kenya</span></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <span className="footer__copy">© 2026 Elites Solutions. All rights reserved.</span>
        <span className="footer__internal">Internal Access</span>
      </div>
    </footer>
  );
}