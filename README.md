# AR Developer — Portfolio

A modern, interactive developer portfolio built with React, Framer Motion, and Vite. Featuring smooth animations, a custom target cursor, book-style project carousel, and a fully responsive design.

## Live Demo

**[View Live Portfolio](https://prt-theta.vercel.app/)**

## Tech Stack

- **React 19** — UI library
- **Vite 8** — Build tool & dev server
- **Framer Motion** — Animations & transitions
- **GSAP** — Custom cursor animations
- **Lucide React** — Icons
- **Simple Icons** — Technology brand icons
- **OxLint** — Linting

## Features

- Typewriter role animation in the hero section
- Mouse parallax on hero image
- Book-style project carousel with page-turn animations
- Custom target cursor with spin and hover effects
- Scroll progress indicator
- Animated intro video splash screen
- Fully responsive with mobile menu
- 8 project showcases with live demo links
- Compressed WebP images & optimized video for fast loading
- Code-split bundles (GSAP & Framer Motion separated)
- SEO meta tags with Open Graph support
- Accessibility: skip-to-content link, form validation, reduced-motion support

## Performance

| Asset | Before | After | Reduction |
|-------|--------|-------|-----------|
| Intro video (v1) | 3.6 MB | 1.0 MB | 70% |
| About video (v2) | 3.1 MB | 0.9 MB | 68% |
| Hero image | 1.3 MB (PNG) | 32 KB (WebP) | 98% |
| Project images | 1.5 MB | 280 KB | 81% |
| Main JS bundle | 519 KB | 318 KB | 39% |
| **Total first load** | **~10.4 MB** | **~2.9 MB** | **72%** |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Projects Included

| Project | Description | Live Link |
|---------|-------------|-----------|
| Builder | Web Application | [Live](https://aureon-hafz4jrou-luffy6.vercel.app/) |
| AR Paints | Augmented Reality Experience | [Live](https://ar-paint-psi.vercel.app/) |
| Nexus Dashboard | Game Dashboard Design | [Live](https://nexus-dashboard-tr52.vercel.app/) |
| Tempus | Watch E-Commerce | [Live](https://tempus-gold.vercel.app/) |
| KickForge | Shoe E-Commerce | [Live](https://kickforge-xi.vercel.app/) |
| Forecast | Weather Dashboard | [Live](https://forecast-steel-theta.vercel.app/) |
| News Analyzer | News Analysis Platform | [Live](https://news-website-luffy6.vercel.app/) |

## Project Structure

```
src/
├── main.jsx                  # React root
├── App.jsx                   # Root component
├── index.css                 # Global styles
├── data/
│   └── portfolio.js          # Portfolio data
├── assets/                   # Images & videos (WebP + compressed MP4)
└── components/
    ├── Navbar.jsx            # Navigation
    ├── Hero.jsx              # Hero section
    ├── About.jsx             # About section
    ├── Skills.jsx            # Skills marquee
    ├── Services.jsx          # Services cards
    ├── Projects.jsx          # Project carousel
    ├── Highlights.jsx        # Creative map
    ├── Experience.jsx        # Journey timeline
    ├── Contact.jsx           # Contact form
    ├── Footer.jsx            # Footer
    ├── Intro.jsx             # Splash screen
    ├── ScrollProgress.jsx    # Scroll indicator
    ├── TargetCursor.jsx      # Custom cursor
    └── SectionTitle.jsx      # Reusable title
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). To deploy your own:

1. Fork or clone this repository
2. Push to your GitHub account
3. Import the repository on [Vercel](https://vercel.com/new)
4. Vercel will auto-detect Vite and deploy

## License

MIT
