import { motion } from 'framer-motion';

const RansomLetter = ({ letter, bgColor, color, rotate, fontFamily, padding = '10px 15px', fontSize = '3rem', width }: any) => (
  <motion.div
    style={{
      backgroundColor: bgColor,
      color: color,
      padding,
      margin: '0 -2px', // Tighter spacing between letters
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize,
      fontFamily: fontFamily || "'Courier New', Courier, monospace",
      transform: `rotate(${rotate}deg)`,
      boxShadow: '3px 3px 6px rgba(0,0,0,0.2)',
      borderRadius: '2px', // Slight rounding
      width: width || 'auto',
    }}
    whileHover={{ scale: 1.1, rotate: 0 }}
  >
    {letter}
  </motion.div>
);

const OutlineLetter = ({ letter, color, rotate, fontSize = '3rem' }: any) => (
  <motion.div
    style={{
      backgroundColor: '#f5f5f5', // off-white paper color
      color: 'transparent',
      WebkitTextStroke: `2px ${color}`,
      padding: '10px 15px',
      margin: '0 4px',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '900',
      fontSize,
      fontFamily: "'Arial Black', Impact, sans-serif",
      transform: `rotate(${rotate}deg)`,
      boxShadow: '3px 3px 6px rgba(0,0,0,0.2)',
    }}
    whileHover={{ scale: 1.1, rotate: 0 }}
  >
    {letter}
  </motion.div>
);

export const BirthdayGreetingScreen = () => {
  return (
    <section style={styles.container}>
      {/* Background elements */}
      <div style={styles.backgroundTexture} />
      
      {/* Decorations */}
      {/* Stars and Hearts */}
      <motion.img animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} src="/gold_star.png" style={{ position: 'absolute', top: '10%', left: '20%', width: '80px', mixBlendMode: 'multiply' }} alt="star" />
      <motion.img animate={{ rotate: [0, -15, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4 }} src="/gold_star.png" style={{ position: 'absolute', top: '15%', right: '22%', width: '70px', mixBlendMode: 'multiply' }} alt="star" />
      <motion.img animate={{ rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3.5 }} src="/gold_star.png" style={{ position: 'absolute', bottom: '25%', left: '15%', width: '50px', mixBlendMode: 'multiply' }} alt="star" />
      
      <motion.img animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2 }} src="/pink_heart.png" style={{ position: 'absolute', top: '12%', left: '5%', width: '60px', mixBlendMode: 'multiply', transform: 'rotate(-15deg)' }} alt="heart" />
      <motion.img animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2.5 }} src="/pink_heart.png" style={{ position: 'absolute', top: '10%', right: '8%', width: '50px', mixBlendMode: 'multiply', transform: 'rotate(25deg)' }} alt="heart" />

      {/* Flowers */}
      <motion.img animate={{ rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} src="/yellow_flower.png" style={{ position: 'absolute', top: '25%', left: '10%', width: '70px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }} alt="decoration" />
      <motion.img animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }} src="/red_flower.png" style={{ position: 'absolute', top: '35%', right: '8%', width: '60px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }} alt="decoration" />
      <motion.img animate={{ rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3.5 }} src="/blue_flower.png" style={{ position: 'absolute', bottom: '35%', right: '5%', width: '90px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }} alt="decoration" />
      
      {/* Top Text: HAPPY */}
      <div style={styles.happyContainer}>
        <RansomLetter letter="H" bgColor="#e53935" color="white" rotate={-5} fontFamily="Georgia, serif" fontSize="4rem" />
        <RansomLetter letter="A" bgColor="#ffcdd2" color="black" rotate={3} fontSize="4rem" />
        <RansomLetter letter="P" bgColor="#212121" color="white" rotate={-4} fontSize="4rem" />
        <RansomLetter letter="P" bgColor="#e91e63" color="white" rotate={6} fontSize="4rem" />
        <RansomLetter letter="Y" bgColor="#ffca28" color="#333" rotate={-3} fontSize="4rem" />
      </div>

      {/* Center Image Frame */}
      <motion.div 
        style={styles.cameraContainer}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Photo inside camera */}
        <img 
          src="/ref/girl.jpg" 
          alt="Photo in camera" 
          style={{
            position: 'absolute',
            top: '39.8%', 
            left: '28%',
            width: '45.5%',
            height: '35.2%',
            transform: 'rotate(2.5deg)',
            objectFit: 'cover',
            zIndex: -1, // Force it to be behind the camera image
            borderRadius: '8px',
          }}
        />
        <img src="/retro_camera.png" alt="Retro Camera with Photo" style={styles.cameraImage} />
      </motion.div>

      {/* Bottom Text: BiRtHdAY */}
      <div style={styles.birthdayContainer}>
        <OutlineLetter letter="B" color="black" rotate={-4} fontSize="3.5rem" />
        <RansomLetter letter="i" bgColor="#f48fb1" color="white" rotate={5} fontSize="3.5rem" padding="10px 20px" />
        <RansomLetter letter="r" bgColor="#fff59d" color="black" rotate={-3} fontFamily="Impact, sans-serif" fontSize="3.5rem" />
        <RansomLetter letter="t" bgColor="#e53935" color="white" rotate={2} fontSize="3.5rem" />
        <RansomLetter letter="H" bgColor="#4caf50" color="white" rotate={-5} fontSize="3.5rem" />
        <RansomLetter letter="d" bgColor="#9e9e9e" color="black" rotate={4} fontSize="3.5rem" />
        <OutlineLetter letter="A" color="black" rotate={-2} fontSize="3.5rem" />
        <RansomLetter letter="Y" bgColor="#ff9800" color="white" rotate={6} fontSize="3.5rem" />
      </div>

      {/* Snoopy characters */}
      <motion.div style={styles.snoopyLeft} animate={{ rotate: [-10, -5, -10] }} transition={{ repeat: Infinity, duration: 4 }}>
        <img src="/snoopy_cake.png" alt="Snoopy with Cake" style={styles.snoopyImage} />
      </motion.div>
      <motion.div style={styles.snoopyRight} animate={{ rotate: [5, 10, 5] }} transition={{ repeat: Infinity, duration: 4.5 }}>
        <img src="/snoopy_gift.png" alt="Snoopy with Gift" style={styles.snoopyImage} />
      </motion.div>
    </section>
  );
};

const styles = {
  container: {
    width: '100vw',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    backgroundColor: '#ffffff', // White base
  },
  backgroundTexture: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.8,
    pointerEvents: 'none',
    backgroundImage: `url("/crumpled_paper.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    mixBlendMode: 'multiply',
  },
  happyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '-20px', // Pull camera closer
    zIndex: 2,
    flexWrap: 'wrap',
  },
  cameraContainer: {
    width: '100%',
    maxWidth: '550px', // Reduced from 850px to prevent bleeding to the next screen
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Let text overlap it
    position: 'relative',
  },
  cameraImage: {
    width: '100%',
    height: 'auto',
    mixBlendMode: 'multiply', // blends white bg of camera image
    position: 'relative',
    zIndex: 2,
  },
  birthdayContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-30px', // Pull camera closer
    zIndex: 2,
    flexWrap: 'wrap',
  },
  snoopyLeft: {
    position: 'absolute',
    bottom: '30px',
    left: '30px',
    zIndex: 2,
    width: '180px',
  },
  snoopyRight: {
    position: 'absolute',
    bottom: '40px',
    right: '30px',
    zIndex: 2,
    width: '180px',
  },
  snoopyImage: {
    width: '100%',
    height: 'auto',
    mixBlendMode: 'multiply', // blends white bg
  }
} as const;
