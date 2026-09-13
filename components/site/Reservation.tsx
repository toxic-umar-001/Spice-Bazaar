'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, User, Phone, MessageSquare, Send } from 'lucide-react';
import { RESTAURANT } from '@/lib/constants';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*Reservation Request — Spice Bazaar*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Guests:* ${formData.guests}%0A*Special Request:* ${formData.specialRequest || 'None'}`;

    window.open(
      `https://wa.me/${RESTAURANT.whatsapp}?text=${message}`,
      '_blank'
    );

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    'w-full bg-transparent border-b border-ivory-500/20 text-ivory-50 placeholder-ivory-200/40 text-base py-3 px-0 focus:outline-none focus:border-gold-400 transition-colors';

  return (
    <section
      id="reservation"
      className="relative py-20 lg:py-32 bg-charcoal-950 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/18813258/pexels-photo-18813258.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950" />
      </div>
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold-400 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Reservations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ivory-50 leading-tight">
            Reserve Your Table
          </h2>
          <p className="text-ivory-200/60 text-lg mt-4 italic">
            Make your next gathering a memorable one.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-px bg-gold-400/50" />
            <span className="w-2 h-2 rotate-45 bg-gold-400/50" />
            <span className="w-12 h-px bg-gold-400/50" />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-charcoal-900/60 backdrop-blur-sm border border-gold-500/15 p-6 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Full Name */}
            <div className="relative">
              <label className="block text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-200/30" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-ivory-500/20 text-ivory-50 placeholder-ivory-200/40 text-base py-3 pl-7 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-200/30" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full bg-transparent border-b border-ivory-500/20 text-ivory-50 placeholder-ivory-200/40 text-base py-3 pl-7 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            {/* Date */}
            <div className="relative">
              <label className="block text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-2">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-200/30" />
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-transparent border-b border-ivory-500/20 text-ivory-50 text-base py-3 pl-7 focus:outline-none focus:border-gold-400 transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Time */}
            <div className="relative">
              <label className="block text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-2">
                Time
              </label>
              <div className="relative">
                <Clock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-200/30" />
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-transparent border-b border-ivory-500/20 text-ivory-50 text-base py-3 pl-7 focus:outline-none focus:border-gold-400 transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative sm:col-span-2">
              <label className="block text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-2">
                Number of Guests
              </label>
              <div className="relative">
                <Users className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-200/30" />
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-transparent border-b border-ivory-500/20 text-ivory-50 text-base py-3 pl-7 focus:outline-none focus:border-gold-400 transition-colors [color-scheme:dark]"
                >
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((n) => (
                    <option key={n} value={n} className="bg-charcoal-900 text-ivory-50">
                      {n} {n === '1' ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div className="relative sm:col-span-2">
              <label className="block text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-2">
                Special Request
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-0 top-4 w-4 h-4 text-ivory-200/30" />
                <textarea
                  rows={3}
                  value={formData.specialRequest}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequest: e.target.value })
                  }
                  placeholder="Any special requirements or preferences..."
                  className="w-full bg-transparent border-b border-ivory-500/20 text-ivory-50 placeholder-ivory-200/40 text-base py-3 pl-7 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-burgundy-500 hover:bg-burgundy-400 text-ivory-50 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-burgundy-500/40"
            >
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              Request Reservation
            </button>
            <p className="text-ivory-200/40 text-xs mt-4">
              Your request will be sent via WhatsApp to Spice Bazaar. The
              restaurant will confirm availability directly.
            </p>
          </div>

          {/* Success message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 border border-gold-400/30 bg-gold-500/10 text-gold-300 text-sm text-center"
            >
              Opening WhatsApp with your reservation details...
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
