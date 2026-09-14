import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Globe2,
  Monitor,
  Smartphone,
  BrainCircuit,
  Sparkles,
  ServerCog,
} from 'lucide-react';
import './Services.css';

const services = [
  {
    id: '01',
    title: 'Web Development',
    short: 'Modern websites & web apps',
    description:
      'Responsive and modern web experiences built with clean architecture, smooth interactions, strong performance, and a polished user experience.',
    features: [
      'Responsive UI / UX',
      'React & modern frontend',
      'Interactive animations',
      'Performance optimization',
      'API integration',
    ],
    icon: Globe2,
    tag: 'WEB',
  },
  {
    id: '02',
    title: 'Desktop Apps',
    short: 'Powerful desktop applications',
    description:
      'Desktop applications designed for productivity, automation, data management, and practical workflows with a clean and intuitive interface.',
    features: [
      'Desktop interfaces',
      'Data management',
      'Automation workflows',
      'Local applications',
      'Clean user experience',
    ],
    icon: Monitor,
    tag: 'DESKTOP',
  },
  {
    id: '03',
    title: 'Mobile Development',
    short: 'Apps built for mobile',
    description:
      'Mobile-first experiences focused on usability, fluid navigation, responsive layouts, and interfaces that feel natural on smaller screens.',
    features: [
      'Mobile-first UI',
      'Smooth navigation',
      'Responsive layouts',
      'API connectivity',
      'Modern app experiences',
    ],
    icon: Smartphone,
    tag: 'MOBILE',
  },
  {
    id: '04',
    title: 'AI & Data Solutions',
    short: 'Data, automation & intelligence',
    description:
      'Practical AI and data solutions combining Python, data analysis, machine learning, and intelligent workflows to turn data into useful results.',
    features: [
      'Python & data analysis',
      'NumPy & Pandas',
      'Machine learning',
      'AI experiments',
      'Data visualization',
    ],
    icon: BrainCircuit,
    tag: 'AI / DATA',
  },
  {
    id: '05',
    title: 'UI / UX Design',
    short: 'Interfaces with purpose',
    description:
      'Clean and thoughtful interfaces where visual hierarchy, usability, interaction, and consistency come together to create better digital products.',
    features: [
      'Interface design',
      'UX structure',
      'Design systems',
      'Visual hierarchy',
      'Interaction design',
    ],
    icon: Sparkles,
    tag: 'DESIGN',
  },
  {
    id: '06',
    title: 'Backend & APIs',
    short: 'Logic, APIs & data systems',
    description:
      'Reliable backend foundations for connecting applications, handling data, building APIs, and creating scalable digital experiences.',
    features: [
      'REST APIs',
      'Server-side logic',
      'Database integration',
      'Authentication',
      'Frontend connectivity',
    ],
    icon: ServerCog,
    tag: 'BACKEND',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: 8,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section className="services-3d" id="services">
      <div className="services-orb orb-one" />
      <div className="services-orb orb-two" />

      <div className="services-container">

        {/* HEADER */}
        <motion.div
          className="services-hero"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="services-kicker">
            <span className="kicker-number">03</span>
            <span className="kicker-line" />
            <span>Services</span>
          </div>

          <div className="services-title-area">
            <div>
              <h2>
                What I
                <br />
                <span>can build.</span>
              </h2>
            </div>

            <div className="services-intro">
              <p>
                Digital experiences built around clean technology,
                thoughtful design, and smooth interaction.
              </p>

              <div className="services-status">
                <span className="status-dot" />
                <span>BUILDING DIGITAL EXPERIENCES</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="services-grid-3d"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                className={`service-3d-card ${
                  index === 0 ? 'featured-card' : ''
                }`}
                variants={cardVariants}
                whileHover={{
                  y: -14,
                  rotateX: 3,
                  rotateY: index % 2 === 0 ? -3 : 3,
                  transition: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Card glow */}
                <div className="card-glow" />

                {/* Top */}
                <div className="card-top">
                  <span className="card-number">
                    {service.id}
                  </span>

                  <div className="card-tag">
                    {service.tag}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  className="service-icon"
                  whileHover={{
                    rotate: -8,
                    scale: 1.08,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Icon size={30} strokeWidth={1.4} />
                </motion.div>

                {/* Content */}
                <div className="card-content">
                  <span className="card-short">
                    {service.short}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                {/* Features */}
                <div className="card-features">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      className="feature-item"
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.15 + featureIndex * 0.06,
                        duration: 0.45,
                      }}
                    >
                      <span className="feature-check">+</span>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom */}
                <div className="card-bottom">
                  <span>Explore service</span>

                  <motion.div
                    className="card-arrow"
                    whileHover={{
                      x: 5,
                      y: -5,
                      rotate: 45,
                    }}
                  >
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </div>

                {/* 3D edge */}
                <div className="card-edge" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}