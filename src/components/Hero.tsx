import { motion } from 'framer-motion';

export const Hero = ({ onUnlockPrompt }: { onUnlockPrompt: () => void }) => {
  return (
    <section className="gingham-bg" style={styles.heroSection}>
      {/* Corner Hearts */}
      <HandDrawnHeart style={{ top: '5%', left: '5%' }} />
      <HandDrawnHeart style={{ top: '5%', right: '5%' }} />
      <HandDrawnHeart style={{ bottom: '5%', left: '5%' }} />
      <HandDrawnHeart style={{ bottom: '5%', right: '5%' }} />

      <div style={styles.centerContainer}>
        {/* Curved Text */}
        <div style={styles.svgContainer}>
          <svg viewBox="0 0 800 300" style={styles.svg}>
            {/* A wider, flatter arch */}
            <path id="curve" d="M 50 250 Q 400 120 750 250" fill="transparent" />
            <text width="800" style={styles.curvedText}>
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                A Little Bouquet,
              </textPath>
            </text>
          </svg>
        </div>

        {/* Bouquet Graphic */}
        <motion.img
          src="/bouquet.png"
          alt="Watercolor Bouquet"
          style={styles.bouquet}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileTap={{ scale: 0.95 }}
          onDoubleClick={onUnlockPrompt}
        />

        {/* Interactive Prompt */}
        <motion.div
          style={styles.tapPrompt}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span style={styles.tapText}>double tap on bouquet</span>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={styles.tapArrow}>
            <path d="M5 5 Q 15 30 35 35 M 25 30 L 35 35 L 30 25" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

const HandDrawnHeart = ({ style }: { style: React.CSSProperties }) => (
  <svg
    width="54" height="54" viewBox="0 0 24 24"
    fill="none" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ position: 'absolute', ...style }}
  >
    {/* A slightly imperfect heart shape to look hand-drawn */}
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.9 7.9 7.9-7.9 1-1a5.5 5.5 0 0 0 0-7.8z" />
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.9 7.9 7.9-7.9 1-1a5.5 5.5 0 0 0 0-7.8z" strokeWidth="0.5" transform="translate(1, 0.5) rotate(5)" opacity="0.5" />
  </svg>
);

const styles: Record<string, React.CSSProperties> = {
  heroSection: {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  centerContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1000px',
  },
  svgContainer: {
    width: '100%',
    height: '250px',
    position: 'absolute',
    top: '-30px',
    zIndex: 2,
    pointerEvents: 'none',
  },
  svg: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  curvedText: {
    fontFamily: 'var(--font-hand)',
    fontSize: '2.8rem',
    fill: '#1d4ed8', /* A strong blue matching the reference */
    letterSpacing: '4px',
  },
  bouquet: {
    width: '100%',
    maxWidth: '550px',
    height: 'auto',
    position: 'relative',
    zIndex: 1,
    marginTop: '100px', /* Push down below the arch */
    cursor: 'pointer',
  },
  tapPrompt: {
    position: 'absolute',
    bottom: '80px',
    left: '25%',
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 3,
  },
  tapText: {
    fontFamily: 'var(--font-hand)',
    color: '#1d4ed8',
    fontSize: '1.4rem',
    marginRight: '8px',
  },
  tapArrow: {
    marginTop: '15px',
  }
};
