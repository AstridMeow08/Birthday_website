import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mic, Camera } from 'lucide-react';

export const MemoriesScreen = () => {
  const [showInnerGallery, setShowInnerGallery] = useState(false);
  const [flowersRevealed, setFlowersRevealed] = useState(false);


  // We can pre-generate flower positions so they don't jump around on re-renders
  const [flowers] = useState(() =>
    Array.from({ length: 25 }).map((_, i) => {
      // Mostly use june.png, occasionally the others
      const rand = Math.random();
      let src = '/screen_flowers/june.png';
      if (rand > 0.85) src = '/screen_flowers/may.png';
      else if (rand > 0.7) src = '/screen_flowers/august.png';

      return {
        id: i,
        src,
        left: `${5 + Math.random() * 90}%`,
        top: `${5 + Math.random() * 90}%`,
        rotation: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.6, // Smaller, less overlapping scale
        delay: Math.random() * 0.4, // Stagger their fly-away animation
      };
    })
  );

  const images = [
    '/ref/girl.jpg',
    '/ref/girl2.jpg',
    '/ref/girl3.jpg',
    '/ref/girl4.jpg',
    '/ref/girl5.jpg',
    '/ref/girl6.jpg',
    '/ref/girl7.jpg',
    '/ref/girl8.jpg',
    '/ref/girl9.jpg',
  ];

  const currentImages = images;


  return (
    <section style={styles.container}>
      {/* Flowers Overlay */}
      <motion.div
        style={{ ...styles.flowersOverlay, pointerEvents: flowersRevealed ? 'none' : 'auto' }}
        initial={{ opacity: 1 }}
        animate={{ opacity: flowersRevealed ? 0 : 1, transitionEnd: { display: flowersRevealed ? 'none' : 'block' } }}
        transition={{ duration: 1.5, delay: 0.8 }}
        onClick={() => setFlowersRevealed(true)}
      >
        <div style={styles.flowerInstruction}>Tap anywhere to reveal memories...</div>
        {flowers.map((f) => (
          <motion.img
            key={f.id}
            src={f.src}
            style={{
              position: 'absolute',
              left: f.left,
              top: f.top,
              width: '180px',
              // Removed mixBlendMode to prevent muddy overlaps
            }}
            initial={{ rotate: f.rotation, scale: f.scale, x: '-50%', y: '-50%' } as any}
            animate={flowersRevealed ? { y: -1500, rotate: f.rotation + (Math.random() > 0.5 ? 180 : -180) } : { y: '-50%', x: '-50%', rotate: f.rotation, scale: f.scale }}
            transition={{ duration: 1.5, delay: f.delay, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      {/* Top Google-style Header */}
      <div style={styles.header}>
        {showInnerGallery && (
          <div style={styles.backButton} onClick={() => setShowInnerGallery(false)}>
            ← Back to all memories
          </div>
        )}
        {/* Logo */}
        <h1 style={styles.logo}>
          <span style={{ color: '#4285F4' }}>M</span>
          <span style={{ color: '#EA4335' }}>e</span>
          <span style={{ color: '#FBBC05' }}>m</span>
          <span style={{ color: '#4285F4' }}>o</span>
          <span style={{ color: '#34A853' }}>r</span>
          <span style={{ color: '#EA4335' }}>i</span>
          <span style={{ color: '#FBBC05' }}>e</span>
          <span style={{ color: '#4285F4' }}>s</span>
        </h1>

        {/* Search Bar */}
        <div style={styles.searchBar}>
          <Search color="#9aa0a6" size={20} />
          <span style={styles.searchText}>Best Moments ❤️</span>
          <div style={styles.searchIcons}>
            <Mic color="#4285F4" size={20} />
            <Camera color="#4285F4" size={20} />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={styles.tabsContainer}>
          <span style={styles.tab}>All</span>
          <span style={styles.tab}>Images</span>
          <span style={styles.tab}>Videos</span>
          <span style={styles.tab}>News</span>
          <span style={styles.tab}>Maps</span>
          <span style={{ ...styles.tab, ...styles.activeTab }}>Memories</span>
        </div>
      </div>

      <style>
        {`
          @keyframes scrollCarousel {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .auto-scroll-carousel {
            display: flex;
            width: max-content;
            animation: scrollCarousel 30s linear infinite;
          }
          .auto-scroll-carousel:hover {
            animation-play-state: paused;
          }
          .carousel-track {
            display: flex;
            gap: 20px;
            padding-right: 20px;
          }
        `}
      </style>

      {/* Image Carousel (Auto-scrolling) */}
      <div style={styles.carouselContainer}>
        <div className="auto-scroll-carousel">
          <div className="carousel-track">
            {currentImages.map((src, index) => (
              <motion.div
                key={`set1-${src}`}
                style={{ ...styles.imageCard, cursor: showInnerGallery ? 'default' : 'pointer' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                onClick={() => !showInnerGallery && setShowInnerGallery(true)}
                whileHover={!showInnerGallery ? { y: -10 } : {}}
              >
                <img src={src} alt={`Memory ${index + 1}`} style={styles.gridImage} draggable="false" />
              </motion.div>
            ))}
          </div>
          <div className="carousel-track">
            {currentImages.map((src, index) => (
              <motion.div
                key={`set2-${src}`}
                style={{ ...styles.imageCard, cursor: showInnerGallery ? 'default' : 'pointer' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                onClick={() => !showInnerGallery && setShowInnerGallery(true)}
                whileHover={!showInnerGallery ? { y: -10 } : {}}
              >
                <img src={src} alt={`Memory ${index + 1}`} style={styles.gridImage} draggable="false" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Overlays */}
      <motion.img
        src="/snoopy_party_hat.png"
        alt="Snoopy Party"
        style={styles.snoopyLeft}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.img
        src="/crown_sticker.png"
        alt="Crown"
        style={styles.crownRight}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </section>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh', // strictly 100vh so it doesn't push into the next screen
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px', // reduced padding
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },
  flowersOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fffdf9', // Slight off-white to blend flowers
    zIndex: 100, // Very high to cover everything
    overflow: 'hidden',
    cursor: 'pointer',
  },
  flowerInstruction: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 101, // Above the flowers
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: '10px 20px',
    borderRadius: '20px',
    pointerEvents: 'none',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  header: {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px', // reduced margin
    zIndex: 2,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: '0',
    left: '0',
    padding: '10px 15px',
    backgroundColor: '#f1f3f4',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    color: '#3c4043',
    fontWeight: 'bold',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    letterSpacing: '-2px',
    margin: '0 0 20px 0',
  },
  searchBar: {
    width: '100%',
    maxWidth: '600px',
    height: '48px',
    backgroundColor: '#ffffff',
    border: '1px solid #dfe1e5',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '0 1px 6px rgba(32,33,36,0.28)',
    boxSizing: 'border-box',
    marginBottom: '20px',
  },
  searchText: {
    flex: 1,
    marginLeft: '15px',
    color: '#3c4043',
    fontSize: '1.1rem',
  },
  searchIcons: {
    display: 'flex',
    gap: '15px',
  },
  tabsContainer: {
    display: 'flex',
    gap: '20px',
    width: '100%',
    borderBottom: '1px solid #ebebeb',
    paddingBottom: '10px',
    overflowX: 'auto',
    justifyContent: 'center',
  },
  tab: {
    color: '#5f6368',
    fontSize: '0.95rem',
    cursor: 'pointer',
    padding: '5px 0',
  },
  activeTab: {
    color: '#1a73e8',
    borderBottom: '3px solid #1a73e8',
    fontWeight: 'bold',
  },
  carouselContainer: {
    width: '100%',
    maxWidth: '1000px',
    display: 'flex',
    zIndex: 2,
    flex: 1,
    overflow: 'hidden', // hide native scrollbar, rely on framer-motion drag
    padding: '20px', // to allow box-shadow to breathe
    alignItems: 'center',
    cursor: 'grab',
  },
  carouselInner: {
    display: 'flex',
    gap: '20px',
  },
  imageCard: {
    flex: '0 0 auto',
    width: '320px',
    height: '420px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    scrollSnapAlign: 'center', // Snaps exactly in the middle
  },
  gridImage: {
    width: '100%',
    height: '100%', // Take up all available height
    objectFit: 'cover',
    flex: 1,
  },
  imageCaption: {
    padding: '15px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#3c4043',
    textAlign: 'center',
    borderTop: '1px solid #ebebeb',
  },
  snoopyLeft: {
    position: 'absolute',
    bottom: '140px',
    left: '10px',
    width: '150px',
    zIndex: 3,
    mixBlendMode: 'multiply',
  },
  crownRight: {
    position: 'absolute',
    bottom: '160px',
    right: '20px',
    width: '80px',
    zIndex: 3,
    mixBlendMode: 'multiply',
  }
} as const;
