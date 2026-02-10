import React from 'react';
import { useLanguage } from '../LanguageContext';
import { X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrivacyModal({ isOpen, onClose }) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-2xl sm:w-full sm:max-h-[80vh] z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1a3b5c] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{t.privacy.title}</h2>
                  <p className="text-xs text-slate-400">{t.privacy.lastUpdated}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-6 space-y-8 flex-1">
              {t.privacy.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                    {index + 1}. {section.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-[#1a3b5c] text-white text-sm font-semibold rounded-xl hover:bg-[#0f2942] transition-colors"
              >
                {t.nav.services ? 'Close' : 'Sluiten'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}