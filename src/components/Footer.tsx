import { siteConfig } from '../config';

export const Footer = () => {
  return (
    <footer style={styles.footerSection}>
      <div style={styles.tagsContainer}>
        {siteConfig.footerTags.map((tag, i) => (
          <span key={i} style={styles.tag}>{tag}</span>
        ))}
      </div>
      <div style={styles.closingLine}>
        {siteConfig.closingLine}
      </div>
    </footer>
  );
};

const styles = {
  footerSection: {
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid rgba(124, 58, 237, 0.1)',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '2rem',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  tag: {
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.2em',
    color: 'var(--accent-1)',
  },
  closingLine: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: '1.2rem',
    color: 'var(--text-color)',
    opacity: 0.8,
  }
};
