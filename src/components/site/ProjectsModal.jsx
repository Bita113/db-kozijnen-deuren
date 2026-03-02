import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

const categoryLabels = {
  kozijnen: 'Kozijnen',
  deuren: 'Deuren',
  renovatie: 'Renovatie',
  overig: 'Overig',
};

export default function ProjectsModal({ isOpen, onClose }) {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (isOpen) {
      base44.entities.Project.list('-created_date').then(setProjects);
    }
  }, [isOpen]);

  const categories = ['all', ...new Set(projects.map(p => p.category).filter(Boolean))];
  const filtered = activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-950 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <h2 className="text-xl font-bold text-white">Lucrările Noastre</h2>
                <p className="text-sm text-slate-400">{projects.length} proiecte finalizate</p>
              </div>
              <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Filters */}
            {categories.length > 1 && (
              <div className="px-6 py-3 border-b border-white/5 flex gap-2 overflow-x-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-orange-500 text-white'
                        : 'bg-white/10 text-slate-300 hover:bg-white/15'
                    }`}
                  >
                    {cat === 'all' ? 'Toate' : categoryLabels[cat] || cat}
                  </button>
                ))}
              </div>
            )}

            {/* Grid */}
            <div className="overflow-y-auto flex-1 p-6">
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-slate-500">Nu există lucrări în această categorie.</div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {filtered.map(project => (
                    <motion.div
                      key={project.id}
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer rounded-xl overflow-hidden bg-slate-900 group"
                      onClick={() => setSelected(project)}
                    >
                      <div className="relative h-40 sm:h-48">
                        <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-white font-semibold text-sm leading-tight">{project.title}</p>
                          {project.location && (
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3 text-orange-400" />
                              <span className="text-xs text-slate-300">{project.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4"
                onClick={() => setSelected(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden"
                  onClick={e => e.stopPropagation()}
                >
                  <img src={selected.image_url} alt={selected.title} className="w-full max-h-[60vh] object-cover" />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">{selected.title}</h3>
                    {selected.location && <p className="text-sm text-slate-400 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" />{selected.location}</p>}
                    {selected.description && <p className="text-sm text-slate-300 mt-3">{selected.description}</p>}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}