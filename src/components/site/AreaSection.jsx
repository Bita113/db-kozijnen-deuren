import React from 'react';
import { useLanguage } from '../LanguageContext';
import { MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AreaSection() {
  const { t } = useLanguage();

  return (
    <section id="area" className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide uppercase mb-4">
              {t.area.sectionLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              {t.area.title}
            </h2>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              {t.area.subtitle}
            </p>

            {/* Location Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {t.area.locations.map((location, index) => (
                <motion.span
                  key={location}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-700 font-medium shadow-sm"
                >
                  <MapPin className="w-3 h-3 text-orange-500" />
                  {location}
                </motion.span>
              ))}
            </div>

            <p className="mt-8 text-slate-500 text-sm">{t.area.cta}</p>
            <a
              href="https://wa.me/40785570289"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp →
            </a>
          </div>

          {/* Right - Map-like Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1585211969224-3e992bc25a9b?w=800&q=80"
                alt="Rotterdam map"
                className="w-full h-full object-cover opacity-20"
              />
              {/* Stylized map representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pulsing center point */}
                  <div className="w-32 h-32 rounded-full bg-orange-500/10 flex items-center justify-center animate-pulse">
                    <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-orange-500/40 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>
                  </div>
                  {/* Surrounding location dots */}
                  {[
                    { top: '-40px', left: '60px' },
                    { top: '0px', left: '-50px' },
                    { top: '60px', left: '70px' },
                    { top: '-30px', left: '-30px' },
                    { top: '50px', left: '-40px' },
                    { top: '-10px', right: '-40px' },
                    { bottom: '-30px', left: '10px' },
                  ].map((style, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-orange-400/60"
                      style={style}
                    />
                  ))}
                </div>
              </div>

              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{t.area.badge}</p>
                      <p className="text-xs text-slate-500">{t.area.locations.length}+ {t.area.sectionLabel.toLowerCase()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}