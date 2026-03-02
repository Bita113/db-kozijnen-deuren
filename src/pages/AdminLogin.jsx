import React, { useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { createPageUrl } from '@/utils';

export default function AdminLogin() {
  useEffect(() => {
    const check = async () => {
      try {
        const me = await base44.auth.me();
        if (me && me.role === 'admin') {
          window.location.href = createPageUrl('AdminDashboard');
        }
      } catch {
        // not logged in, show login
      }
    };
    check();
  }, []);

  const handleLogin = () => {
    base44.auth.redirectToLogin(createPageUrl('AdminDashboard'));
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698b90da9ebb9fa24ae1ca6b/16837212d_8051c5d1-eebb-4e8a-b2c0-71bf135047111.jpg"
            alt="DB Kozijnen & Deuren"
            className="h-12 w-auto object-contain mb-4"
          />
          <h1 className="text-white text-xl font-bold">Admin toegang</h1>
          <p className="text-slate-400 text-sm mt-1 text-center">Alleen voor bevoegd personeel</p>
        </div>

        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-slate-300 text-sm text-center">
            Klik op de knop hieronder om in te loggen met uw beheerdersaccount.
          </p>
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
          >
            Inloggen
          </button>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          © DB Kozijnen & Deuren
        </p>
      </div>
    </div>
  );
}