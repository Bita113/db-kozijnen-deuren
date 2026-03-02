import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const categoryLabels = {
  kozijnen: 'Kozijnen',
  deuren: 'Deuren',
  renovatie: 'Renovatie',
  overig: 'Overig',
};

const categoryColors = {
  kozijnen: 'bg-orange-500/90',
  deuren: 'bg-blue-500/90',
  renovatie: 'bg-emerald-500/90',
  overig: 'bg-slate-500/90',
};

function LightboxModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-900 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img src={project.image_url} alt={project.title} className="w-full max-h-[55vh] object-cover" />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              {project.category && (
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${categoryColors[project.category] || 'bg-slate-500/90'}`}>
                  {categoryLabels[project.category] || project.category}
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              {project.location && (
                <p className="text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  {project.location}
                </p>
              )}
              {project.description && (
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">{project.description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProjectsShowcase() {
  const { t, language } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    base44.entities.Project.list('-created_date', 20).then(setProjects);
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  if (projects.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide uppercase mb-3">
              {t.language === 'nl' ? 'Onze Werken' : 'Our Works'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {t.language === 'nl' ? 'Recent Afgeronde Projecten' : 'Recently Completed Projects'}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50 flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50 flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll strip */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(project)}
              className="snap-start shrink-0 w-64 sm:w-72 cursor-pointer group"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {project.category && (
                  <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white ${categoryColors[project.category] || 'bg-slate-500/90'}`}>
                    {categoryLabels[project.category] || project.category}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm leading-snug">{project.title}</p>
                  {project.location && (
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-orange-300" />
                      <span className="text-xs text-slate-300">{project.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <LightboxModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}