import { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsTouch(mediaQuery.matches);

    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onHover = () => setHovering(true);
    const onLeave = () => setHovering(false);

    document.querySelectorAll('a, button, .project-card, .service-card, .skill-card').forEach((element) => {
      element.addEventListener('mouseenter', onHover);
      element.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('pointermove', onMove);

    return () => {
      document.querySelectorAll('a, button, .project-card, .service-card, .skill-card').forEach((element) => {
        element.removeEventListener('mouseenter', onHover);
        element.removeEventListener('mouseleave', onLeave);
      });
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        className={`cursor ${hovering ? 'cursor--hover' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        aria-hidden="true"
      />
      <div
        className={`cursor-follower ${hovering ? 'cursor-follower--hover' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        aria-hidden="true"
      />
    </>
  );
}
