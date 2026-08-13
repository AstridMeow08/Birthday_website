import { useState } from 'react';
import { motion } from 'framer-motion';

export const LetterScreen = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section style={styles.container}>
      {/* Sun Effect */}
      <div style={styles.sun} />

      {/* Foreground Left Flower */}
      <motion.div
        style={{ ...styles.sideFlower, left: '-5%', bottom: '-5%', width: '35vw', minWidth: '300px' }}
        initial={{ opacity: 0, y: 50, rotate: -15 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          src="/red_flower.png"
          style={{ width: '100%', height: 'auto', originY: 1 }}
          animate={{ rotate: [-2.5, 3.5, -2.5] }}
          transition={{ repeat: Infinity, duration: 6.39, ease: 'easeInOut', delay: 1.12 }}
        />
      </motion.div>

      {/* Foreground Right Flower */}
      <motion.div
        style={{ ...styles.sideFlower, right: '-5%', bottom: '-25%', width: '35vw', minWidth: '300px' }}
        initial={{ opacity: 0, y: 50, rotate: 15 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <motion.img
          src="/blue_flower.png"
          style={{ width: '100%', height: 'auto', originY: 1 }}
          animate={{ rotate: [3.5, -2.5, 3.5] }}
          transition={{ repeat: Infinity, duration: 7.1, ease: 'easeInOut', delay: 0.5 }}
        />
      </motion.div>

      {/* Main Envelope Container */}
      <motion.div
        style={styles.envelopeWrapper}
        initial={{ y: '100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ y: -30 }} // Lifts the envelope up
        transition={{ type: 'spring', bounce: 0.4, duration: 1.5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Flowers behind envelope */}
        {/* Back layer of flowers */}
        <motion.img 
          src="/blue_flower.png" 
          alt="flower" 
          style={{ position: 'absolute', bottom: '65%', left: '12%', width: '28%', zIndex: 2, originY: 1 }} 
          initial={{ rotate: -40, scaleX: -1 }}
          animate={{ rotate: [-42.5, -36.5, -42.5], scaleX: -1 }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.img 
          src="/yellow_flower.png" 
          alt="flower" 
          style={{ position: 'absolute', bottom: '70%', left: '42%', width: '25%', zIndex: 2, originY: 1 }} 
          initial={{ rotate: -5 }}
          animate={{ rotate: [-7.5, -1.5, -7.5] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.2 }}
        />
        <motion.img 
          src="/red_flower.png" 
          alt="flower" 
          style={{ position: 'absolute', bottom: '65%', right: '15%', width: '25%', zIndex: 2, originY: 1 }} 
          initial={{ rotate: 15, scaleX: -1 }}
          animate={{ rotate: [12.5, 18.5, 12.5], scaleX: -1 }}
          transition={{ repeat: Infinity, duration: 6.9, ease: 'easeInOut', delay: 0.4 }}
        />
        {/* Front layer of flowers */}
        <motion.img 
          src="/yellow_flower.png" 
          alt="flower" 
          style={{ position: 'absolute', bottom: '75%', left: '2%', width: '30%', zIndex: 2, originY: 1 }} 
          initial={{ rotate: -20 }}
          animate={{ rotate: [-22.5, -16.5, -22.5] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 0.2 }}
        />
        <motion.img 
          src="/red_flower.png" 
          alt="flower" 
          style={{ position: 'absolute', bottom: '80%', left: '25%', width: '35%', zIndex: 2, originY: 1 }} 
          initial={{ rotate: 5 }}
          animate={{ rotate: [2.5, 8.5, 2.5] }}
          transition={{ repeat: Infinity, duration: 7.2, ease: 'easeInOut', delay: 1.1 }}
        />
        <motion.img 
          src="/yellow_flower1.png" 
          alt="flower" 
          style={{ position: 'absolute', bottom: '70%', right: '20%', width: '45%', zIndex: 2, originY: 1 }} 
          initial={{ rotate: -5 }}
          animate={{ rotate: [-7.5, -1.5, -7.5] }}
          transition={{ repeat: Infinity, duration: 6.8, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.img 
          src="/blue_flower.png" 
          alt="flower" 
          style={{ position: 'absolute', bottom: '70%', right: '0%', width: '35%', zIndex: 2, originY: 1 }} 
          initial={{ rotate: 25 }}
          animate={{ rotate: [22.5, 28.5, 22.5] }}
          transition={{ repeat: Infinity, duration: 7.5, ease: 'easeInOut', delay: 1.5 }}
        />
        
        {/* Envelope Back (Defines wrapper size) */}
        <img src="/envelope_back.png" alt="Envelope Back" style={{ width: '100%', height: 'auto', display: 'block', zIndex: 1, position: 'relative' }} />

        {/* Letter Page */}
        <motion.div
          style={styles.letterContainer}
          initial={{ y: 80 }} // fully inside the envelope initially
          animate={{ y: isHovered ? -80 : 0 }} // rises on hover
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img src="/letter_page.png" alt="Letter Paper" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 -5px 10px rgba(0,0,0,0.1))' }} />
          <div style={styles.letterText}>
            Happy 25th! From counting down the school bell together to navigating real life, so glad we stuck through it all. Here's to 25 years!
            <br />
            <div style={{ textAlign: 'right', marginTop: '5px' }}>- Logesh</div>
          </div>
        </motion.div>

        {/* Envelope Front */}
        <img src="/envelope_front.png" alt="Envelope Front" style={{ ...styles.envelopeLayer, zIndex: 3 }} />

        {/* Envelope Label */}
        <div style={styles.envelopeLabel}>
          To: VaniSri
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom, #eaf4fa 0%, #eaf4fa 60%, #c4e4e3 80%, #a7d3a6 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
  sun: {
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '50vw',
    height: '50vw',
    background: 'radial-gradient(circle, rgba(255,253,230,0.8) 0%, rgba(255,255,255,0) 70%)',
    zIndex: 0,
    pointerEvents: 'none'
  } as React.CSSProperties,
  sideFlower: {
    position: 'absolute',
    zIndex: 4,
    objectFit: 'contain'
  } as React.CSSProperties,
  envelopeWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '380px', // Minimized size
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 2,
    marginTop: '15vh',
    cursor: 'pointer'
  } as React.CSSProperties,
  envelopeLayer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    pointerEvents: 'none'
  } as React.CSSProperties,
  letterContainer: {
    position: 'absolute',
    bottom: '28%', // Lowered so it stays inside but doesn't cover top flap
    left: '10%',
    width: '80%',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  } as React.CSSProperties,
  letterText: {
    position: 'absolute',
    top: '10%',
    width: '78%',
    fontFamily: 'var(--font-hand)',
    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
    lineHeight: 1.4,
    color: '#2b2b2b',
    textAlign: 'left'
  } as React.CSSProperties,
  envelopeLabel: {
    position: 'absolute',
    bottom: '30%', // Moved up significantly to ensure it sits on the envelope graphic
    left: '18%',
    zIndex: 4,
    fontFamily: 'var(--font-hand)',
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    color: '#2b2b2b',
    transform: 'rotate(-3deg)'
  } as React.CSSProperties
};
