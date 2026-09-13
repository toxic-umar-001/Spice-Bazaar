'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { RESTAURANT, REVIEW_THEMES } from '@/lib/constants';

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-20 lg:py-32 bg-ivory-50 overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full rounded-full border-2 border-burgundy-500" />
      </div>
      <div className="absolute bottom-20 right-10 w-48 h-48 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full rounded-full border-2 border-gold-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-burgundy-500 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Social Proof
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal-800 leading-tight">
            Loved by Lahore
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold-500/50" />
            <span className="w-2 h-2 rotate-45 bg-gold-500/50" />
            <span className="w-12 h-px bg-gold-500/50" />
          </div>
        </motion.div>

        {/* Rating display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                className={cn(
                  'w-8 h-8',
                  n <= 4 ? 'text-gold-500 fill-gold-500' : 'text-gold-500/40 fill-gold-500/40'
                )}
              />
            ))}
          </div>
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="font-serif text-5xl lg:text-6xl font-semibold text-charcoal-800">
              {RESTAURANT.rating}
            </span>
            <span className="font-serif text-2xl text-charcoal-400">/ 5</span>
          </div>
          <p className="text-charcoal-500 text-lg">
            <span className="font-semibold text-burgundy-500">
              {RESTAURANT.reviewCount}
            </span>{' '}
            Reviews
          </p>
          <p className="text-charcoal-400 text-sm italic mt-3">
            Trusted by thousands of diners in Lahore.
          </p>
        </motion.div>

        {/* Review themes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-center text-charcoal-400 text-xs font-medium tracking-[0.2em] uppercase mb-6">
            What Diners Love About Us
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {REVIEW_THEMES.map((theme, i) => (
              <motion.span
                key={theme}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="px-5 py-2.5 bg-ivory-100 border border-charcoal-200 text-charcoal-600 text-sm font-medium hover:border-burgundy-300 hover:text-burgundy-500 transition-colors cursor-default"
              >
                {theme}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Read more reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={RESTAURANT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-burgundy-500/40 text-burgundy-500 hover:bg-burgundy-500/5 text-sm font-medium tracking-wide uppercase transition-all duration-300"
          >
            Read More Reviews
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
