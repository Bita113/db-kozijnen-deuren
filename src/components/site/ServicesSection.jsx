import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Wrench, RefreshCw, Ruler, Factory, Truck, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [Wrench, RefreshCw, Ruler, Factory, Truck, Layers];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide uppercase mb-4">
            {t.services.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative p-8 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}