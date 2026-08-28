import { motion, useReducedMotion } from 'framer-motion';

export default function Section({ id, title, eyebrow, className = '', children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className={`section-card ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </motion.section>
  );
}
