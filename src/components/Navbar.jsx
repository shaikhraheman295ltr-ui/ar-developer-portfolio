import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import './Navbar.css';

export default function Navbar({ items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  /* =====================================================
     SCROLL
  ===================================================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionMap = {
        home: 'hero',
        about: 'about',
        skills: 'skills',
        services: 'services',
        projects: 'projects',
        contact: 'contact',
      };

      const sections = items
        .map((item) =>
          document.getElementById(sectionMap[item.toLowerCase()] || item.toLowerCase())
        )
        .filter(Boolean);

      let current = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150) {
          current = section.id;
        }
      });

      setActive(current);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [items]);

  /* =====================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? 'hidden'
      : '';

    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  /* =====================================================
     NAV CLICK
  ===================================================== */

  const handleNavClick = (item) => {
    setActive(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <header
      className={`
        site-header
        ${scrolled ? 'site-header--scrolled' : ''}
        ${isOpen ? 'site-header--open' : ''}
      `}
    >

      <a href="#hero" className="skip-link">Skip to content</a>

      <nav
        className="nav container"
        aria-label="Main navigation"
      >

        {/* =================================================
            BRAND
        ================================================= */}

        <a
          className="brand cursor-target"
          href="#home"
          aria-label="Go to home"
          onClick={() => setIsOpen(false)}
        >

          <motion.span
            className="brand-mark"
            whileHover={{
              rotate: 90,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.92,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            AR
          </motion.span>

          <span className="brand-name">
            AR
          </span>

        </a>


        {/* =================================================
            DESKTOP NAV
        ================================================= */}

        <div className="nav-desktop">

          <div className="nav-links">

            {items.map((item, index) => {
              const id = item.toLowerCase();

              const isActive =
                active === id;

              return (
                <motion.a
                  key={item}
                  href={`#${id}`}
                  className={`
                    nav-link cursor-target
                    ${isActive
                      ? 'nav-link--active'
                      : ''}
                  `}
                  onClick={() =>
                    handleNavClick(item)
                  }

                  initial={{
                    opacity: 0,
                    y: -12,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: 0.08 * index,
                    duration: 0.5,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >

                  <span className="nav-link-number">
                    0{index + 1}
                  </span>

                  <span>
                    {item}
                  </span>

                  <span className="nav-link-dot" />

                </motion.a>
              );
            })}

          </div>


          {/* =================================================
              CTA
          ================================================= */}

          <motion.a
            href="#contact"
            className="nav-cta cursor-target"

            whileHover={{
              y: -2,
            }}

            whileTap={{
              scale: 0.97,
            }}
          >

            <span>
              Let’s talk
            </span>

            <span className="nav-cta-icon">
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
              />
            </span>

          </motion.a>

        </div>


        {/* =================================================
            MOBILE BUTTON
        ================================================= */}

          <motion.button
            type="button"
            className="menu-button cursor-target"

          aria-label={
            isOpen
              ? 'Close menu'
              : 'Open menu'
          }

          aria-expanded={isOpen}

          onClick={() =>
            setIsOpen((state) => !state)
          }

          whileTap={{
            scale: 0.9,
          }}
        >

          <AnimatePresence
            mode="wait"
            initial={false}
          >

            {isOpen ? (

              <motion.span
                key="close"

                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.7,
                }}

                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}

                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.7,
                }}
              >
                <X size={20} />
              </motion.span>

            ) : (

              <motion.span
                key="menu"

                initial={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.7,
                }}

                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}

                exit={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.7,
                }}
              >
                <Menu size={20} />
              </motion.span>

            )}

          </AnimatePresence>

        </motion.button>

      </nav>


      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            className="mobile-menu"

            initial={{
              clipPath:
                'inset(0 0 100% 0)',
            }}

            animate={{
              clipPath:
                'inset(0 0 0% 0)',
            }}

            exit={{
              clipPath:
                'inset(0 0 100% 0)',
            }}

            transition={{
              duration: 0.65,
              ease: [
                0.76,
                0,
                0.24,
                1,
              ],
            }}
          >

            <div className="mobile-menu__inner">

              {/* TOP */}

              <div className="mobile-menu__top">

                <span>
                  MENU
                </span>

                <span>
                  NAVIGATION
                </span>

              </div>


              {/* LINKS */}

              <div className="mobile-links">

                {items.map((item, index) => (

                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="mobile-link cursor-target"

                    onClick={() =>
                      handleNavClick(item)
                    }

                    initial={{
                      opacity: 0,
                      y: 35,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      delay:
                        0.15 +
                        index * 0.08,

                      duration: 0.55,

                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                  >

                    <span className="mobile-link-number">
                      0{index + 1}
                    </span>

                    <span className="mobile-link-title">
                      {item}
                    </span>

                    <ArrowUpRight
                      className="mobile-link-arrow"
                      size={22}
                      strokeWidth={1.5}
                    />

                  </motion.a>

                ))}

              </div>


              {/* CTA */}

              <motion.a
                href="#contact"
                className="mobile-cta cursor-target"

                onClick={() =>
                  setIsOpen(false)
                }

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay:
                    0.15 +
                    items.length * 0.08,

                  duration: 0.6,
                }}
              >

                <span>
                  Start a conversation
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                />

              </motion.a>


              {/* FOOTER */}

              <div className="mobile-menu__footer">

                <span>
                  AR — DEVELOPER
                </span>

                <span>
                  DESIGN · CODE · MOTION
                </span>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}