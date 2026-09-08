import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Box, ChevronDown, Package, Monitor } from 'lucide-react';
import './Navbar.css';

const mainLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Contact', path: '/contact' },
];

const serviceDropdown = [
  {
    icon: <Package size={18} />,
    label: 'Stock Solutions',
    sub: 'Inventory, audits & ERP',
    path: '/services',
    color: '#e8a020',
  },
  {
    icon: <Monitor size={18} />,
    label: 'Tech & Digital',
    sub: 'Web, software, academic & design',
    path: '/tech-services',
    color: '#2457d6',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);
  const location = useLocation();
  const dropRef  = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [location]);

  const isServicesActive = ['/services', '/tech-services'].includes(location.pathname);
  const cls = `navbar${scrolled ? ' navbar--scrolled' : ''}`;

  return (
    <motion.nav className={cls}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
          <img src="/logo.svg" alt="Elites logo" width="36" height="36" style={{ display:'block', borderRadius:'8px' }} />
          </div>
          <div>
            <span className="navbar__brand">Elites</span>
            <span className="navbar__tagline">STOCK & TECH SOLUTIONS</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {mainLinks.map(({ label, path }) => (
            <li key={path}>
              <Link to={path}
                className={`navbar__link${location.pathname === path ? ' navbar__link--active' : ''}`}>
                {label}
              </Link>
            </li>
          ))}

          {/* Services dropdown */}
          <li ref={dropRef} className="navbar__drop-wrap">
            <button
              className={`navbar__link navbar__drop-btn${isServicesActive ? ' navbar__link--active' : ''}`}
              onClick={() => setDropOpen(p => !p)}
              aria-expanded={dropOpen}
            >
              Services
              <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence>
              {dropOpen && (
                <motion.div className="navbar__dropdown"
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {serviceDropdown.map(s => (
                    <Link key={s.path} to={s.path} className="navbar__drop-item">
                      <div className="navbar__drop-icon" style={{ background: `${s.color}18`, color: s.color }}>
                        {s.icon}
                      </div>
                      <div>
                        <div className="navbar__drop-label">{s.label}</div>
                        <div className="navbar__drop-sub">{s.sub}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <Link to="/quote" className="navbar__cta">Get a Quote →</Link>

        <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="navbar__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            <ul className="navbar__mobile-links">
              {mainLinks.map(({ label, path }, i) => (
                <motion.li key={path}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}>
                  <Link to={path}
                    className={`navbar__mobile-link${location.pathname === path ? ' active' : ''}`}>
                    {label}
                  </Link>
                </motion.li>
              ))}

              {/* Services section in mobile */}
              <motion.li initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <div className="navbar__mobile-section-label">Services</div>
              </motion.li>
              {serviceDropdown.map((s, i) => (
                <motion.li key={s.path}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22 + i * 0.05 }}>
                  <Link to={s.path}
                    className={`navbar__mobile-link navbar__mobile-link--service${location.pathname === s.path ? ' active' : ''}`}>
                    <span className="navbar__mobile-svc-dot" style={{ background: s.color }} />
                    {s.label}
                  </Link>
                </motion.li>
              ))}

              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                <Link to="/quote" className="navbar__mobile-cta">Get a Quote →</Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}