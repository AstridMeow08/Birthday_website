import { motion } from 'framer-motion';
import { siteConfig } from '../config';

export const Message = () => {
  return (
    <section style={styles.messageSection}>
      <motion.div 
        style={styles.messageContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p style={styles.messageText}>
          {siteConfig.message}
        </p>
      </motion.div>
    </section>
  );
};

const styles = {
  messageSection: {
    padding: '10rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5edfb', // soft lavender
  },
  messageContainer: {
    maxWidth: '800px',
    textAlign: 'center' as const,
  },
  messageText: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
    lineHeight: 1.6,
    color: 'var(--text-color)',
    whiteSpace: 'pre-line' as const,
    fontStyle: 'italic',
  }
};
