import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface PasscodeScreenProps {
  onSuccess: () => void;
  onFailure: () => void;
}

// Background Decorations Component
const BackgroundDecorations = ({ side }: { side: 'left' | 'right' }) => {
  const stars = side === 'left' ? [
    { top: '10%', left: '15%', color: '#ffde59', size: 30, rotation: 15 },
    { top: '25%', left: '80%', color: '#ff914d', size: 24, rotation: -20 },
    { top: '80%', left: '20%', color: '#4caf50', size: 32, rotation: 10 },
    { top: '75%', left: '85%', color: '#ff66c4', size: 26, rotation: -15 },
    { top: '40%', left: '10%', color: '#cb6ce6', size: 22, rotation: 45 },
    { top: '50%', left: '90%', color: '#ffde59', size: 30, rotation: -30 },
    { top: '15%', left: '50%', color: '#4caf50', size: 20, rotation: 5 },
    { top: '90%', left: '60%', color: '#cb6ce6', size: 24, rotation: -25 },
  ] : [
    { top: '15%', left: '10%', color: '#ff66c4', size: 30, rotation: -15 },
    { top: '30%', left: '85%', color: '#ffde59', size: 24, rotation: 20 },
    { top: '70%', left: '15%', color: '#cb6ce6', size: 32, rotation: -10 },
    { top: '85%', left: '80%', color: '#ff914d', size: 26, rotation: 15 },
    { top: '50%', left: '5%', color: '#4caf50', size: 22, rotation: -45 },
    { top: '10%', left: '75%', color: '#ff66c4', size: 30, rotation: 30 },
    { top: '85%', left: '40%', color: '#ffde59', size: 20, rotation: -5 },
    { top: '20%', left: '50%', color: '#ff914d', size: 24, rotation: 25 },
  ];

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
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
    </div>
  );
};

// Scalloped Frame Component
const ScallopedFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: 'relative', width: 450, height: 450, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg width="450" height="450" viewBox="0 0 450 450" style={{ position: 'absolute', top: 0, left: 0, filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.15))' }}>
        {/* Outer scallops (Dark Teal) */}
        <g fill="#146973">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            return (
              <circle 
                key={i}
                cx={225 + 185 * Math.cos(angle)}
                cy={225 + 185 * Math.sin(angle)}
                r="22"
              />
            );
          })}
          <circle cx="225" cy="225" r="185" />
        </g>
        {/* Inner white border */}
        <circle cx="225" cy="225" r="170" fill="white" />
        {/* Inner teal border */}
        <circle cx="225" cy="225" r="162" fill="#146973" />
      </svg>
      {/* The Image Container */}
      <div style={{ position: 'relative', zIndex: 1, width: 310, height: 310, borderRadius: '50%', overflow: 'hidden', backgroundColor: 'white' }}>
        {children}
      </div>
    </div>
  )
}


export const PasscodeScreen = ({ onSuccess, onFailure }: PasscodeScreenProps) => {
  const [passcode, setPasscode] = useState('');
  const CORRECT_PASSCODE = '1408';

  const handleKeyPress = (key: string) => {
    if (passcode.length < 4) {
      const newPasscode = passcode + key;
      setPasscode(newPasscode);
      
      if (newPasscode.length === 4) {
        setTimeout(() => {
          if (newPasscode === CORRECT_PASSCODE) {
            onSuccess();
          } else {
            onFailure();
          }
        }, 400);
      }
    }
  };

  const keypadLayout = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
  ];

  // Helper for letter styling on the title to make it bouncy
  const renderBouncyTitle = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} style={{ 
        display: 'inline-block', 
        transform: `translateY(${i % 2 === 0 ? '-2px' : '2px'}) rotate(${i % 2 === 0 ? '-2deg' : '2deg'})` 
      }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section style={styles.container}>
      {/* Left Side - Image */}
      <div className="gingham-bg" style={styles.leftPane}>
        <BackgroundDecorations side="left" />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.4 }}
          style={{ zIndex: 10 }}
        >
          <ScallopedFrame>
            <img 
              src="/passcode_dog.png" 
              alt="Dog with flowers" 
              style={styles.image}
            />
          </ScallopedFrame>
        </motion.div>
      </div>

      {/* Right Side - Keypad */}
      <div style={styles.rightPane}>
        {/* Realistic Torn Paper Edge using SVG Filter */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <filter id="torn-paper-edge" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.1" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <div style={styles.tornEdge}></div>
        
        <BackgroundDecorations side="right" />
        
        <div style={styles.keypadContainer}>
          <h2 style={styles.title}>{renderBouncyTitle("Enter a passcode")}</h2>
          
          <div style={styles.dotsContainer}>
            {[0, 1, 2, 3].map((index) => (
              <div key={index} style={styles.dotBox}>
                {passcode.length > index && (
                   <span style={styles.enteredStar}>*</span>
                )}
              </div>
            ))}
          </div>

          <div style={styles.keypadGrid}>
            {keypadLayout.flat().map((key) => (
              <motion.button
                key={key}
                style={styles.keyButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9, backgroundColor: '#f0f0f0' }}
                onClick={() => handleKeyPress(key)}
              >
                <span style={styles.keyText}>{key}</span>
                <div style={styles.keyUnderline}></div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: "'Playpen Sans', cursive",
  } as React.CSSProperties,
  leftPane: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  } as React.CSSProperties,
  rightPane: {
    flex: 1,
    backgroundColor: '#1d8995', // Teal color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
  } as React.CSSProperties,
  tornEdge: {
    position: 'absolute',
    left: '-12px', // Overlap to left
    top: '-10px',  // Overlap top and bottom so edges aren't smooth
    bottom: '-10px',
    width: '24px', // Wide enough to hold the displacement
    backgroundColor: '#1d8995', // Same teal as right pane
    filter: 'url(#torn-paper-edge)',
    zIndex: 5
  } as React.CSSProperties,
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    backgroundColor: 'white'
  } as React.CSSProperties,
  keypadContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    maxWidth: '450px',
    zIndex: 10,
    width: '100%'
  } as React.CSSProperties,
  title: {
    fontSize: '2.5rem', // Reduced to fit on one line
    margin: 0,
    textShadow: '2px 2px 0px rgba(0,0,0,0.15)',
    fontWeight: 800,
    letterSpacing: '1px',
    whiteSpace: 'nowrap'
  } as React.CSSProperties,
  dotsContainer: {
    display: 'flex',
    gap: '18px',
    marginBottom: '20px'
  } as React.CSSProperties,
  dotBox: {
    width: '60px',
    height: '60px',
    backgroundColor: 'transparent',
    border: '4px solid white',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
  enteredStar: {
    fontSize: '3.5rem',
    color: '#ffde59', // yellow star
    lineHeight: '1',
    marginTop: '15px',
    textShadow: '1px 1px 0px rgba(0,0,0,0.1)'
  } as React.CSSProperties,
  keypadGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '25px'
  } as React.CSSProperties,
  keyButton: {
    width: '85px',
    height: '85px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#c23b22', // Red text for keys
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
  } as React.CSSProperties,
  keyText: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    fontFamily: "'Playpen Sans', cursive",
  } as React.CSSProperties,
  keyUnderline: {
    width: '24px',
    height: '4px',
    backgroundColor: '#c23b22',
    marginTop: '2px',
    borderRadius: '2px'
  } as React.CSSProperties
};
