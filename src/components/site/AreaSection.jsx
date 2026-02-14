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
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ 
                    delay: index * 0.03, 
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
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
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-slate-900 overflow-hidden relative">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/ee4d24b24_IMG_6781.jpg"
                alt="Rotterdam kaart"
                className="w-full h-full object-cover"
              />

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