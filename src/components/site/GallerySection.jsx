import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';

export default function GallerySection() {
  const { t } = useLanguage();

  const images = [
    {
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/0a68836ca_unnamed.jpg",
      alt: "Professional window installation and measurement"
    },
    {
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/a36982a27_ac1d4308-55ab-4171-990d-766c012ef989.jpg",
      alt: "DB Kozijnen & Deuren branding"
    },
    {
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/08ca785f6_unnamed-4.jpg",
      alt: "Our work - window and door installations"
    }
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide uppercase mb-4">
            {t.language === 'en' ? 'Our Work' : 'Ons Werk'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {t.language === 'en' ? 'Professional Results' : 'Professionele Resultaten'}
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            {t.language === 'en' 
              ? 'See our craftsmanship and attention to detail in every project'
              : 'Bekijk ons vakmanschap en aandacht voor detail in elk project'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}