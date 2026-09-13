'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT, HERO_IMAGES } from '@/lib/constants';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-charcoal-900"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HERO_IMAGES.primary}
          alt={HERO_IMAGES.primaryAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-charcoal-950/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-3 text-gold-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-gold-400/50" />
            {RESTAURANT.eyebrow}
            <span className="w-8 h-px bg-gold-400/50" />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold text-ivory-50 leading-none tracking-tight"
        >
          SPICE BAZAAR
        </motion.h1>

        {/* Urdu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-urdu text-3xl sm:text-4xl lg:text-5xl text-gold-400 mt-4 mb-6"
        >
          سپائیس بازار
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-xl sm:text-2xl lg:text-3xl text-ivory-100 italic font-light mb-4"
        >
          {RESTAURANT.tagline}
        </motion.p>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-xl text-ivory-200/80 text-base sm:text-lg leading-relaxed mb-8 text-pretty"
        >
          {RESTAURANT.supportingText}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a
            href="#reservation"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-burgundy-500 hover:bg-burgundy-400 text-ivory-50 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-burgundy-500/40"
          >
            Reserve a Table
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#menu"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-400/50 text-gold-300 hover:bg-gold-500/10 text-sm font-medium tracking-wide uppercase transition-all duration-300"
          >
            <UtensilsCrossed className="w-4 h-4" />
            Explore Menu
          </a>
        </motion.div>

        {/* Location indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center gap-2 text-ivory-200/60 text-sm tracking-wide"
        >
          <MapPin className="w-4 h-4 text-gold-400" />
          {RESTAURANT.locationShort}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-gold-400/0 via-gold-400/50 to-gold-400/0"
        />
      </motion.div>
    </section>
  );
}
