import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Star, StarOff, Upload, LogOut, Image } from 'lucide-react';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', image_url: '', category: 'kozijnen', location: '', is_featured: false });

  useEffect(() => {
    const init = async () => {
      try {
        const me = await base44.auth.me();
        if (!me || me.role !== 'admin') {
          base44.auth.redirectToLogin(window.location.href);
          return;
        }
        setUser(me);
        await loadProjects();
        setLoading(false);
      } catch {
        base44.auth.redirectToLogin(window.location.href);
      }
    };
    init();
  }, []);

  const loadProjects = async () => {
    const data = await base44.entities.Project.list('-created_date');
    setProjects(data);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm(f => ({ ...f, image_url: file_url }));
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await base44.entities.Project.create(form);
    setForm({ title: '', description: '', image_url: '', category: 'kozijnen', location: '', is_featured: false });
    setShowForm(false);
    await loadProjects();
  };

  const handleDelete = async (id) => {
    await base44.entities.Project.delete(id);
    await loadProjects();
  };

  const toggleFeatured = async (project) => {
    await base44.entities.Project.update(project.id, { is_featured: !project.is_featured });
    await loadProjects();
  };

  const categoryLabels = { kozijnen: 'Kozijnen', deuren: 'Deuren', renovatie: 'Renovatie', overig: 'Overig' };

  if (loading) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-white text-lg">Laden...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/16837212d_8051c5d1-eebb-4e8a-b2c0-71bf135047111.jpg"
            alt="Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="text-sm font-semibold text-slate-300">Admin Dashboard</span>
        </div>
        <Button variant="ghost" size="sm" onClick={() => base44.auth.logout('/')} className="text-slate-400 hover:text-white gap-2">
          <LogOut className="w-4 h-4" />
          Ieșire
        </Button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Lucrările Noastre</h1>
            <p className="text-slate-400 text-sm mt-1">{projects.length} lucrări adăugate</p>
          </div>
          <Button onClick={() => setShowForm(true)} className="bg-orange-500 hover:bg-orange-600 gap-2">
            <Plus className="w-4 h-4" />
            Adaugă Lucrare
          </Button>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-slate-500">
            <Image className="w-12 h-12 mb-4 opacity-30" />
            <p>Nu există lucrări adăugate încă.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-white/5 group">
                <div className="relative h-48">
                  <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                  {project.is_featured && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-orange-500 text-white text-xs">Featured</Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-white">{project.title}</h3>
                      {project.location && <p className="text-xs text-slate-400 mt-0.5">{project.location}</p>}
                    </div>
                    <Badge variant="outline" className="text-xs border-slate-700 text-slate-400 shrink-0">
                      {categoryLabels[project.category] || project.category}
                    </Badge>
                  </div>
                  {project.description && <p className="text-xs text-slate-500 mt-2 line-clamp-2">{project.description}</p>}
                  <div className="flex items-center gap-2 mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFeatured(project)}
                      className={`gap-1.5 text-xs ${project.is_featured ? 'text-orange-400 hover:text-orange-300' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      {project.is_featured ? <Star className="w-3.5 h-3.5 fill-current" /> : <StarOff className="w-3.5 h-3.5" />}
                      {project.is_featured ? 'Featured' : 'Setează Featured'}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-950 ml-auto gap-1.5 text-xs"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Șterge
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Project Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle>Adaugă Lucrare Nouă</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Titlu *</label>
              <Input
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                placeholder="ex: Kozijnen Rotterdam-Noord"
                required
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Fotografie *</label>
              {form.image_url ? (
                <div className="relative">
                  <img src={form.image_url} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
                  <Button type="button" variant="ghost" size="sm" onClick={() => setForm(f => ({ ...f, image_url: '' }))} className="absolute top-2 right-2 bg-black/60 text-white hover:bg-black/80">
                    Schimbă
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-slate-700 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                  {uploading ? (
                    <span className="text-slate-400 text-sm">Se încarcă...</span>
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-slate-500 mb-2" />
                      <span className="text-sm text-slate-400">Click pentru a încărca fotografia</span>
                    </>
                  )}
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-400 mb-1 block">Categorie</label>
                <Select value={form.category} onValueChange={v => setForm(f => ({ ...f, category: v }))}>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700 text-white">
                    <SelectItem value="kozijnen">Kozijnen</SelectItem>
                    <SelectItem value="deuren">Deuren</SelectItem>
                    <SelectItem value="renovatie">Renovatie</SelectItem>
                    <SelectItem value="overig">Overig</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1 block">Locație</label>
                <Input
                  value={form.location}
                  onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                  placeholder="ex: Rotterdam"
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Descriere</label>
              <Textarea
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                placeholder="Scurtă descriere a lucrării..."
                className="bg-slate-800 border-slate-700 text-white resize-none"
                rows={3}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={form.is_featured}
                onChange={e => setForm(f => ({ ...f, is_featured: e.target.checked }))}
                className="rounded"
              />
              <label htmlFor="featured" className="text-sm text-slate-300">Marchează ca Featured (apare în prim plan)</label>
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={() => setShowForm(false)} className="flex-1 text-slate-400">
                Anulează
              </Button>
              <Button type="submit" disabled={!form.image_url || uploading} className="flex-1 bg-orange-500 hover:bg-orange-600">
                Adaugă Lucrarea
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}