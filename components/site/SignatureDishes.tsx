'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SIGNATURE_DISHES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const spanClasses: Record<string, string> = {
  tall: 'lg:row-span-2 aspect-[3/4]',
  wide: 'lg:col-span-2 aspect-[16/9]',
  normal: 'aspect-square',
};

export default function SignatureDishes() {
  return (
    <section
      id="dishes"
      className="relative py-20 lg:py-32 bg-charcoal-900 overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Signature Selection
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ivory-50 leading-tight">
            From Our Bazaar
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold-400/50" />
            <span className="w-2 h-2 rotate-45 bg-gold-400/50" />
            <span className="w-12 h-px bg-gold-400/50" />
          </div>
        </motion.div>

        {/* Dish grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-auto">
          {SIGNATURE_DISHES.map((dish, i) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className={cn(
                'group relative overflow-hidden bg-charcoal-800',
                spanClasses[dish.span] || spanClasses.normal
              )}
            >
              {/* Image */}
              <img
                src={dish.image}
                alt={dish.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent transition-opacity duration-500 group-hover:from-charcoal-950/95" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-charcoal-950/60 backdrop-blur-sm text-gold-300 text-[10px] font-medium tracking-[0.2em] uppercase border border-gold-400/20">
                  {dish.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 z-10">
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ivory-50 leading-tight mb-1">
                  {dish.name}
                </h3>
                {dish.hasDescription && dish.description && (
                  <p className="text-ivory-200/70 text-sm leading-relaxed mb-2">
                    {dish.description}
                  </p>
                )}
                {dish.hasLink && (
                  <a
                    href={dish.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-medium tracking-wide uppercase mt-2 opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:text-gold-300"
                  >
                    {dish.linkLabel}
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border border-gold-400/0 transition-colors duration-500 group-hover:border-gold-400/40 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* View full menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="http://www.spicebazaar.pk/menu/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-gold-400/50 text-gold-300 hover:bg-gold-500/10 text-sm font-medium tracking-wide uppercase transition-all duration-300"
          >
            Explore Full Menu
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
