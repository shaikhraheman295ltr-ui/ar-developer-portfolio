import { useEffect, useState } from 'react';
import './Intro.css';
import introVideo from '../assets/v1.mp4';

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        skipIntro();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const skipIntro = () => {
    if (isLeaving) return;
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 800);
  };

  const handleVideoEnd = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 800);
  };

  if (!isVisible) return null;

  return (
    <div className={`intro ${isLeaving ? 'intro-leaving' : ''}`}>
      <video
        className="intro-video"
        src={introVideo}
        autoPlay
        muted
        playsInline
        preload="metadata"
        onEnded={handleVideoEnd}
      />
      <button
        className="intro-skip"
        onClick={skipIntro}
        aria-label="Skip intro"
      >
        Skip
      </button>
    </div>
  );
}
