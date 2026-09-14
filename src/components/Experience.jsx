import { motion } from 'framer-motion';
import {
  Compass,
  Code2,
  Palette,
  MonitorSmartphone,
  Terminal,
  Rocket,
  ArrowUpRight,
  CircleDot,
} from 'lucide-react';

import './Experience.css';

const journey = [
  {
    id: '01',
    phase: 'FOUNDATION',
    title: 'Web Foundations',
    icon: Compass,

    description:
      'Started building a strong understanding of the web through structure, styling, responsive layouts and the way digital interfaces are put together.',

    skills: [
      'HTML',
      'CSS',
      'Responsive Design',
      'JavaScript',
    ],

    focus:
      'Understanding how the web works and how to create clean interfaces.',
  },

  {
    id: '02',
    phase: 'DEVELOPMENT',
    title: 'Frontend Development',
    icon: Code2,

    description:
      'Moved from static interfaces toward interactive applications, focusing on reusable components, clean structure and better development workflows.',

    skills: [
      'React',
      'Vite',
      'JavaScript',
      'Component Architecture',
    ],

    focus:
      'Turning ideas and designs into functional digital experiences.',
  },

  {
    id: '03',
    phase: 'DESIGN',
    title: 'UI / UX',
    icon: Palette,

    description:
      'Exploring how visual hierarchy, spacing, typography, interaction and usability can work together to make an interface feel simple and intentional.',

    skills: [
      'UI Design',
      'UX Thinking',
      'Visual Hierarchy',
      'Interaction',
    ],

    focus:
      'Making interfaces not only look good, but feel natural to use.',
  },

  {
    id: '04',
    phase: 'EXPERIENCE',
    title: 'Interactive Experiences',
    icon: MonitorSmartphone,

    description:
      'Experimenting with motion, transitions and responsive behaviour to create interfaces that react naturally to the user.',

    skills: [
      'Framer Motion',
      'Micro-interactions',
      'Animations',
      'Responsive UX',
    ],

    focus:
      'Adding motion with purpose instead of decoration.',
  },

  {
    id: '05',
    phase: 'PYTHON',
    title: 'Python & Programming',
    icon: Terminal,

    description:
      'Expanding beyond frontend development through Python and exploring programming concepts, data manipulation and practical problem solving.',

    skills: [
      'Python',
      'NumPy',
      'Pandas',
      'Jupyter',
    ],

    focus:
      'Using programming to solve problems and explore ideas.',
  },

  {
    id: '06',
    phase: 'BUILDING',
    title: 'Projects',
    icon: Rocket,

    description:
      'Putting everything together through personal projects such as StockDZ, this portfolio and interactive applications like Hangman.',

    skills: [
      'StockDZ',
      'Portfolio',
      'Hangman',
      'Personal Experiments',
    ],

    focus:
      'Learning by building real things and continuously improving them.',
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
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

export default function Experience() {
  return (
    <section
      className="experience-journey"
      id="experience"
    >

      <div className="experience-bg-grid" />

      <div className="experience-container">

        {/* =================================
            HEADER
        ================================= */}

        <motion.header
          className="journey-header"

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
            amount: 0.25,
          }}

          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="journey-eyebrow">

            <span>06</span>

            <i />

            <span>Journey</span>

          </div>


          <div className="journey-heading">

            <h2>
              Still
              <br />
              <em>building.</em>
            </h2>


            <div className="journey-intro">

              <p>
                A continuous journey through development,
                design, experimentation and personal projects.
              </p>


              <div className="journey-live">

                <span />

                <span>
                  CURRENTLY EXPLORING
                </span>

              </div>

            </div>

          </div>

        </motion.header>


        {/* =================================
            JOURNEY MAP
        ================================= */}

        <div className="journey-map">

          {/* PATH */}

          <svg
            className="journey-path"
            viewBox="0 0 1000 1250"
            preserveAspectRatio="none"
          >

            <motion.path
              d="
                M500 35
                C300 110 300 170 500 245
                C700 320 700 390 500 465
                C300 540 300 610 500 685
                C700 760 700 830 500 905
                C300 980 300 1050 500 1220
              "

              fill="none"

              stroke="currentColor"

              strokeWidth="1"

              strokeDasharray="5 8"

              initial={{
                pathLength: 0,
                opacity: 0,
              }}

              whileInView={{
                pathLength: 1,
                opacity: 0.22,
              }}

              viewport={{
                once: true,
                amount: 0.1,
              }}

              transition={{
                duration: 2.2,
                ease: 'easeInOut',
              }}
            />

          </svg>


          {/* =================================
              JOURNEY ITEMS
          ================================= */}

          <div className="journey-items">

            {journey.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.article
                  key={item.id}

                  className={`journey-item ${
                    index % 2 === 0
                      ? 'journey-left'
                      : 'journey-right'
                  }`}

                  variants={cardVariants}

                  initial="hidden"

                  whileInView="visible"

                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}

                  transition={{
                    delay:
                      index * 0.08,
                  }}
                >

                  {/* NODE */}

                  <div className="journey-node">

                    <span>
                      {item.id}
                    </span>

                    <div>
                      <CircleDot
                        size={14}
                        strokeWidth={1.3}
                      />
                    </div>

                  </div>


                  {/* CARD */}

                  <motion.div
                    className="journey-card"

                    whileHover={{
                      y: -8,
                      transition: {
                        duration: 0.35,
                      },
                    }}
                  >

                    <div className="journey-card-top">

                      <span className="journey-phase">
                        {item.phase}
                      </span>


                      <div className="journey-icon">

                        <Icon
                          size={20}
                          strokeWidth={1.3}
                        />

                      </div>

                    </div>


                    <h3>
                      {item.title}
                    </h3>


                    <p className="journey-description">
                      {item.description}
                    </p>


                    {/* FOCUS */}

                    <div className="journey-focus">

                      <span>
                        FOCUS
                      </span>

                      <p>
                        {item.focus}
                      </p>

                    </div>


                    {/* SKILLS */}

                    <div className="journey-skills">

                      {item.skills.map(
                        (skill) => (

                          <span key={skill}>
                            {skill}
                          </span>

                        )
                      )}

                    </div>


                    {/* FOOTER */}

                    <div className="journey-card-footer">

                      <span>
                        {item.id} / 06
                      </span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.3}
                      />

                    </div>

                  </motion.div>

                </motion.article>
              );
            })}

          </div>


          {/* MOVING POINT */}

          <motion.div
            className="journey-moving-point"

            animate={{
              y: [
                0,
                200,
                400,
                600,
                800,
                1000,
                1200,
              ],
            }}

            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

        </div>
      </div>
    </section>
  );
}