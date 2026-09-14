import { ArrowUpRight, AtSign, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 AR Developer</span>

      <div className="footer-socials">
        <a href="#" aria-label="Email">
          <AtSign size={16} />
        </a>

        <a href="#" aria-label="Messages">
          <MessageCircle size={16} />
        </a>

        <a href="#" aria-label="Portfolio link">
          <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}