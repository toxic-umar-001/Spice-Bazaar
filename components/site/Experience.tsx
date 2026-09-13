'use client';

import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/lib/constants';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 lg:py-32 bg-charcoal-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            The Experience
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ivory-50 leading-tight">
            More Than a Meal
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold-400/50" />
            <span className="w-2 h-2 rotate-45 bg-gold-400/50" />
            <span className="w-12 h-px bg-gold-400/50" />
          </div>
        </motion.div>

        {/* Experience cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative h-80 lg:h-96 overflow-hidden"
            >
              {/* Image */}
              <img
                src={exp.image}
                alt={exp.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent transition-opacity duration-500 group-hover:from-charcoal-950/95" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                {/* Number */}
                <span className="absolute top-6 right-6 font-serif text-5xl font-semibold text-gold-400/30 group-hover:text-gold-400/60 transition-colors">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-ivory-50 mb-2">
                  {exp.title}
                </h3>
                <p className="text-ivory-200/70 text-sm leading-relaxed max-w-[200px]">
                  {exp.description}
                </p>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-gold-400/0 transition-colors duration-500 group-hover:border-gold-400/30 pointer-events-none" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
