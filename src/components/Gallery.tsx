import { motion } from 'framer-motion';
import { siteConfig } from '../config';

export const Gallery = () => {
  return (
    <section style={styles.gallerySection}>
      <div className="masonry-grid">
        {siteConfig.galleryPhotos.map((photo, i) => (
          <motion.div 
            key={i} 
            className={`masonry-item size-${photo.size}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: (i % 5) * 0.1, ease: 'easeOut' }}
          >
            <img src={photo.url} alt={`Gallery ${i}`} loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  gallerySection: {
    padding: '4rem 0',
    position: 'relative' as const,
    zIndex: 1,
  }
};
