import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  const Icon = theme === 'light' ? Moon : Sun;
  const label = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <motion.button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      aria-label={label}
      title={label}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -70, y: 8 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          exit={{ opacity: 0, rotate: 70, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <Icon size={19} strokeWidth={2} />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
