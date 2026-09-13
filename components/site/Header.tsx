'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, RESTAURANT } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-charcoal-900/95 backdrop-blur-md shadow-2xl py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex flex-col leading-none group">
              <span
                className={cn(
                  'font-serif text-2xl lg:text-3xl font-semibold tracking-wide transition-colors duration-300',
                  scrolled ? 'text-ivory-100' : 'text-ivory-50'
                )}
              >
                Spice Bazaar
              </span>
              <span
                className={cn(
                  'font-urdu text-sm mt-0.5 transition-colors duration-300',
                  scrolled ? 'text-gold-400' : 'text-gold-300'
                )}
              >
                سپائیس بازار
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative group',
                    scrolled
                      ? 'text-ivory-200 hover:text-gold-400'
                      : 'text-ivory-100/90 hover:text-gold-300'
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className={cn(
                  'hidden sm:flex items-center gap-2 text-sm font-medium transition-colors duration-300',
                  scrolled
                    ? 'text-ivory-200 hover:text-gold-400'
                    : 'text-ivory-100/90 hover:text-gold-300'
                )}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Call</span>
              </a>
              <a
                href="#reservation"
                className="hidden sm:inline-flex items-center px-6 py-2.5 bg-burgundy-500 hover:bg-burgundy-400 text-ivory-50 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:shadow-burgundy-500/30"
              >
                Reserve a Table
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'lg:hidden p-2 transition-colors duration-300',
                  scrolled ? 'text-ivory-100' : 'text-ivory-50'
                )}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-charcoal-950/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-charcoal-900 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gold-500/20">
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-2xl font-semibold text-ivory-50">
                    Spice Bazaar
                  </span>
                  <span className="font-urdu text-sm text-gold-400 mt-0.5">
                    سپائیس بازار
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-ivory-200 hover:text-gold-400 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col px-6 py-8 gap-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="py-4 text-xl font-serif text-ivory-100 border-b border-ivory-500/10 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-6 py-6 border-t border-gold-500/20 space-y-3">
                <a
                  href="#reservation"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3.5 bg-burgundy-500 hover:bg-burgundy-400 text-ivory-50 text-sm font-medium tracking-wide uppercase transition-colors"
                >
                  Reserve a Table
                </a>
                <a
                  href={`tel:${RESTAURANT.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-gold-500/40 text-gold-300 text-sm font-medium tracking-wide uppercase hover:bg-gold-500/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
