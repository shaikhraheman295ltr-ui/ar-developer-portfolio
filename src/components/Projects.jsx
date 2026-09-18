import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers3,
  Sparkles,
} from 'lucide-react';

import stockdzImage from '../assets/builder.webp';
import portfolioImage from '../assets/portfolio .webp';
import arPaintsImage from '../assets/AR paints.webp';
import gameDashboardImage from '../assets/Game Dashboard Design.webp';
import watchEcomImage from '../assets/watch e-comrece .webp';
import shoeEcomImage from '../assets/e-comerce shoe.webp';
import weatherImage from '../assets/Weather Forecast Dashboard.webp';
import newsAnalyzerImage from '../assets/news analyzer .webp';

import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'Builder',
    subtitle: 'Web Application',
    year: '2026',
    image: stockdzImage,
    link: 'https://aureon-hafz4jrou-luffy6.vercel.app/',

    intro:
      'A modern web application built with a clean interface and smooth interactions.',

    description:
      'Builder focuses on creating a clean and functional experience with modern frontend technologies, responsive layouts and thoughtful design.',

    role: 'Frontend Development',

    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'Responsive Design',
    ],

    points: [
      'Clean interface',
      'Responsive layouts',
      'Interactive components',
      'Modern frontend',
    ],
  },

  {
    id: '02',
    title: 'AR Paints',
    subtitle: 'Augmented Reality Experience',
    year: '2026',
    image: arPaintsImage,
    link: 'https://ar-paint-psi.vercel.app/',

    intro:
      'An augmented reality painting experience that blends digital creativity with real-world interaction.',

    description:
      'AR Paints explores the intersection of technology and art, creating an immersive augmented reality experience for creative expression.',

    role: 'Frontend Development · AR',

    technologies: [
      'JavaScript',
      'AR Technologies',
      'Web APIs',
      'Creative Coding',
    ],

    points: [
      'Augmented reality',
      'Real-time interaction',
      'Creative tools',
      'Immersive experience',
    ],
  },

  {
    id: '03',
    title: 'Nexus Dashboard',
    subtitle: 'Game Dashboard Design',
    year: '2026',
    image: gameDashboardImage,
    link: 'https://nexus-dashboard-tr52.vercel.app/',

    intro:
      'A game dashboard design focused on data visualization, clean layouts and intuitive navigation.',

    description:
      'Nexus Dashboard combines visual hierarchy with data-driven design to create a polished and functional game dashboard experience.',

    role: 'UI / UX · Frontend Development',

    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'Data Visualization',
    ],

    points: [
      'Data visualization',
      'Clean dashboard layout',
      'Interactive elements',
      'Responsive design',
    ],
  },

  {
    id: '04',
    title: 'Tempus',
    subtitle: 'Watch E-Commerce',
    year: '2026',
    image: watchEcomImage,
    link: 'https://tempus-gold.vercel.app/',

    intro:
      'A premium e-commerce experience designed for watch enthusiasts with a focus on product presentation.',

    description:
      'Tempus creates a sophisticated shopping experience with elegant product displays, smooth interactions and a refined visual identity.',

    role: 'UI / UX · Frontend Development',

    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'E-Commerce',
    ],

    points: [
      'Product-focused interface',
      'Elegant visual design',
      'Smooth interactions',
      'Responsive experience',
    ],
  },

  {
    id: '05',
    title: 'KickForge',
    subtitle: 'Shoe E-Commerce',
    year: '2026',
    image: shoeEcomImage,
    link: 'https://kickforge-xi.vercel.app/',

    intro:
      'A modern shoe e-commerce platform built around clean product discovery and seamless shopping.',

    description:
      'KickForge delivers a product-first shopping experience with bold visuals, clear navigation and responsive layouts designed for conversion.',

    role: 'Frontend Development · UI Design',

    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'E-Commerce',
    ],

    points: [
      'Bold product showcase',
      'Shopping cart flow',
      'Responsive layouts',
      'Clean visual hierarchy',
    ],
  },

  {
    id: '06',
    title: 'Forecast',
    subtitle: 'Weather Dashboard',
    year: '2026',
    image: weatherImage,
    link: 'https://forecast-steel-theta.vercel.app/',

    intro:
      'A weather forecast dashboard with real-time data, clean visualization and an intuitive interface.',

    description:
      'Forecast presents weather data through a clear and functional dashboard with smooth interactions, data visualization and responsive design.',

    role: 'Frontend Development · Data Visualization',

    technologies: [
      'React',
      'JavaScript',
      'Weather API',
      'CSS',
    ],

    points: [
      'Real-time weather data',
      'Data visualization',
      'Clean dashboard UI',
      'Responsive design',
    ],
  },

  {
    id: '07',
    title: 'News Analyzer',
    subtitle: 'News Analysis Platform',
    year: '2026',
    image: newsAnalyzerImage,
    link: 'https://news-website-luffy6.vercel.app/',

    intro:
      'A news analysis platform that presents information with clarity, structure and meaningful insights.',

    description:
      'News Analyzer combines content presentation with analytical tools to deliver a clean and informative news reading experience.',

    role: 'Frontend Development · Data',

    technologies: [
      'React',
      'JavaScript',
      'API Integration',
      'CSS',
    ],

    points: [
      'News aggregation',
      'Content analysis',
      'Clean reading interface',
      'Responsive layout',
    ],
  },

  {
    id: '08',
    title: 'Portfolio',
    subtitle: 'Personal Digital Experience',
    year: '2026',
    image: portfolioImage,
    link: '#',

    intro:
      'A personal digital space combining development, visual identity, interaction and motion.',

    description:
      'The portfolio was designed as more than a traditional website. The goal is to create an immersive experience where typography, whitespace, motion and content work together.',

    role: 'Creative Development · UI / UX',

    technologies: [
      'React',
      'Framer Motion',
      'Vite',
      'CSS',
    ],

    points: [
      'Editorial visual direction',
      'Motion-based interactions',
      'Responsive experience',
      'Minimal design system',
    ],
  },
];

const pageVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? 100 : -100,
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    transformOrigin: direction > 0 ? 'left center' : 'right center',
  }),

  center: {
    rotateY: 0,
    opacity: 1,
    x: 0,
    transformOrigin: 'center center',
  },

  exit: (direction) => ({
    rotateY: direction > 0 ? -100 : 100,
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    transformOrigin: direction > 0 ? 'right center' : 'left center',
  }),
};

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const project = projects[current];

  const nextProject = () => {
    setDirection(1);

    setCurrent((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const previousProject = () => {
    setDirection(-1);

    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goToProject = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') previousProject();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [current]);

  return (
    <section className="projects-book" id="projects">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="book-glow book-glow-one" />
      <div className="book-glow book-glow-two" />

      <div className="projects-book-container">

        {/* =========================
            HEADER
        ========================= */}

        <motion.header
          className="book-header"

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
            amount: 0.3,
          }}

          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="book-kicker">

            <span>04</span>

            <i />

            <span>Selected Work</span>

          </div>


          <div className="book-heading">

            <h2>
              My
              <br />
              <em>projects.</em>
            </h2>


            <p>
              Turn the pages and explore a selection
              of digital experiences, interfaces and
              interactive experiments.
            </p>

          </div>

        </motion.header>


        {/* =========================
            BOOK
        ========================= */}

        <div className="book-stage">

          {/* Book shadow */}

          <div className="book-shadow" />


          {/* LEFT PAGE */}
          <div className="book-static-page left-page">

            <div className="page-inner">

              <div className="page-top">

                <span>
                  AR / WORK
                </span>

                <span>
                  {project.year}
                </span>

              </div>


              <div className="left-page-content">

                <span className="page-number">
                  {project.id}
                </span>


                <h3>
                  {project.title}
                </h3>


                <span className="page-subtitle">
                  {project.subtitle}
                </span>


                <div className="page-rule" />


                <p>
                  {project.intro}
                </p>

              </div>


              <div className="left-page-footer">

                <span>
                  DIGITAL PROJECT
                </span>

                <span>
                  {project.id} / 0{projects.length}
                </span>

              </div>

            </div>

          </div>


          {/* RIGHT PAGE / ANIMATED */}
          <div className="book-page-wrapper">

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="sync"
            >

              <motion.div
                key={project.id}
                className="book-turn-page"

                custom={direction}

                variants={pageVariants}

                initial="enter"

                animate="center"

                exit="exit"

                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* IMAGE */}

                <div className="book-image-page">

                  <div className="image-page-top">

                    <span>
                      {project.subtitle}
                    </span>

                    <span>
                      {project.id}
                    </span>

                  </div>


                  <div className="book-image-wrap">

                    <motion.img
                      src={project.image}
                      alt={project.title}

                      initial={{
                        scale: 1.08,
                      }}

                      animate={{
                        scale: 1,
                      }}

                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <div className="image-paper-overlay" />

                  </div>


                  <div className="image-page-bottom">

                    <span>
                      {project.title}
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.2}
                    />

                  </div>

                </div>


                {/* INFO PAGE */}

                <div className="book-info-page">

                  <div className="info-page-top">

                    <div>

                      <span>
                        CASE STUDY
                      </span>

                      <h3>
                        {project.title}
                      </h3>

                    </div>


                    <div className="info-year">
                      {project.year}
                    </div>

                  </div>


                  <p className="project-book-description">
                    {project.description}
                  </p>


                  {/* ROLE */}

                  <div className="book-info-row">

                    <div className="book-info-icon">
                      <Layers3
                        size={15}
                        strokeWidth={1.3}
                      />
                    </div>

                    <div>

                      <span>
                        ROLE
                      </span>

                      <strong>
                        {project.role}
                      </strong>

                    </div>

                  </div>


                  {/* WHAT I DID */}

                  <div className="book-section">

                    <div className="book-section-title">

                      <Code2
                        size={14}
                        strokeWidth={1.3}
                      />

                      <span>
                        WHAT I WORKED ON
                      </span>

                    </div>


                    <div className="book-points">

                      {project.points.map(
                        (point, index) => (

                          <motion.div
                            key={point}

                            className="book-point"

                            initial={{
                              opacity: 0,
                              x: -15,
                            }}

                            animate={{
                              opacity: 1,
                              x: 0,
                            }}

                            transition={{
                              delay:
                                0.3 +
                                index * 0.08,

                              duration: 0.4,
                            }}
                          >

                            <span>
                              0{index + 1}
                            </span>

                            {point}

                          </motion.div>

                        )
                      )}

                    </div>

                  </div>


                  {/* TECHNOLOGIES */}

                  <div className="book-technologies">

                    <span className="tech-label">
                      TECHNOLOGIES
                    </span>


                    <div>

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </div>


                  {/* LIVE LINK */}

                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="book-live-link"
                    >
                      <ExternalLink size={15} strokeWidth={1.4} />
                      <span>View Live Project</span>
                      <ArrowUpRight size={15} />
                    </a>
                  )}


                  {/* PAGE FOOTER */}

                  <div className="info-page-footer">

                    <div className="digital-label">

                      <Sparkles
                        size={13}
                        strokeWidth={1.3}
                      />

                      DIGITAL EXPERIENCE

                    </div>


                    <a href="#contact">

                      Let's talk

                      <ArrowUpRight
                        size={15}
                      />

                    </a>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>


          {/* BOOK CENTER */}

          <div className="book-spine" />

        </div>


        {/* =========================
            CONTROLS
        ========================= */}

        <div className="book-controls">

          <button
            type="button"
            onClick={previousProject}
            aria-label="Previous project"
            className="cursor-target"
          >

            <ArrowLeft size={18} />

          </button>


          <div className="book-progress">

            <div className="progress-numbers">

              <span>
                {String(current + 1).padStart(2, '0')}
              </span>

              <i />

              <span>
                {String(projects.length).padStart(2, '0')}
              </span>

            </div>


            <div className="progress-track">

              <motion.div
                className="progress-fill"

                animate={{
                  width: `${
                    ((current + 1) /
                      projects.length) *
                    100
                  }%`,
                }}

                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                }}
              />

            </div>

          </div>


          <button
            type="button"
            onClick={nextProject}
            aria-label="Next project"
            className="cursor-target"
          >

            <ArrowRight size={18} />

          </button>

        </div>


        {/* =========================
            PROJECT DOTS
        ========================= */}

        <div className="book-projects-nav">

          {projects.map((item, index) => (

            <button
              key={item.id}
              type="button"
              className={
                current === index
                  ? 'active cursor-target'
                  : 'cursor-target'
              }
              onClick={() =>
                goToProject(index)
              }
            >

              <span>
                {item.id}
              </span>

              <strong>
                {item.title}
              </strong>

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}