import { motion } from 'framer-motion';

interface WrongPasscodeScreenProps {
  onRetry: () => void;
}

export const WrongPasscodeScreen = ({ onRetry }: WrongPasscodeScreenProps) => {
  return (
    <section 
      className="gingham-bg" 
      style={styles.container}
      onClick={onRetry}
    >
      <motion.div 
        style={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{...styles.text, color: '#4caf50', marginBottom: '-20px'}}>WRONG PASSCODE!</h2>
        
        <motion.img 
          src="/wrong_passcode_dog.png" 
          alt="Confused dog" 
          style={styles.image}
          animate={{ 
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.5,
            repeat: 2,
            repeatType: 'reverse'
          }}
        />

        <h2 style={{...styles.text, color: '#ff9800', marginTop: '-20px', textDecoration: 'underline', textDecorationColor: '#ff9800'}}>TRY AGAIN</h2>
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
    cursor: 'pointer',
    fontFamily: "'Playpen Sans', cursive",
  } as React.CSSProperties,
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  } as React.CSSProperties,
  text: {
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textAlign: 'center',
    margin: 0,
    textShadow: '1px 1px 0px rgba(0,0,0,0.1)'
  } as React.CSSProperties,
  image: {
    width: '300px',
    height: '300px',
    objectFit: 'contain'
  } as React.CSSProperties
};
