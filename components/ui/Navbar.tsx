'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#work', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div
          className={`nav-glass rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'shadow-[0_12px_32px_rgba(50,45,41,0.08)]' : ''
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            aria-label="Aditya Portfolio Home"
            className="font-serif text-2xl font-semibold text-[#322D29] tracking-tight hover:text-[#72383D] transition-colors"
          >
            Aditya<span className="text-[#72383D]">.</span>
          </a>

          {/* Navigation Links */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-sm font-medium text-[#322D29]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#72383D] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-1"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#EFE9E1]" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#322D29] hover:text-[#72383D]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 luxury-card p-6 flex flex-col gap-4 bg-[#EFE9E1]"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif font-medium text-[#322D29] hover:text-[#72383D] flex items-center justify-between border-b border-[#AC9C8D]/20 pb-2"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#72383D]">→</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
