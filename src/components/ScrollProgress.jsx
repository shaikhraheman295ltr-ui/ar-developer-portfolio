import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    >
      <div className="scroll-progress-glow" />
      <div className="scroll-progress-shine" />
    </motion.div>
  );
}