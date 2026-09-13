'use client';

import { motion } from 'framer-motion';
import { INTERIOR_IMAGES } from '@/lib/constants';

export default function Interior() {
  return (
    <section
      id="interior"
      className="relative py-20 lg:py-32 bg-ivory-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-burgundy-500 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            The Atmosphere
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal-800 leading-tight">
            Step Into Spice Bazaar
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold-500/50" />
            <span className="w-2 h-2 rotate-45 bg-gold-500/50" />
            <span className="w-12 h-px bg-gold-500/50" />
          </div>
        </motion.div>

        {/* Interior grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {INTERIOR_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={cn(
                'relative overflow-hidden group',
                i === 0 && 'col-span-2 lg:col-span-2 row-span-2 aspect-square lg:aspect-auto lg:h-full',
                i === 1 && 'aspect-square',
                i === 2 && 'aspect-square',
                i === 3 && 'col-span-2 lg:col-span-1 aspect-[2/1] lg:aspect-square'
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-950/10 transition-opacity duration-500 group-hover:bg-charcoal-950/30" />
              <div className="absolute inset-0 border border-gold-500/0 transition-colors duration-500 group-hover:border-gold-500/40 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Atmosphere note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center mt-12"
        >
          <p className="text-charcoal-500 text-base lg:text-lg leading-relaxed italic">
            Warm lighting, elegant seating, and Pakistani-inspired décor create
            a dining atmosphere that is both refined and welcoming. The walls
            of Spice Bazaar also feature photographs of famous cricket and
            hockey personalities, adding a touch of local sporting heritage to
            the experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
