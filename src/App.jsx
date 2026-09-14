import { portfolio } from './data/portfolio';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import TargetCursor from './components/TargetCursor';

export default function App() {
  return (
    <>
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <ScrollProgress />
      <Intro />
      <Navbar items={portfolio.nav} />
      <main>
        <Hero profile={portfolio} />
        <About profile={portfolio} />
        <Skills skills={portfolio.skills} />
        <Services services={portfolio.services} />
        <Projects />
        <Highlights highlights={portfolio.highlights} />
        <Experience />
        <Contact profile={portfolio} />
      </main>
      <Footer brand={portfolio.name} nav={portfolio.nav} socialLinks={portfolio.socialLinks} />
    </>
  );
}
