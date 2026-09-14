import { motion } from 'framer-motion';

import {
  Code2,
  Palette,
  LayoutDashboard,
  Smartphone,
  Terminal,
  MousePointer2,
  Brain,
  ArrowUpRight,
} from 'lucide-react';

import './Highlights.css';

const mapItems = [
  {
    id: '01',
    title: 'Frontend',
    text: 'Building modern interfaces with React and a strong focus on structure, responsiveness and interaction.',
    icon: Code2,
    position: 'node-frontend',
  },

  {
    id: '02',
    title: 'UI / UX',
    text: 'Designing interfaces around clarity, hierarchy, spacing and a simple user journey.',
    icon: Palette,
    position: 'node-uiux',
  },

  {
    id: '03',
    title: 'Web Experiences',
    text: 'Turning ideas into polished digital experiences that feel smooth, responsive and intentional.',
    icon: LayoutDashboard,
    position: 'node-web',
  },

  {
    id: '04',
    title: 'Responsive',
    text: 'Thinking about how an interface behaves across desktop, tablet and mobile screens.',
    icon: Smartphone,
    position: 'node-responsive',
  },

  {
    id: '05',
    title: 'Python',
    text: 'Working with Python for practical programming, data work and experimentation.',
    icon: Terminal,
    position: 'node-python',
  },

  {
    id: '06',
    title: 'Interaction',
    text: 'Using motion and micro-interactions to make interfaces feel alive without losing usability.',
    icon: MousePointer2,
    position: 'node-motion',
  },
];

const centerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.65,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const nodeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    y: 25,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Highlights() {
  return (
    <section className="highlights-map" id="highlights">

      <div className="highlights-container">

        {/* ================================
            HEADER
        ================================= */}

        <motion.header
          className="map-header"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="map-eyebrow">
            <span>05</span>

            <i />

            <span>About my work</span>
          </div>

          <div className="map-heading">

            <h2>
              How I
              <br />
              <em>think.</em>
            </h2>

            <p>
              A visual map of the things I enjoy building,
              exploring and improving across digital
              experiences.
            </p>

          </div>

        </motion.header>


        {/* ================================
            MAP
        ================================= */}

        <motion.div
          className="creative-map"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >

          {/* GRID */}

          <div className="map-grid" />


          {/* ================================
              CONNECTIONS
          ================================= */}

          <svg
            className="map-connections"
            viewBox="0 0 1000 650"
            preserveAspectRatio="none"
          >

            <motion.path
              d="M500 325 C390 270 280 175 145 120"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 0.45,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
              }}
            />

            <motion.path
              d="M500 325 C610 260 730 170 855 125"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 0.45,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: 0.35,
              }}
            />

            <motion.path
              d="M500 325 C380 345 260 365 125 360"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 0.45,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: 0.5,
              }}
            />

            <motion.path
              d="M500 325 C620 345 745 365 875 370"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 0.45,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: 0.65,
              }}
            />

            <motion.path
              d="M500 325 C425 410 345 495 245 535"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 0.45,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: 0.8,
              }}
            />

            <motion.path
              d="M500 325 C575 410 655 490 760 535"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 0.45,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                delay: 0.95,
              }}
            />

          </svg>


          {/* ================================
              CENTER — AMINE / BRAIN
          ================================= */}

          <motion.div
            className="map-center"
            variants={centerVariants}
          >

            <div className="center-ring ring-one" />
            <div className="center-ring ring-two" />

            <div className="brain-orbit">

              <div className="brain-glow" />

              <div className="brain-icon">
                <Brain
                  size={42}
                  strokeWidth={1.15}
                />
              </div>

            </div>

            <span className="center-small">
              THE MIND
            </span>

            <h3>
              AR
            </h3>

            <p>
              Think · Build · Create
            </p>

          </motion.div>


          {/* ================================
              NODES
          ================================= */}

          {mapItems.map((item) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                className={`map-node ${item.position}`}
                variants={nodeVariants}
                whileHover={{
                  y: -7,
                  scale: 1.025,
                  transition: {
                    duration: 0.3,
                  },
                }}
              >

                <div className="node-card">

                  <div className="node-top">

                    <span className="node-number">
                      {item.id}
                    </span>

                    <div className="node-icon">
                      <Icon
                        size={17}
                        strokeWidth={1.4}
                      />
                    </div>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                  <div className="node-bottom">

                    <span>
                      EXPLORE
                    </span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.3}
                    />

                  </div>

                </div>

              </motion.div>
            );
          })}


          {/* ================================
              MOVING DOT
          ================================= */}

          <motion.div
            className="map-moving-dot"
            animate={{
              x: [0, 90, 180, 90, 0],
              y: [0, -45, 0, 45, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

        </motion.div>

      </div>

    </section>
  );
}