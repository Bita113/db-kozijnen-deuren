import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Award, MapPin, Handshake, HardHat, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [Award, MapPin, Handshake, HardHat, MessageSquare];

export default function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/0a68836ca_unnamed.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Subtle gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-semibold tracking-wide uppercase mb-4">
            {t.whyUs.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className={`group p-8 rounded-2xl border border-white/5 hover:border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 ${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}