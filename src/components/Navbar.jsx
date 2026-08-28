import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../data';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-18% 0px -58% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    setActiveSection(id);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-inner">
        {navItems.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
            onClick={() => goTo(item.id)}
          >
            <span>{item.label}</span>
            {activeSection === item.id && (
              <motion.span
                layoutId="active-nav"
                className="nav-pill"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
