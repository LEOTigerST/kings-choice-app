import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MobileLayout: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const getNavClass = (path: string) => {
    return location.pathname === path 
      ? 'flex flex-col items-center justify-center text-[#8ff5ff] bg-[#25252c] rounded-xl px-4 py-1.5 shadow-[0_0_15px_rgba(143,245,255,0.15)] active:scale-90 transition-all duration-200' 
      : 'flex flex-col items-center justify-center text-[#acaab1] opacity-60 hover:opacity-100 hover:text-[#8ff5ff] active:scale-90 transition-all duration-200';
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#0e0e13]/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.5)] flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20">
            <img alt="Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXTL9xc3PHKEYgXZZWSVGAVT01m8DRFSM2zYYmcVZSnGCElbgkKttxgm9vELUFrNulNJhPlDn5zC1YKMBbwdfhTTBkCV1q4_Y3-7jOoCIivXqBQYGBMMrZpNER82IonWv6yfscjGQtY3Hk-aTIWXUjWWB2Dm4dWfSST2PKk_-U_3JMReU04dGlrROd5SOq220Y0kaEA1CXHRdDF_oEkU9UNm7IHG3aZA4KmA7fv8hj7fGsPBKCNEvUBjfEDGUZmJzXUVpfIojaAbA"/>
          </div>
          <span className="font-headline tracking-tight uppercase text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#8ff5ff] to-[#00eefc]">{t('header.kinetic')}</span>
        </div>
        <div className="text-[#8ff5ff] font-headline tracking-tight uppercase text-sm font-medium bg-surface-container-high px-3 py-1.5 rounded-full shadow-[0_0_40px_rgba(143,245,255,0.08)]">
            {t('header.fate_label')}: 1,200 | {t('header.lang_code')}
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 w-full z-50 rounded-t-2xl bg-[#131318]/90 backdrop-blur-lg no-border bg-gradient-to-t from-[#0e0e13] to-transparent shadow-[0_-8px_32px_rgba(0,0,0,0.8)] flex justify-around items-center pt-3 pb-6 px-4">
        <Link to="/console" className={getNavClass('/console')}>
          <span className="material-symbols-outlined leading-none">dashboard</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">{t('nav.console', 'Console')}</span>
        </Link>
        <Link to="/store" className={getNavClass('/store')}>
          <span className="material-symbols-outlined leading-none">shopping_bag</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">{t('nav.store', 'Store')}</span>
        </Link>
        <Link to="/games" className={getNavClass('/games')}>
          <span className="material-symbols-outlined leading-none">sports_esports</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">{t('nav.play', 'Play')}</span>
        </Link>
        <Link to="/prize-inquiry" className={getNavClass('/prize-inquiry')}>
          <span className="material-symbols-outlined leading-none">receipt_long</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">{t('nav.prizes', 'Prizes')}</span>
        </Link>
        <Link to="/settings" className={getNavClass('/settings')}>
          <span className="material-symbols-outlined leading-none">settings</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">{t('nav.settings', 'Settings')}</span>
        </Link>
      </nav>
    </>
  );
};
