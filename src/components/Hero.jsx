import { useEffect, useRef, useState, useCallback } from 'react';

import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MoveDown,
} from 'lucide-react';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

import './Hero.css';

import heroImageOne from '../assets/m.webp';
import heroImageTwo from '../assets/hero.webp';

const roles = [
  'Frontend Developer',
  'UI/UX Developer',
  'React Developer',
  'Creative Coder',
];

export default function Hero({ profile }) {
  const heroRef = useRef(null);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const [imageHovered, setImageHovered] = useState(false);

  /* =====================================================
     TYPEWRITER
  ===================================================== */

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!isDeleting) {
      if (displayedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(
            currentRole.slice(
              0,
              displayedRole.length + 1
            )
          );
        }, 75);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(
            displayedRole.slice(0, -1)
          );
        }, 42);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);

          setRoleIndex(
            (current) =>
              (current + 1) % roles.length
          );
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedRole,
    isDeleting,
    roleIndex,
  ]);

  /* =====================================================
     MOUSE PARALLAX
  ===================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const imageX = useTransform(
    smoothX,
    [-1, 1],
    [-10, 10]
  );

  const imageY = useTransform(
    smoothY,
    [-1, 1],
    [-8, 8]
  );

  const decorX = useTransform(
    smoothX,
    [-1, 1],
    [8, -8]
  );

  const decorY = useTransform(
    smoothY,
    [-1, 1],
    [6, -6]
  );

  /* =====================================================
     HERO MOUSE
  ===================================================== */

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const handleMouseMove = (event) => {
      const rect =
        element.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width;

      const y =
        (event.clientY - rect.top) /
        rect.height;

      mouseX.set((x - 0.5) * 2);
      mouseY.set((y - 0.5) * 2);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    element.addEventListener(
      'mousemove',
      handleMouseMove
    );

    element.addEventListener(
      'mouseleave',
      handleMouseLeave
    );

    return () => {
      element.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      element.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
    };
  }, [mouseX, mouseY]);

  /* =====================================================
     SCROLL TO PROJECTS
  ===================================================== */

  const scrollToProjects = useCallback((event) => {
    event.preventDefault();

    document
      .querySelector('#projects')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }, []);

  /* =====================================================
     SCROLL TO CONTACT
  ===================================================== */

  const scrollToContact = useCallback((event) => {
    event.preventDefault();

    document
      .querySelector('#contact')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }, []);

  /* =====================================================
     RETURN
  ===================================================== */

  return (
    <section
      ref={heroRef}
      className="hero"
      id="hero"
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="hero-bg-grid" />

      <div
        className="
          hero-bg-glow
          hero-bg-glow--one
        "
      />

      <div
        className="
          hero-bg-glow
          hero-bg-glow--two
        "
      />

      {/* =================================================
          DECORATIVE COORDINATES
      ================================================= */}

      <motion.div
        className="
          hero-coordinate
          hero-coordinate--top
        "
        style={{
          x: decorX,
          y: decorY,
        }}
      >
        36°45'N
        <br />
        3°03'E
      </motion.div>

      <motion.div
        className="
          hero-coordinate
          hero-coordinate--bottom
        "
        style={{
          x: decorX,
          y: decorY,
        }}
      >
        DIGITAL / 01
      </motion.div>

      {/* =================================================
          HERO INNER
      ================================================= */}

      <div className="hero-inner container">

        {/* =================================================
            LEFT / COPY
        ================================================= */}

        <div className="hero-copy">

          {/* EYEBROW */}

          <motion.div
            className="hero-eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <span className="eyebrow-line" />

            <span>
              Hi, I am AR.
            </span>
          </motion.div>

          {/* =================================================
              TITLE
          ================================================= */}

          <motion.h1
            className="hero-title"
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >

            {/* NAME */}

            <span className="hero-name">
              AR
            </span>

            {/* =================================================
                TYPEWRITER ROLE
            ================================================= */}

            <span
              className="
                hero-title-line
                hero-role-container
              "
            >
              <span className="hero-role">

                {displayedRole}

                <motion.span
                  className="hero-role-cursor"
                  animate={{
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

              </span>
            </span>

          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: 'easeOut',
            }}
          >
            I build clean, interactive and responsive
            digital experiences with a focus on
            thoughtful design and meaningful interactions.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: 'easeOut',
            }}
          >

            {/* VIEW PROJECTS */}

            <a
              href="#projects"
              className="
                hero-button
                hero-button--primary
                cursor-target
              "
              onClick={scrollToProjects}
            >
              <span>
                View projects
              </span>

              <span className="hero-button-icon">
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                />
              </span>
            </a>

            {/* START PROJECT */}

            <a
              href="#contact"
              className="
                hero-button
                hero-button--secondary
                cursor-target
              "
              onClick={scrollToContact}
            >
              <span>
                Start a project
              </span>

              <span className="hero-button-icon">
                <ArrowDownRight
                  size={18}
                  strokeWidth={1.8}
                />
              </span>
            </a>

          </motion.div>

          {/* =================================================
              META
          ================================================= */}

          <motion.div
            className="hero-meta"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.75,
              ease: 'easeOut',
            }}
          >

            {/* LOCATION */}

            <div className="hero-meta-item">

              <div className="hero-meta-icon">
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                />
              </div>

              <div>

                <span>
                  Based in
                </span>

                <strong>
                  {profile?.location || 'Algeria'}
                </strong>

              </div>

            </div>

            {/* DIVIDER */}

            <div className="hero-meta-divider" />

            {/* CONTACT */}

            <div className="hero-meta-item">

              <div className="hero-meta-icon">
                <Mail
                  size={15}
                  strokeWidth={1.5}
                />
              </div>

              <div>

                <span>
                  Contact
                </span>

                <a
                  href={profile?.email ? `mailto:${profile.email}` : '#contact'}
                >
                  {profile?.email || 'Let\'s talk'}
                </a>

              </div>

            </div>

          </motion.div>

        </div>

        {/* =================================================
            RIGHT / VISUAL
        ================================================= */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.35,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >

          {/* =================================================
              IMAGE INTERACTION
          ================================================= */}

          <motion.div
            className={`
              hero-image-wrap
              ${
                imageHovered
                  ? 'hero-image-wrap--hover'
                  : ''
              }
            `}
            style={{
              x: imageX,
              y: imageY,
            }}
            onMouseEnter={() =>
              setImageHovered(true)
            }
            onMouseLeave={() =>
              setImageHovered(false)
            }
          >

            <div className="hero-image-frame">

              {/* =================================================
                  IMAGE 1
                  DEFAULT = hero1.jpg
              ================================================= */}

              <motion.img
                className="
                  hero-image
                  hero-image--first
                "
                src={heroImageOne}
                alt="AR"
                animate={{
                  opacity:
                    imageHovered
                      ? 0
                      : 1,

                  scale:
                    imageHovered
                      ? 0.97
                      : 1,

                  filter:
                    imageHovered
                      ? 'blur(5px)'
                      : 'blur(0px)',
                }}
                transition={{
                  duration: 0.65,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}
              />

              {/* =================================================
                  IMAGE 2
                  HOVER = hero.png
              ================================================= */}

              <motion.img
                className="
                  hero-image
                  hero-image--second
                "
                src={heroImageTwo}
                alt="AR alternate"
                initial={{
                  opacity: 0,
                  scale: 1.08,
                  filter: 'blur(12px)',
                }}
                animate={{
                  opacity:
                    imageHovered
                      ? 1
                      : 0,

                  scale:
                    imageHovered
                      ? 1
                      : 1.08,

                  filter:
                    imageHovered
                      ? 'blur(0px)'
                      : 'blur(12px)',
                }}
                transition={{
                  duration: 0.9,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}
              />

              {/* =================================================
                  SOFT REVEAL
              ================================================= */}

              <motion.div
                className="hero-image-reveal"
                animate={{
                  opacity:
                    imageHovered
                      ? [0, 0.8, 0]
                      : 0,

                  scale:
                    imageHovered
                      ? [0.7, 1.15, 1]
                      : 0.7,
                }}
                transition={{
                  duration: 0.9,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              />

              {/* =================================================
                  LIGHT SWEEP
              ================================================= */}

              <motion.div
                className="hero-image-light"
                animate={{
                  x:
                    imageHovered
                      ? ['-120%', '120%']
                      : '-120%',

                  opacity:
                    imageHovered
                      ? [0, 0.35, 0]
                      : 0,
                }}
                transition={{
                  duration: 1,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}
              />

              {/* =================================================
                  OVERLAY
              ================================================= */}

              <div className="hero-image-overlay" />

              {/* =================================================
                  NUMBER
              ================================================= */}

              <motion.div
                className="hero-image-number"
                animate={{
                  opacity:
                    imageHovered
                      ? 0.45
                      : 1,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                01
              </motion.div>

              {/* =================================================
                  IMAGE LABEL
              ================================================= */}

              <motion.div
                className="hero-image-label"
                animate={{
                  opacity:
                    imageHovered
                      ? 0.65
                      : 1,

                  y:
                    imageHovered
                      ? 4
                      : 0,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <span />

                CREATIVE / DIGITAL
              </motion.div>

            </div>

          </motion.div>

          {/* =================================================
              OUTLINE
          ================================================= */}

          <motion.div
            className="hero-outline"
            style={{
              x: decorX,
              y: decorY,
            }}
          />

          {/* =================================================
              TOP FLOATING CARD
          ================================================= */}

          <motion.div
            className="
              hero-floating
              hero-floating--top
            "
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -7, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: 1,
              },

              x: {
                duration: 0.7,
                delay: 1,
              },

              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >

            <span>
              Current role
            </span>

            <strong>
              {roles[roleIndex]}
            </strong>

          </motion.div>

          {/* =================================================
              BOTTOM FLOATING CARD
          ================================================= */}

          <motion.div
            className="
              hero-floating
              hero-floating--bottom
            "
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 7, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: 1.15,
              },

              x: {
                duration: 0.7,
                delay: 1.15,
              },

              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >

            <span>
              Building
            </span>

            <strong>
              Digital experiences.
            </strong>

          </motion.div>

          {/* =================================================
              CORNERS
          ================================================= */}

          <div
            className="
              hero-corner
              hero-corner--tl
            "
          />

          <div
            className="
              hero-corner
              hero-corner--br
            "
          />

        </motion.div>

      </div>

      {/* =================================================
          SCROLL
      ================================================= */}

      <motion.a
        href="#about"
        className="hero-scroll cursor-target"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.4,
          duration: 0.8,
        }}
      >

        <span>
          Scroll to explore
        </span>

        <span className="hero-scroll-line">
          <span />
        </span>

        <MoveDown
          size={15}
          strokeWidth={1.5}
        />

      </motion.a>

    </section>
  );
}