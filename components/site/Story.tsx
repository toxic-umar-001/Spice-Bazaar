'use client';

import { motion } from 'framer-motion';
import { STORY_IMAGES } from '@/lib/constants';

export default function Story() {
  return (
    <section id="story" className="relative py-20 lg:py-32 bg-ivory-50 overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full rounded-full border-[3px] border-burgundy-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={STORY_IMAGES.main}
                alt={STORY_IMAGES.mainAlt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Small supporting image - overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block absolute -bottom-12 -right-8 w-48 h-64 overflow-hidden shadow-2xl border-4 border-ivory-50"
            >
              <img
                src={STORY_IMAGES.supporting}
                alt={STORY_IMAGES.supportingAlt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:pl-8"
          >
            <span className="inline-block text-burgundy-500 text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal-800 leading-tight mb-6">
              Where Tradition Meets Taste
            </h2>
            <div className="w-16 h-px bg-gold-500 mb-6" />
            <div className="space-y-4 text-charcoal-600 text-base lg:text-lg leading-relaxed">
              <p>
                Spice Bazaar was born from a passion for the rich culinary
                heritage of Pakistan. In the heart of Gulberg, Lahore, we bring
                together the time-honoured recipes of the subcontinent and
                present them with a contemporary touch.
              </p>
              <p>
                Every dish tells a story — of spice markets bustling with
                aroma, of family kitchens where recipes are passed down through
                generations, and of a culture that treats every guest as
                family. Our chefs honour these traditions while presenting
                each plate with a refined, modern sensibility.
              </p>
              <p>
                Whether it is an intimate dinner, a family celebration, or a
                special occasion, Spice Bazaar offers a warm and elegant setting
                where every meal becomes a memorable experience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-charcoal-200">
              <div>
                <div className="font-serif text-3xl font-semibold text-burgundy-500">
                  4.3
                </div>
                <div className="text-xs text-charcoal-400 uppercase tracking-wide mt-1">
                  Google Rating
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl font-semibold text-burgundy-500">
                  16k+
                </div>
                <div className="text-xs text-charcoal-400 uppercase tracking-wide mt-1">
                  Reviews
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl font-semibold text-burgundy-500">
                  2
                </div>
                <div className="text-xs text-charcoal-400 uppercase tracking-wide mt-1">
                  Services
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
