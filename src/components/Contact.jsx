import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { portfolio } from '../data/portfolio';

import './Contact.css';

const WEB3_ACCESS_KEY = 'ba7f0029-52c0-41a6-9726-941c9c8c8443';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const project = form.project.value;
    const message = form.message.value.trim();
    if (!name || !email || !message) return;

    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3_ACCESS_KEY,
          name,
          email,
          project,
          message,
          subject: `Project Inquiry from ${name}`,
          from_name: 'AR Developer Portfolio',
        }),
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrap">

        {/* HEADER */}
        <motion.div
          className="contact-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="contact-eyebrow">
            <span className="contact-dot" />
            GET IN TOUCH
          </div>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            Whether you have an idea, a website that needs a refresh,
            or a digital experience you want to build from scratch,
            let's talk about it.
          </p>
        </motion.div>

        <div className="contact-shell">

          {/* LEFT */}
          <motion.div
            className="contact-details"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <div className="contact-intro">
              <span className="contact-big-number">07</span>

              <div>
                <span className="contact-label">START A CONVERSATION</span>
                <h3>Let's make something meaningful.</h3>
              </div>
            </div>

            <div className="contact-links">

              <a
                href="mailto:shaikhraheman295ltr@gmail.com"
                className="contact-link cursor-target"
              >
                <span className="contact-link-icon">
                  <Mail size={19} strokeWidth={1.7} />
                </span>

                <span className="contact-link-content">
                  <small>EMAIL</small>
                  <strong>shaikhraheman295ltr@gmail.com</strong>
                </span>

                <ArrowUpRight size={19} />
              </a>

              <div className="contact-link">
                <span className="contact-link-icon">
                  <MapPin size={19} strokeWidth={1.7} />
                </span>

                <span className="contact-link-content">
                  <small>BASED IN</small>
                  <strong>Algeria · Working worldwide</strong>
                </span>
              </div>

            </div>

            <div className="contact-availability">
              <span className="availability-dot" />

              <div>
                <strong>Available for new projects</strong>
                <span>Open to interesting ideas & collaborations.</span>
              </div>
            </div>

            <div className="contact-statement">
              <Sparkles size={18} strokeWidth={1.5} />

              <span>
                Good design starts with a good conversation.
              </span>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            onSubmit={handleSubmit}
          >
            <div className="form-top">
              <span>08</span>
              <p>Tell me about your project</p>
            </div>

            <div className="form-row">

              <label>
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </label>

              <label>
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </label>

            </div>

            <label>
              <span>What are you looking to build?</span>

              <select name="project">
                <option value="">Select a project type</option>
                <option value="website">Website</option>
                <option value="web-app">Web Application</option>
                <option value="ui-ux">UI / UX Design</option>
                <option value="portfolio">Portfolio</option>
                <option value="other">Something else</option>
              </select>
            </label>

            <label>
              <span>Tell me about it</span>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me what you're building, what you need, and what you're aiming for..."
                required
              />
            </label>

            <div className="form-bottom">

              <span className="form-note">
                {status === 'sent' && '✓ Message sent successfully!'}
                {status === 'error' && 'Something went wrong. Try again.'}
                {status === 'sending' && 'Sending...'}
                {status === 'idle' && 'Usually replies within 24–48h.'}
              </span>

              <button type="submit" className="cursor-target" disabled={status === 'sending'}>
                <span>{status === 'sending' ? 'Sending...' : 'Send message'}</span>

                <span className="send-icon">
                  <Send size={17} strokeWidth={1.8} />
                </span>
              </button>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}