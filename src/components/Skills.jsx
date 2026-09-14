import { motion } from 'framer-motion';
import {
  siCss,
  siExpress,
  siFigma,
  siFramer,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siKeras,
  siLinux,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siPandas,
  siPostgresql,
  siPython,
  siReact,
  siScikitlearn,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVite,
} from 'simple-icons';

import './Skills.css';

const languages = [
  { name: 'JavaScript', icon: siJavascript },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Python', icon: siPython },
  { name: 'HTML5', icon: siHtml5 },
  { name: 'CSS3', icon: siCss },
  { name: 'SQL', icon: null },
];

const tools = [
  { name: 'React', icon: siReact },
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'Express', icon: siExpress },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'Framer Motion', icon: siFramer },
  { name: 'Vite', icon: siVite },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
  { name: 'Figma', icon: siFigma },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'NumPy', icon: siNumpy },
  { name: 'Pandas', icon: siPandas },
  { name: 'Scikit-learn', icon: siScikitlearn },
  { name: 'TensorFlow', icon: siTensorflow },
  { name: 'Keras', icon: siKeras },
  { name: 'Jupyter', icon: null },
  { name: 'Linux', icon: siLinux },
];

function SkillIcon({ icon }) {
  if (!icon) return <span className="skill-empty-icon">+</span>;

  return (
    <span
      className="skill-icon"
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 35,
  large = false,
}) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className={`skills-marquee ${large ? 'skills-marquee-large' : ''}`}>
      <motion.div
        className="skills-marquee-track"
        animate={{
          x: reverse
            ? ['-33.333%', '0%']
            : ['0%', '-33.333%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeated.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={`${skill.name}-${index}`}
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="skill-icon-wrap">
              <SkillIcon icon={skill.icon} />
            </div>

            <span className="skill-name">
              {skill.name}
            </span>

            <span className="skill-star">✦</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-grid-bg" />
      <div className="skills-orb skills-orb-one" />
      <div className="skills-orb skills-orb-two" />

      <div className="container">

        {/* HEADER */}
        <motion.header
          className="skills-header"
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="skills-topline">
            <div className="skills-label">
              <span>02</span>
              <i />
              <span>Skills</span>
            </div>

            <div className="skills-note">
              <span />
              Always learning
            </div>
          </div>

          <div className="skills-heading">
            <h2>
              Languages
              <br />
              <em>&amp; tools.</em>
            </h2>

            <p>
              The technologies I use, learn and explore
              while building my skills as a developer.
            </p>
          </div>
        </motion.header>


        {/* LANGUAGES */}
        <motion.section
          className="skills-block"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="skills-block-header">
            <span>01</span>
            <strong>Languages</strong>
            <div />
            <small>06</small>
          </div>

          <MarqueeRow
            items={languages}
            duration={25}
            large
          />
        </motion.section>


        {/* TOOLS */}
        <motion.section
          className="skills-block"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          <div className="skills-block-header">
            <span>02</span>
            <strong>Tools</strong>
            <div />
            <small>19</small>
          </div>

          <MarqueeRow
            items={tools}
            reverse
            duration={48}
          />
        </motion.section>


        {/* SECOND TOOLS ROW */}
        <div className="skills-tools-extra">
          <MarqueeRow
            items={[
              ...tools.slice(4),
              ...languages,
            ]}
            duration={42}
          />
        </div>


      </div>
    </section>
  );
}