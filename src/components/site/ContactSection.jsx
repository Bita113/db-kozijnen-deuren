import React from 'react';
import { useLanguage } from '../LanguageContext';
import { MessageCircle, Facebook, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/a36982a27_ac1d4308-55ab-4171-990d-766c012ef989.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide uppercase mb-4">
            {t.contact.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.a
            href="https://wa.me/40785570289"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col items-center text-center p-10 rounded-2xl bg-emerald-50 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-500 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-emerald-500/25">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {t.contact.whatsappTitle}
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              {t.contact.whatsappDesc}
            </p>
            <p className="text-sm font-mono font-medium text-slate-700 mb-5">
              +40 785 570 289
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white font-semibold rounded-xl group-hover:bg-emerald-600 transition-colors text-sm">
              <MessageCircle className="w-4 h-4" />
              {t.contact.whatsappButton}
            </div>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/darius.budeic"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group flex flex-col items-center text-center p-10 rounded-2xl bg-blue-50 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-600/25">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {t.contact.facebookTitle}
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              {t.contact.facebookDesc}
            </p>
            <p className="text-sm font-medium text-slate-700 mb-5">
              /darius.budeic
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl group-hover:bg-blue-700 transition-colors text-sm">
              <Facebook className="w-4 h-4" />
              {t.contact.facebookButton}
            </div>
          </motion.a>
        </div>

        {/* Info Notes */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{t.contact.note}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>{t.contact.noData}</span>
          </div>
        </div>
      </div>
    </section>
  );
}