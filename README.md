# AR Developer — Portfolio

A modern, interactive developer portfolio built with React, Framer Motion, and Vite. Dark matte black theme with lime accents and wine maroon highlights. Featuring smooth animations, a custom target cursor, book-style project carousel, and a fully responsive design.

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

- Dark matte black theme (`#1A1A1A`) with lime (`#C8E64A`) accents
- Typewriter role animation in the hero section
- Mouse parallax on hero image
- Book-style project carousel with page-turn animations
- Custom target cursor with spin and hover effects
- Scroll progress indicator
- Animated intro video splash screen
- Fully responsive with mobile menu (tested 320px–1440px)
- 8 project showcases with live demo links
- Compressed WebP images & optimized video for fast loading
- Code-split bundles (GSAP & Framer Motion separated)
- SEO meta tags with Open Graph support
- Accessibility: skip-to-content link, form validation, reduced-motion support
- All touch targets ≥ 44px (WCAG 2.5.8)
- Safe area insets for notch devices

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
npx oxlint
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
├── index.css                 # Global styles & CSS variables
├── data/
│   └── portfolio.js          # Portfolio data
├── assets/                   # Images & videos (WebP + compressed MP4)
└── components/
    ├── Navbar.jsx            # Navigation with hamburger menu
    ├── Hero.jsx              # Hero section with typewriter
    ├── About.jsx             # About section with video
    ├── Skills.jsx            # Skills marquee
    ├── Services.jsx          # Services cards (6 categories)
    ├── Projects.jsx          # Book-style project carousel (8 projects)
    ├── Highlights.jsx        # Creative map
    ├── Experience.jsx        # Journey timeline (6 phases)
    ├── Contact.jsx           # Contact form (mailto:)
    ├── Footer.jsx            # Footer with links
    ├── Intro.jsx             # Splash screen with video
    ├── ScrollProgress.jsx    # Scroll indicator
    ├── TargetCursor.jsx      # Custom GSAP cursor
    └── SectionTitle.jsx      # Reusable title component
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background | Matte Black | `#1A1A1A` |
| Surface | Dark Gray | `#242424` |
| Primary Text | Off-White | `#F5F5F5` |
| Accent | Lime | `#C8E64A` |
| Secondary | Wine Maroon | `#722F37` |
| Muted Text | Light Gray | `#aaa` |
| Borders | Subtle White | `rgba(255,255,255,0.06)` |

## Deployment

This project is deployed on [Vercel](https://vercel.com). To deploy your own:

1. Fork or clone this repository
2. Push to your GitHub account
3. Import the repository on [Vercel](https://vercel.com/new)
4. Vercel will auto-detect Vite and deploy

## License

MIT
