import React from 'react';
import { useLanguage } from '../LanguageContext';
import { MessageCircle, Facebook, Shield } from 'lucide-react';

export default function Footer({ onPrivacyClick }) {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.whyUs, id: 'why-us' },
    { label: t.nav.area, id: 'area' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/16837212d_8051c5d1-eebb-4e8a-b2c0-71bf135047111.jpg"
              alt="DB Kozijnen & Deuren"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/40785570289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/darius.budeic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onPrivacyClick}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {t.footer.privacy}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} DB Kozijnen & Deuren. {t.footer.rights}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Shield className="w-3 h-3" />
              {t.footer.noDataNotice}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}