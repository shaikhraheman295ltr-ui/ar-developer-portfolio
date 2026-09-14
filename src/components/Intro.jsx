import { useEffect, useState } from 'react';
import './Intro.css';
import introVideo from '../assets/v1.mp4';

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Prevent scrolling while intro is visible
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleVideoEnd = () => {
    // Start fade-out animation
    setIsLeaving(true);

    // Wait for the fade animation to finish
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
        preload="auto"
        onEnded={handleVideoEnd}
      />
    </div>
  );
}
