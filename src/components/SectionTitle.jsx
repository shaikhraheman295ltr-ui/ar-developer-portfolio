import { motion } from 'framer-motion';
import './SectionTitle.css';

export default function SectionTitle({
  eyebrow,
  title,
  align = 'left',
}) {
  return (
    <motion.div
      className={`section-title align-${align}`}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.35,
      }}
    >
      <motion.div
        className="section-eyebrow-wrap"
        variants={{
          hidden: {
            opacity: 0,
            y: 12,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        <span className="section-eyebrow-line" />

        <span className="section-eyebrow">
          {eyebrow}
        </span>

        <span className="section-eyebrow-number">
          01
        </span>
      </motion.div>

      <div className="section-title-mask">
        <motion.h2
          variants={{
            hidden: {
              y: '105%',
            },
            visible: {
              y: 0,
              transition: {
                duration: 0.9,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {title}
        </motion.h2>
      </div>

      <motion.div
        className="section-title-line"
        variants={{
          hidden: {
            scaleX: 0,
          },
          visible: {
            scaleX: 1,
            transition: {
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      />
    </motion.div>
  );
}