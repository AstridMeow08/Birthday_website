import { motion } from 'framer-motion';
import { siteConfig } from '../config';

export const Timeline = () => {
  if (!siteConfig.timeline || siteConfig.timeline.length === 0) return null;

  return (
    <section style={styles.timelineSection}>
      <h2 style={styles.timelineHeader}>Memories</h2>
      <div style={styles.timelineContainer}>
        <div style={styles.timelineStrip}>
          {siteConfig.timeline.map((item, i) => (
            <motion.div 
              key={i} 
              style={styles.timelineCard}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img src={item.url} alt={item.year} style={styles.timelineImage} />
              <div style={styles.timelineCaption}>
                <span style={styles.timelineYear}>{item.year}</span>
                <span style={styles.timelineText}>{item.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  timelineSection: {
    padding: '6rem 0',
    overflow: 'hidden',
  },
  timelineHeader: {
    textAlign: 'center' as const,
    fontSize: '2rem',
    marginBottom: '3rem',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    color: 'var(--accent-2)',
  },
  timelineContainer: {
    width: '100%',
    overflowX: 'auto' as const,
    padding: '0 2rem 2rem 2rem',
    scrollbarWidth: 'none' as const, /* Firefox */
  },
  timelineStrip: {
    display: 'flex',
    gap: '2rem',
    width: 'max-content',
  },
  timelineCard: {
    width: '300px',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  timelineImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as const,
    borderRadius: '0.25rem',
    marginBottom: '1rem',
  },
  timelineCaption: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
  },
  timelineYear: {
    fontWeight: 900,
    fontSize: '1.5rem',
    color: 'var(--accent-3)',
    fontFamily: 'var(--font-serif)',
  },
  timelineText: {
    fontSize: '0.9rem',
    color: '#666',
    marginTop: '0.5rem',
  }
};
