import { ArrowUpRight, AtSign, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span>&copy; 2026 AR Developer</span>

      <div className="footer-socials">
        <a href="mailto:contact@ardeveloper.com" aria-label="Email">
          <AtSign size={16} />
        </a>

        <a href="https://wa.me/" aria-label="Messages" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={16} />
        </a>

        <a href="#home" aria-label="Back to top">
          <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}