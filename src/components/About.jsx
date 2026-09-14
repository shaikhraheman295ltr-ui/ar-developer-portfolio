import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Brain,
  Database,
  Sparkles,
} from 'lucide-react';

import './About.css';
import aboutVideo from '../assets/v2.mp4';

const skills = [
  {
    icon: Code2,
    title: 'Web Development',
    text: 'React · JavaScript',
  },
  {
    icon: Database,
    title: 'Python & Data',
    text: 'NumPy · Pandas · Matplotlib',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    text: 'Machine Learning · Deep Learning',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-noise" />

      <div className="container">

        {/* TOP */}
        <motion.div
          className="about-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-section-number">
            <span>01</span>
            <i />
            <span>About me</span>
          </div>

          <div className="about-status">
            <span />
            Learning · Building · Creating
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
            <h2>
            I'm <span>AR.</span>
          </h2>

          <p>
            A student and developer exploring the world of
            <strong> web development</strong>,
            <strong> data</strong> and
            <strong> artificial intelligence</strong>.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <motion.div
          className="about-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* VIDEO CARD */}
          <motion.div
            className="about-media"
            variants={item}
          >
            <div className="about-media-inner">

              <video
                src={aboutVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              />

              <div className="about-media-gradient" />

              <div className="about-media-top">
                <span>AR</span>
                <span>ABOUT / 01</span>
              </div>

              <div className="about-media-bottom">
                <div className="about-live">
                  <span />
                  PERSONAL PROFILE
                </div>

                <span>2026</span>
              </div>

            </div>

            {/* decoration */}
            <div className="about-media-line about-media-line--top" />
            <div className="about-media-line about-media-line--bottom" />

            <motion.div
              className="about-floating"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles size={15} />
              <span>Always learning</span>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="about-info"
            variants={item}
          >
            <div className="about-info-number">
              01
            </div>

            <h3>
              Curious mind.
              <br />
              <span>Creative developer.</span>
            </h3>

            <div className="about-description">
              <p>
                I enjoy learning how technology works and turning
                what I learn into real projects and interactive
                digital experiences.
              </p>

              <p>
                My interests move from modern web development
                to Python, data analysis and AI.
              </p>
            </div>

            {/* SKILLS */}
            <div className="about-skills">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    className="about-skill"
                    key={skill.title}
                    whileHover={{
                      x: 8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="about-skill-icon">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    <div className="about-skill-text">
                      <strong>{skill.title}</strong>
                      <span>{skill.text}</span>
                    </div>

                    <span className="about-skill-index">
                      0{index + 1}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#skills"
              className="about-cta cursor-target"
            >
              <span>Explore my skills</span>

              <span className="about-cta-icon">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </motion.div>

        </motion.div>

        {/* BOTTOM STRIP */}
        <motion.div
          className="about-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <span className="about-footer-label">
            Currently exploring
          </span>

          <div className="about-tags">
            <span>React</span>
            <span>Python</span>
            <span>NumPy</span>
            <span>Pandas</span>
            <span>Machine Learning</span>
            <span>TensorFlow</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}