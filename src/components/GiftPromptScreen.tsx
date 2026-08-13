import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface GiftPromptScreenProps {
  onAccept: () => void;
}

const BackgroundDecorations = () => {
  const stars = [
    { top: '15%', left: '20%', color: '#ffde59', size: 30, rotation: 15 },
    { top: '25%', left: '80%', color: '#ff914d', size: 24, rotation: -20 },
    { top: '70%', left: '15%', color: '#4caf50', size: 32, rotation: 10 },
    { top: '75%', left: '85%', color: '#ff66c4', size: 26, rotation: -15 },
    { top: '40%', left: '10%', color: '#cb6ce6', size: 22, rotation: 45 },
    { top: '50%', left: '85%', color: '#ffde59', size: 30, rotation: -30 },
    { top: '85%', left: '40%', color: '#ff914d', size: 20, rotation: -5 },
    { top: '20%', left: '60%', color: '#cb6ce6', size: 24, rotation: 25 },
  ];

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Scattered Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            color: star.color,
            width: star.size,
            height: star.size,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [star.rotation, star.rotation + 10, star.rotation - 10, star.rotation],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 3 + (i % 3) * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        >
          <Star 
            style={{
              width: '100%',
              height: '100%',
              fill: star.color,
            }} 
          />
        </motion.div>
      ))}

      {/* Abstract Shapes (Corners) */}
      
      {/* Top Left Teal Zigzag */}
      <motion.svg 
        width="200" height="200" viewBox="0 0 100 100" 
        style={{ position: 'absolute', top: '-20px', left: '-20px' }}
        animate={{ rotate: [-10, -5, -15, -10], y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M10,50 L30,20 L50,50 L70,20 L90,50" fill="none" stroke="#1d8995" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>

      {/* Top Right Pink Steps */}
      <motion.svg 
        width="220" height="220" viewBox="0 0 100 100" 
        style={{ position: 'absolute', top: '-10px', right: '-30px' }}
        animate={{ rotate: [15, 20, 10, 15], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <path d="M10,80 L40,80 L40,50 L70,50 L70,20 L100,20" fill="none" stroke="#ff66c4" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>

      {/* Bottom Left Orange Arc */}
      <motion.svg 
        width="200" height="200" viewBox="0 0 100 100" 
        style={{ position: 'absolute', bottom: '-20px', left: '-10px' }}
        animate={{ rotate: [20, 10, 30, 20], y: [0, -15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <path d="M20,90 A35,35 0 0,1 90,90" fill="none" stroke="#ff914d" strokeWidth="16" strokeLinecap="round" />
      </motion.svg>

      {/* Bottom Right Teal Arc */}
      <motion.svg 
        width="250" height="250" viewBox="0 0 100 100" 
        style={{ position: 'absolute', bottom: '-40px', right: '-40px' }}
        animate={{ rotate: [-40, -30, -50, -40], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <path d="M10,20 A40,40 0 0,0 90,20" fill="none" stroke="#1d8995" strokeWidth="14" strokeLinecap="round" />
      </motion.svg>
      
      {/* Small Dark Green Heart Accent */}
      <motion.svg 
        width="80" height="80" viewBox="0 0 100 100" 
        style={{ position: 'absolute', top: '25%', right: '15%' }}
        animate={{ rotate: [15, 5, 25, 15], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <path d="M50,85 C50,85 10,55 10,30 C10,15 25,5 40,15 C50,25 50,25 50,25 C50,25 50,25 60,15 C75,5 90,15 90,30 C90,55 50,85 50,85 Z" fill="none" stroke="#146973" strokeWidth="8" strokeLinecap="round" />
      </motion.svg>
    </div>
  );
};


export const GiftPromptScreen = ({ onAccept }: GiftPromptScreenProps) => {
  const [rejected, setRejected] = useState(false);

  const renderBouncyText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} style={{ 
        display: 'inline-block', 
        transform: `translateY(${i % 2 === 0 ? '-3px' : '3px'}) rotate(${i % 2 === 0 ? '-3deg' : '3deg'})` 
      }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  if (rejected) {
    return (
      <section className="gingham-bg" style={styles.container}>
        <BackgroundDecorations />
        
        <motion.div 
          style={styles.content}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <div style={styles.textContainer}>
            <h2 style={{...styles.text, color: '#f44336'}}>
              {renderBouncyText("OH COME ON...")}
            </h2>
            <h2 style={{...styles.text, color: '#ff9800'}}>
              {renderBouncyText("YOU HAVE TO SAY YES!")}
            </h2>
          </div>
          
          <motion.img 
            src="/wrong_passcode_dog.png" 
            alt="Confused dog" 
            style={styles.image}
            animate={{ 
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />

          <motion.button 
            style={{...styles.button, color: '#4caf50', marginTop: '20px'}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setRejected(false)}
          >
            FINE, I'LL SAY YES!
          </motion.button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="gingham-bg" style={styles.container}>
      <BackgroundDecorations />
      
      <motion.div 
        style={styles.content}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <div style={styles.textContainer}>
          <h2 style={{...styles.text, color: '#f44336'}}>
            {renderBouncyText("I MADE SOMETHING FOR YOU")}
          </h2>
          <h2 style={{...styles.text, color: '#4caf50'}}>
            {renderBouncyText("DO YOU WANNA SEE IT?")}
          </h2>
        </div>
        
        <motion.div style={styles.imageWrapper}>
          {/* Decorative Sparkles around the box */}
          <Star style={{...styles.sparkle, top: '10%', left: '10%', color: '#ffde59', width: 40, height: 40 }} />
          <Star style={{...styles.sparkle, top: '20%', right: '5%', color: '#ff66c4', width: 30, height: 30 }} />
          <Star style={{...styles.sparkle, bottom: '15%', left: '-5%', color: '#1d8995', width: 25, height: 25 }} />

          <motion.img 
            src="/gift_dog.png" 
            alt="Dog in a gift box" 
            style={styles.image}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.3 }}
          />
        </motion.div>

        <div style={styles.buttonContainer}>
          <motion.button 
            style={{...styles.button, color: '#ff9800'}}
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={onAccept}
          >
            YES
          </motion.button>
          
          <motion.button 
            style={{...styles.button, color: '#f44336'}}
            whileHover={{ scale: 1.15, x: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.3 }}
            onClick={() => setRejected(true)}
          >
            NO
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Playpen Sans', cursive",
    position: 'relative',
    overflow: 'hidden'
  } as React.CSSProperties,
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    zIndex: 10
  } as React.CSSProperties,
  textContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  } as React.CSSProperties,
  text: {
    fontSize: '2.5rem',
    fontWeight: 900,
    margin: 0,
    textShadow: '2px 2px 0px rgba(0,0,0,0.15)',
    letterSpacing: '2px',
    whiteSpace: 'nowrap'
  } as React.CSSProperties,
  imageWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  } as React.CSSProperties,
  sparkle: {
    position: 'absolute',
    fill: 'currentColor',
    animation: 'pulse 2s infinite',
    opacity: 0.8
  } as React.CSSProperties,
  image: {
    width: '320px',
    height: '320px',
    objectFit: 'contain',
    zIndex: 2,
    filter: 'drop-shadow(0px 15px 25px rgba(0,0,0,0.1))'
  } as React.CSSProperties,
  buttonContainer: {
    display: 'flex',
    gap: '60px',
    marginTop: '5px'
  } as React.CSSProperties,
  button: {
    background: 'none',
    border: 'none',
    fontSize: '3rem',
    fontWeight: 900,
    cursor: 'pointer',
    fontFamily: "'Playpen Sans', cursive",
    padding: '10px 20px',
    textShadow: '3px 3px 0px rgba(0,0,0,0.15)'
  } as React.CSSProperties
};
