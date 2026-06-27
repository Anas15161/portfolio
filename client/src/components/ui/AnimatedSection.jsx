// /home/anas/Desktop/portefolio/portfolio/client/src/components/ui/AnimatedSection.jsx
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, id, className = '', delay = 0 }) => {
  return (
    <motion.section
      id={id}
      className={`py-20 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;
