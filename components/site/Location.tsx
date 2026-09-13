'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation, Clock } from 'lucide-react';
import { RESTAURANT } from '@/lib/constants';

export default function Location() {
  return (
    <section
      id="contact"
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
            Visit Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal-800 leading-tight">
            Find Spice Bazaar
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold-500/50" />
            <span className="w-2 h-2 rotate-45 bg-gold-500/50" />
            <span className="w-12 h-px bg-gold-500/50" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Map + info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            {/* Map embed */}
            <div className="relative w-full h-64 lg:h-80 overflow-hidden border border-charcoal-200">
              <iframe
                title="Spice Bazaar location map"
                src="https://www.google.com/maps?q=Spice+Bazaar+Tipu+Road+MM+Alam+Road+Gulberg+Lahore&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address */}
            <div className="mt-6 p-6 bg-ivory-100 border border-charcoal-200">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-burgundy-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-charcoal-700 font-medium text-sm leading-relaxed">
                    {RESTAURANT.address.line1}
                  </p>
                  <p className="text-charcoal-700 font-medium text-sm leading-relaxed">
                    {RESTAURANT.address.line2}
                  </p>
                  <p className="text-charcoal-700 font-medium text-sm leading-relaxed">
                    {RESTAURANT.address.city}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 pt-4 border-t border-charcoal-200">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <div>
                  <p className="text-charcoal-700 font-medium text-sm">
                    {RESTAURANT.hours}
                  </p>
                  <p className="text-charcoal-400 text-xs italic mt-0.5">
                    {RESTAURANT.hoursNote}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-3xl font-semibold text-charcoal-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-charcoal-500 text-base leading-relaxed mb-8">
              Located on Tipu Road, just off MM Alam Road in Gulberg 2, Spice
              Bazaar is easily accessible in the heart of Lahore's dining
              district.
            </p>

            {/* Action buttons */}
            <div className="space-y-4">
              <a
                href={RESTAURANT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-burgundy-500 hover:bg-burgundy-400 text-ivory-50 transition-all duration-300 hover:shadow-xl hover:shadow-burgundy-500/20"
              >
                <Navigation className="w-6 h-6 text-gold-300" />
                <div className="flex-1">
                  <div className="text-sm font-medium tracking-wide uppercase">
                    Get Directions
                  </div>
                  <div className="text-xs text-ivory-200/70 mt-0.5">
                    Open in Google Maps
                  </div>
                </div>
                <span className="text-gold-300 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="group flex items-center gap-4 p-5 bg-ivory-100 hover:bg-ivory-200 border border-charcoal-200 text-charcoal-700 transition-all duration-300"
              >
                <Phone className="w-6 h-6 text-burgundy-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium tracking-wide uppercase">
                    Call Restaurant
                  </div>
                  <div className="text-xs text-charcoal-400 mt-0.5">
                    {RESTAURANT.phone}
                  </div>
                </div>
                <span className="text-burgundy-500 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-ivory-100 hover:bg-ivory-200 border border-charcoal-200 text-charcoal-700 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 text-gold-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium tracking-wide uppercase">
                    WhatsApp
                  </div>
                  <div className="text-xs text-charcoal-400 mt-0.5">
                    Message us directly
                  </div>
                </div>
                <span className="text-gold-500 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <a
                href={RESTAURANT.foodpandaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-charcoal-800 hover:bg-charcoal-700 text-ivory-50 transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center text-gold-400 font-serif text-lg font-bold">
                  O
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium tracking-wide uppercase">
                    Order Online
                  </div>
                  <div className="text-xs text-ivory-200/60 mt-0.5">
                    Available on Foodpanda
                  </div>
                </div>
                <span className="text-gold-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
