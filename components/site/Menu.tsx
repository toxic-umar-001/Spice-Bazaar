'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('Popular');

  return (
    <section id="menu" className="relative py-20 lg:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-burgundy-500 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            The Menu
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal-800 leading-tight">
            A Taste of Pakistan
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold-500/50" />
            <span className="w-2 h-2 rotate-45 bg-gold-500/50" />
            <span className="w-12 h-px bg-gold-500/50" />
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-4 py-2.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 border',
                activeCategory === category
                  ? 'bg-burgundy-500 text-ivory-50 border-burgundy-500'
                  : 'bg-transparent text-charcoal-500 border-charcoal-200 hover:border-burgundy-300 hover:text-burgundy-500'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2">
              {MENU_ITEMS[activeCategory]?.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-baseline gap-4 py-4 border-b border-charcoal-200/60 hover:border-burgundy-300 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-lg lg:text-xl font-medium text-charcoal-800 group-hover:text-burgundy-500 transition-colors">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-charcoal-400 mt-1 italic">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {/* Dotted leader */}
                  <div className="flex-1 border-b border-dotted border-charcoal-300/40 self-end mb-2 min-w-[20px]" />
                </motion.div>
              ))}
            </div>

            {(!MENU_ITEMS[activeCategory] ||
              MENU_ITEMS[activeCategory].length === 0) && (
              <div className="text-center py-12">
                <p className="text-charcoal-400 italic">
                  Please contact the restaurant for the full selection in this
                  category.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Explore full menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-charcoal-400 text-sm mb-4 italic">
            Prices and full details available on our complete menu.
          </p>
          <a
            href={RESTAURANT.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-burgundy-500 hover:bg-burgundy-400 text-ivory-50 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:shadow-xl hover:shadow-burgundy-500/30"
          >
            Explore Full Menu
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
